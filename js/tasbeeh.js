/**
 * Online Quran Academy — Teacher Bua Qasim Shigry
 * Digital Tasbeeh Counter (js/tasbeeh.js)
 * Clean, lightweight vanilla JS for digital dhikr counter with Web Audio click
 */

const DHIKR_PRESETS = [
  {
    id: "subhanallah",
    arabic: "سُبْحَانَ اللَّهِ",
    transliteration: "SubhanAllah",
    translation: "Glory be to Allah",
    defaultTarget: 33
  },
  {
    id: "alhamdulillah",
    arabic: "الْحَمْدُ لِلَّهِ",
    transliteration: "Alhamdulillah",
    translation: "All praise belongs to Allah",
    defaultTarget: 33
  },
  {
    id: "allahuakbar",
    arabic: "اللَّهُ أَكْبَرُ",
    transliteration: "Allahu Akbar",
    translation: "Allah is the Greatest",
    defaultTarget: 34
  },
  {
    id: "astaghfirullah",
    arabic: "أَسْتَغْفِرُ اللَّهَ",
    transliteration: "Astaghfirullah",
    translation: "I seek forgiveness from Allah",
    defaultTarget: 100
  },
  {
    id: "lailahaillallah",
    arabic: "لَا إِلٰهَ إِلَّا اللَّهُ",
    transliteration: "La ilaha illallah",
    translation: "There is no deity worthy of worship except Allah",
    defaultTarget: 100
  },
  {
    id: "subhanallah_bihamdihi",
    arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ ، سُبْحَانَ اللَّهِ الْعَظِيمِ",
    transliteration: "SubhanAllahi wa bihamdihi, SubhanAllahil Azeem",
    translation: "Glory be to Allah and all praise; Glory be to Allah the Magnificent",
    defaultTarget: 100
  }
];

class DigitalTasbeeh {
  constructor() {
    this.storageKey = 'quran_academy_tasbeeh_state';
    this.audioEnabled = false;
    this.audioContext = null;

    // Load saved or defaults
    const saved = this.loadState();
    this.count = saved.count || 0;
    this.target = saved.target || 33;
    this.currentDhikrId = saved.dhikrId || "subhanallah";
    this.history = [];

    this.init();
  }

  loadState() {
    try {
      const raw = localStorage.getItem(this.storageKey);
      if (raw) return JSON.parse(raw);
    } catch (e) {
      console.warn("LocalStorage access unavailable in this environment", e);
    }
    return {};
  }

  saveState() {
    try {
      const data = {
        count: this.count,
        target: this.target,
        dhikrId: this.currentDhikrId
      };
      localStorage.setItem(this.storageKey, JSON.stringify(data));
    } catch (e) {
      // Graceful fallback
    }
  }

  playClickSound() {
    if (!this.audioEnabled) return;
    try {
      if (!this.audioContext) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        this.audioContext = new AudioCtx();
      }
      if (this.audioContext.state === 'suspended') {
        this.audioContext.resume();
      }
      const osc = this.audioContext.createOscillator();
      const gain = this.audioContext.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(640, this.audioContext.currentTime);
      gain.gain.setValueAtTime(0.08, this.audioContext.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(this.audioContext.destination);

      osc.start();
      osc.stop(this.audioContext.currentTime + 0.06);
    } catch (err) {
      // Audio not supported or blocked by user gesture
    }
  }

  increment() {
    this.history.push(this.count);
    this.count++;
    this.playClickSound();

    if (this.target > 0 && this.count === this.target) {
      if (typeof showToast === 'function') {
        showToast(`Target of ${this.target} reached! Alhamdulillah.`, 'success');
      }
    }

    this.saveState();
    this.render();
  }

  undo() {
    if (this.history.length > 0) {
      this.count = this.history.pop();
      this.saveState();
      this.render();
    } else if (this.count > 0) {
      this.count--;
      this.saveState();
      this.render();
    }
  }

  reset() {
    if (this.count === 0) return;
    if (confirm("Reset current Tasbeeh counter to 0?")) {
      this.history.push(this.count);
      this.count = 0;
      this.saveState();
      this.render();
    }
  }

  setTarget(targetVal) {
    this.target = targetVal;
    this.saveState();
    this.render();
  }

  setDhikr(dhikrId) {
    const preset = DHIKR_PRESETS.find(d => d.id === dhikrId);
    if (preset) {
      this.currentDhikrId = preset.id;
      this.target = preset.defaultTarget;
      this.count = 0;
      this.history = [];
      this.saveState();
      this.render();
    }
  }

  render() {
    const countEl = document.getElementById('tasbeehCountValue');
    const targetEl = document.getElementById('tasbeehTargetValue');
    const progressFill = document.getElementById('tasbeehProgressFill');
    const arabicEl = document.getElementById('tasbeehArabic');
    const transEl = document.getElementById('tasbeehTransliteration');
    const translEl = document.getElementById('tasbeehTranslation');

    const currentPreset = DHIKR_PRESETS.find(d => d.id === this.currentDhikrId) || DHIKR_PRESETS[0];

    if (countEl) countEl.textContent = this.count;
    if (targetEl) targetEl.textContent = this.target > 0 ? `/ ${this.target}` : 'Free Count';
    if (arabicEl) arabicEl.textContent = currentPreset.arabic;
    if (transEl) transEl.textContent = currentPreset.transliteration;
    if (translEl) translEl.textContent = currentPreset.translation;

    if (progressFill) {
      if (this.target > 0) {
        const percent = Math.min(100, Math.round((this.count / this.target) * 100));
        progressFill.style.width = `${percent}%`;
      } else {
        progressFill.style.width = '100%';
      }
    }

    // Update target buttons
    document.querySelectorAll('.target-preset-btn').forEach(btn => {
      const val = parseInt(btn.getAttribute('data-target'), 10);
      if (val === this.target) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update select element if present
    const selectEl = document.getElementById('dhikrSelect');
    if (selectEl && selectEl.value !== this.currentDhikrId) {
      selectEl.value = this.currentDhikrId;
    }
  }

  init() {
    // Increment on click on the main circle
    const circleBtn = document.getElementById('tasbeehCircle');
    if (circleBtn) {
      circleBtn.addEventListener('click', () => this.increment());
    }

    const incBtn = document.getElementById('tasbeehIncrementBtn');
    if (incBtn) {
      incBtn.addEventListener('click', () => this.increment());
    }

    const undoBtn = document.getElementById('tasbeehUndoBtn');
    if (undoBtn) {
      undoBtn.addEventListener('click', () => this.undo());
    }

    const resetBtn = document.getElementById('tasbeehResetBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => this.reset());
    }

    const soundToggle = document.getElementById('tasbeehSoundToggle');
    if (soundToggle) {
      soundToggle.addEventListener('click', () => {
        this.audioEnabled = !this.audioEnabled;
        soundToggle.textContent = this.audioEnabled ? "Sound: ON" : "Sound: OFF";
        soundToggle.classList.toggle('active', this.audioEnabled);
      });
    }

    // Target buttons
    document.querySelectorAll('.target-preset-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetVal = parseInt(btn.getAttribute('data-target'), 10);
        this.setTarget(targetVal);
      });
    });

    // Dhikr Select Dropdown
    const selectEl = document.getElementById('dhikrSelect');
    if (selectEl) {
      selectEl.innerHTML = DHIKR_PRESETS.map(d => `
        <option value="${d.id}">${d.transliteration} — ${d.translation}</option>
      `).join('');
      selectEl.value = this.currentDhikrId;
      selectEl.addEventListener('change', (e) => {
        this.setDhikr(e.target.value);
      });
    }

    // Spacebar to count if tasbeeh card is visible
    document.addEventListener('keydown', (e) => {
      if (e.code === 'Space' && document.getElementById('tasbeehCard')) {
        // Prevent page scroll only when not focusing an input or textarea
        if (!['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) {
          e.preventDefault();
          this.increment();
        }
      }
    });

    this.render();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('tasbeehCountValue')) {
    window.tasbeehInstance = new DigitalTasbeeh();
  }
});
