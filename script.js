/* ==========================================================================
   FOR MY NANDUU ❤️ - JAVASCRIPT MASTER INTERACTIVE & SUSPENSE ENGINE
   Crafted with unconditional love, 3D tilt, realistic sound FX & showstoppers!
   Milestone: 20 November 2025 | Keshuu & Nanduu Forever
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. PROCEDURAL WEB AUDIO SYNTHESIZER (HEARTBEAT, SNIP, CLINK, MUSIC)
     ========================================================================== */
  let audioCtx = null;
  let isPlayingMusic = false;
  let musicInterval = null;
  const musicToggleBtn = document.getElementById('music-toggle');
  const bgAudio = document.getElementById('bg-audio');

  function initAudioContext() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  // Soft romantic chime
  function playSweetChime() {
    initAudioContext();
    if (!audioCtx) return;
    const now = audioCtx.currentTime;
    [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);
      gain.gain.setValueAtTime(0.08, now + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.08 + 0.6);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.7);
    });
  }

  // Deep Suspense Heartbeat Synth: "thump-thump"
  function playHeartbeatSound() {
    initAudioContext();
    if (!audioCtx) return;
    const now = audioCtx.currentTime;

    function thump(time, intensity) {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(70, time);
      osc.frequency.exponentialRampToValueAtTime(35, time + 0.15);

      gain.gain.setValueAtTime(intensity, time);
      gain.gain.exponentialRampToValueAtTime(0.001, time + 0.18);

      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(time);
      osc.stop(time + 0.2);
    }

    thump(now, 0.4);
    thump(now + 0.22, 0.28);
  }

  // Ribbon Snip Sound Effect
  function playSnipSound() {
    initAudioContext();
    if (!audioCtx) return;
    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(1400, now);
    osc.frequency.exponentialRampToValueAtTime(400, now + 0.1);
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(now);
    osc.stop(now + 0.14);
  }

  // Metallic Key Turn Sound Effect
  function playKeyClickSound() {
    initAudioContext();
    if (!audioCtx) return;
    const now = audioCtx.currentTime;
    [1200, 1800, 900].forEach((freq, i) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + i * 0.05);
      gain.gain.setValueAtTime(0.12, now + i * 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.05 + 0.1);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now + i * 0.05);
      osc.stop(now + i * 0.05 + 0.12);
    });
  }

  // Grand Explosion Crescendo Sound Effect
  function playExplosionSound() {
    initAudioContext();
    if (!audioCtx) return;
    const now = audioCtx.currentTime;

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(120, now);
    osc.frequency.exponentialRampToValueAtTime(30, now + 1.2);
    gain.gain.setValueAtTime(0.5, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 1.4);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(now);
    osc.stop(now + 1.5);

    [523, 659, 783, 1046, 1318, 1567].forEach((freq, idx) => {
      const bOsc = audioCtx.createOscillator();
      const bGain = audioCtx.createGain();
      bOsc.type = 'sine';
      bOsc.frequency.setValueAtTime(freq, now + 0.15 + idx * 0.08);
      bGain.gain.setValueAtTime(0.1, now + 0.15 + idx * 0.08);
      bGain.gain.exponentialRampToValueAtTime(0.001, now + 0.15 + idx * 0.08 + 0.8);
      bOsc.connect(bGain);
      bGain.connect(audioCtx.destination);
      bOsc.start(now + 0.15 + idx * 0.08);
      bOsc.stop(now + 0.15 + idx * 0.08 + 0.9);
    });
  }

  // Soft Indian/Bollywood Raag & Romantic Pentatonic Lofi Melodies (Fallback Synth)
  const bollywoodMelodyNotes = [
    261.63, 293.66, 329.63, 392.00, 440.00, 523.25, // Sa Re Ga Pa Dha Sa (Bhoopali Romance)
    440.00, 392.00, 329.63, 293.66, 261.63,
    329.63, 392.00, 523.25, 587.33, 659.25
  ];

  function playMusicBoxNote(freq, time = 0) {
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime + time);
    gain.gain.setValueAtTime(0, audioCtx.currentTime + time);
    gain.gain.linearRampToValueAtTime(0.12, audioCtx.currentTime + time + 0.06);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + time + 1.9);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(audioCtx.currentTime + time);
    osc.stop(audioCtx.currentTime + time + 2.0);
  }

  function startProceduralMelody() {
    let noteIdx = 0;
    musicInterval = setInterval(() => {
      const freq = bollywoodMelodyNotes[noteIdx % bollywoodMelodyNotes.length];
      playMusicBoxNote(freq, 0);
      if (Math.random() > 0.45) {
        const harmonyFreq = bollywoodMelodyNotes[(noteIdx + 3) % bollywoodMelodyNotes.length] * 1.5;
        playMusicBoxNote(harmonyFreq, 0.28);
      }
      noteIdx++;
    }, 480);
  }

  function stopProceduralMelody() {
    if (musicInterval) {
      clearInterval(musicInterval);
      musicInterval = null;
    }
  }

  function toggleMusic() {
    initAudioContext();
    if (!isPlayingMusic) {
      if (bgAudio) {
        bgAudio.volume = 0.6;
        bgAudio.play().then(() => {
          isPlayingMusic = true;
          musicToggleBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i> <span class="music-label">Bollywood Playing 🎵</span>';
        }).catch(() => {
          startProceduralMelody();
          isPlayingMusic = true;
          musicToggleBtn.innerHTML = '<i class="fa-solid fa-bell"></i> <span class="music-label">Bollywood Synth 🎶</span>';
        });
      } else {
        startProceduralMelody();
        isPlayingMusic = true;
        musicToggleBtn.innerHTML = '<i class="fa-solid fa-bell"></i> <span class="music-label">Bollywood Synth 🎶</span>';
      }
    } else {
      if (bgAudio) bgAudio.pause();
      stopProceduralMelody();
      isPlayingMusic = false;
      musicToggleBtn.innerHTML = '<i class="fa-solid fa-music"></i> <span class="music-label">Bollywood Melody 🎵</span>';
    }
  }
  musicToggleBtn.addEventListener('click', toggleMusic);

  /* ==========================================================================
     2. INTERACTIVE CURSOR SPARKLE & HEART TRAIL
     ========================================================================== */
  const trailCanvas = document.getElementById('trail-canvas');
  const trailCtx = trailCanvas.getContext('2d');
  let tWidth = (trailCanvas.width = window.innerWidth);
  let tHeight = (trailCanvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    tWidth = trailCanvas.width = window.innerWidth;
    tHeight = trailCanvas.height = window.innerHeight;
  });

  const sparks = [];
  const sparkSymbols = ['✨', '💖', '⭐', '🌸'];

  class Spark {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.size = Math.random() * 14 + 10;
      this.symbol = sparkSymbols[Math.floor(Math.random() * sparkSymbols.length)];
      this.vx = (Math.random() - 0.5) * 2.5;
      this.vy = (Math.random() - 0.5) * 2.5 - 1.2;
      this.alpha = 1;
      this.decay = Math.random() * 0.035 + 0.02;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.alpha -= this.decay;
    }
    draw() {
      trailCtx.save();
      trailCtx.globalAlpha = Math.max(0, this.alpha);
      trailCtx.font = `${this.size}px serif`;
      trailCtx.fillText(this.symbol, this.x, this.y);
      trailCtx.restore();
    }
  }

  function addSparks(x, y, count = 2) {
    for (let i = 0; i < count; i++) {
      sparks.push(new Spark(x, y));
    }
  }

  window.addEventListener('mousemove', (e) => {
    addSparks(e.clientX, e.clientY, 1);
  });

  window.addEventListener('touchmove', (e) => {
    if (e.touches && e.touches[0]) {
      addSparks(e.touches[0].clientX, e.touches[0].clientY, 2);
    }
  }, { passive: true });

  function animateTrail() {
    trailCtx.clearRect(0, 0, tWidth, tHeight);
    for (let i = sparks.length - 1; i >= 0; i--) {
      sparks[i].update();
      sparks[i].draw();
      if (sparks[i].alpha <= 0) {
        sparks.splice(i, 1);
      }
    }
    requestAnimationFrame(animateTrail);
  }
  animateTrail();

  /* ==========================================================================
     3. 3D CARD TILT EFFECT (DESKTOP & GYROSCOPE)
     ========================================================================== */
  const tiltElements = document.querySelectorAll('[data-tilt]');
  tiltElements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;

      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });

  /* ==========================================================================
     4. BACKGROUND FLOATING HEARTS & PARTICLES
     ========================================================================== */
  const bgCanvas = document.getElementById('bg-canvas');
  const bgCtx = bgCanvas.getContext('2d');
  let bgWidth = (bgCanvas.width = window.innerWidth);
  let bgHeight = (bgCanvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    bgWidth = bgCanvas.width = window.innerWidth;
    bgHeight = bgCanvas.height = window.innerHeight;
  });

  const particles = [];
  const heartSymbols = ['❤️', '💖', '💕', '✨', '🌸', '💗', '🥰'];

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * bgWidth;
      this.y = bgHeight + Math.random() * 50;
      this.size = Math.random() * 18 + 12;
      this.speedY = Math.random() * 1.5 + 0.6;
      this.speedX = (Math.random() - 0.5) * 1.2;
      this.symbol = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
      this.opacity = Math.random() * 0.6 + 0.2;
      this.rotation = Math.random() * 360;
      this.rotSpeed = (Math.random() - 0.5) * 2;
    }
    update() {
      this.y -= this.speedY;
      this.x += this.speedX;
      this.rotation += this.rotSpeed;
      if (this.y < -40) this.reset();
    }
    draw() {
      bgCtx.save();
      bgCtx.globalAlpha = this.opacity;
      bgCtx.font = `${this.size}px serif`;
      bgCtx.translate(this.x, this.y);
      bgCtx.rotate((this.rotation * Math.PI) / 180);
      bgCtx.fillText(this.symbol, -this.size / 2, this.size / 2);
      bgCtx.restore();
    }
  }

  for (let i = 0; i < 35; i++) {
    const p = new Particle();
    p.y = Math.random() * bgHeight;
    particles.push(p);
  }

  function animateBg() {
    bgCtx.clearRect(0, 0, bgWidth, bgHeight);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animateBg);
  }
  animateBg();

  /* ==========================================================================
     5. STAGE 0: LOVE SECURITY GATE
     ========================================================================== */
  const loveGate = document.getElementById('love-gate');
  const gateInput = document.getElementById('gate-input');
  const gateUnlockBtn = document.getElementById('gate-unlock-btn');
  const gateError = document.getElementById('gate-error');
  const fingerprintZone = document.getElementById('fingerprint-zone');

  function unlockTheUniverse() {
    playSweetChime();
    triggerMegaConfetti();
    loveGate.classList.add('unlocked');
    setTimeout(() => {
      loveGate.style.display = 'none';
    }, 850);

    setTimeout(() => {
      if (!isPlayingMusic) toggleMusic();
    }, 1200);
  }

  gateUnlockBtn.addEventListener('click', () => {
    const val = (gateInput.value || '').trim().toLowerCase();
    if (val === 'yes' || val === 'nandu' || val === 'nanduu' || val.includes('love') || 
        val.includes('keshuu') || val.includes('keshu') || val.includes('krish') || val === 'y') {
      unlockTheUniverse();
    } else if (val === '') {
      gateError.textContent = "Please answer, pretty girl! Are you Keshuu's favorite person? 😉";
    } else {
      gateError.textContent = "Secret Passcode hint: It's 'YES', 'NANDUU' or 'KESHUU'! 💖";
    }
  });

  gateInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') gateUnlockBtn.click();
  });

  let scanTimeout = null;
  const scannerEl = fingerprintZone.querySelector('.fingerprint-scanner');
  function startFingerprintScan() {
    scannerEl.classList.add('scanning');
    gateError.textContent = "Scanning cuteness levels... 100% Angelic! ✨";
    scanTimeout = setTimeout(unlockTheUniverse, 1200);
  }
  function stopFingerprintScan() {
    if (scanTimeout) {
      clearTimeout(scanTimeout);
      scannerEl.classList.remove('scanning');
    }
  }

  fingerprintZone.addEventListener('mousedown', startFingerprintScan);
  fingerprintZone.addEventListener('mouseup', stopFingerprintScan);
  fingerprintZone.addEventListener('touchstart', (e) => {
    e.preventDefault();
    startFingerprintScan();
  });
  fingerprintZone.addEventListener('touchend', stopFingerprintScan);

  /* ==========================================================================
     6. SHOWSTOPPER: THE SUSPENSE MYSTERY VAULT ENGINE
     ========================================================================== */
  const giftBox3D = document.getElementById('gift-box-3d');
  const lidBow = document.getElementById('lid-bow');
  const keyhole = document.getElementById('keyhole');
  const stepRibbon = document.getElementById('step-ribbon');
  const stepKey = document.getElementById('step-key');
  const stepOpen = document.getElementById('step-open');
  const cutRibbonBtn = document.getElementById('cut-ribbon-btn');
  const turnKeyBtn = document.getElementById('turn-key-btn');
  const openBoxBtn = document.getElementById('open-box-btn');
  const vaultStatusText = document.getElementById('vault-status-text');
  const vaultHeartbeatText = document.getElementById('vault-heartbeat-text');
  const suspenseCountdown = document.getElementById('suspense-countdown');
  const countdownNumber = document.getElementById('countdown-number');
  const grandRevealCard = document.getElementById('grand-reveal-card');

  let vaultStep = 1;

  // STEP 1: Cut Ribbon
  cutRibbonBtn.addEventListener('click', () => {
    playSnipSound();
    playSweetChime();
    triggerMegaConfetti();

    lidBow.style.transform = 'scale(0) rotate(180deg)';
    lidBow.style.opacity = '0';
    document.querySelector('.lid-ribbon').style.background = 'transparent';
    document.querySelector('.body-ribbon').style.background = 'transparent';

    stepRibbon.classList.remove('active');
    stepRibbon.classList.add('completed');
    cutRibbonBtn.disabled = true;
    cutRibbonBtn.innerHTML = 'Ribbon Severed! ✂️✅';

    stepKey.classList.remove('locked');
    stepKey.classList.add('active');
    turnKeyBtn.disabled = false;

    vaultStatusText.textContent = "VAULT INTEGRITY: 50% (Ribbon Broken)";
    vaultHeartbeatText.textContent = "PULSE: 95 BPM (Excitement detected)";
    vaultStep = 2;
  });

  // STEP 2: Turn Key
  turnKeyBtn.addEventListener('click', () => {
    playKeyClickSound();
    playSweetChime();

    keyhole.style.transform = 'rotate(90deg) scale(1.15)';
    keyhole.style.borderColor = '#06d6a0';

    stepKey.classList.remove('active');
    stepKey.classList.add('completed');
    turnKeyBtn.disabled = true;
    turnKeyBtn.innerHTML = 'Lock Disengaged! 🗝️✅';

    stepOpen.classList.remove('locked');
    stepOpen.classList.add('active');
    openBoxBtn.disabled = false;

    vaultStatusText.textContent = "VAULT INTEGRITY: 0% UNLOCKED!";
    vaultHeartbeatText.textContent = "PULSE: 120 BPM (CRITICAL SUSPENSE!)";
    vaultStep = 3;
  });

  // STEP 3: Detonate & Grand Reveal
  openBoxBtn.addEventListener('click', () => {
    openBoxBtn.disabled = true;
    stepOpen.classList.remove('active');
    stepOpen.classList.add('completed');

    giftBox3D.classList.add('rumble');
    suspenseCountdown.classList.remove('hidden');

    let count = 3;
    countdownNumber.textContent = count;
    playHeartbeatSound();

    const countTimer = setInterval(() => {
      count--;
      if (count > 0) {
        countdownNumber.textContent = count;
        playHeartbeatSound();
      } else {
        clearInterval(countTimer);
        suspenseCountdown.classList.add('hidden');
        giftBox3D.classList.remove('rumble');
        
        playExplosionSound();
        giftBox3D.classList.add('opened');
        grandRevealCard.classList.remove('hidden');

        triggerMegaConfetti();
        setTimeout(triggerMegaConfetti, 400);
        setTimeout(triggerMegaConfetti, 900);

        grandRevealCard.scrollIntoView({ behavior: 'smooth' });
      }
    }, 1000);
  });

  // Certificate Print / Download
  window.printCertificate = function() {
    window.print();
  };

  /* ==========================================================================
     7. LIVE LOVE COUNTER (SINCE 20 NOVEMBER 2025)
     ========================================================================== */
  const relationshipStart = new Date('2025-11-20T00:00:00');

  function updateLoveTimer() {
    const now = new Date();
    const diff = Math.abs(now - relationshipStart);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minsEl = document.getElementById('minutes');
    const secsEl = document.getElementById('seconds');

    if (daysEl) daysEl.textContent = String(days).padStart(3, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minsEl) minsEl.textContent = String(minutes).padStart(2, '0');
    if (secsEl) secsEl.textContent = String(seconds).padStart(2, '0');
  }
  setInterval(updateLoveTimer, 1000);
  updateLoveTimer();

  /* ==========================================================================
     8. PLAYFUL RUNAWAY "NO" BUTTON
     ========================================================================== */
  const yesBtn = document.getElementById('yes-btn');
  const noBtn = document.getElementById('no-btn');
  const celebrationBox = document.getElementById('yes-celebration');
  const buttonPlayground = document.getElementById('button-playground');

  const runawayPhrases = [
    "NO 🥺",
    "Are you sure? 🤨",
    "Think again, cutie! 💖",
    "Keshuu will cry buckets! 😭",
    "Wrong button! Try the green one! 😜",
    "You can't catch me! 🏃‍♀️💨",
    "Nice try! Still impossible! 😂",
    "Error 404: 'NO' Not Found 🚫",
    "Free Hugs If You Click YES! 🎁",
    "Nanduu please! 🥺❤️"
  ];
  let phraseIndex = 0;
  let yesScale = 1;

  function moveNoButton() {
    phraseIndex = (phraseIndex + 1) % runawayPhrases.length;
    noBtn.querySelector('span').textContent = runawayPhrases[phraseIndex];

    yesScale += 0.12;
    if (yesScale < 2.2) {
      yesBtn.style.transform = `scale(${yesScale})`;
    }

    const playgroundRect = buttonPlayground.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    const maxX = playgroundRect.width - btnRect.width - 20;
    const maxY = 180;

    const randomX = Math.floor(Math.random() * (maxX > 0 ? maxX : 150)) - (maxX / 2);
    const randomY = Math.floor(Math.random() * maxY) - (maxY / 2);

    noBtn.style.position = 'relative';
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
  }

  noBtn.addEventListener('mouseover', moveNoButton);
  noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveNoButton();
  });
  noBtn.addEventListener('click', (e) => {
    e.preventDefault();
    moveNoButton();
  });

  yesBtn.addEventListener('click', () => {
    triggerMegaConfetti();
    playSweetChime();
    celebrationBox.classList.remove('hidden');
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
  });

  /* ==========================================================================
     9. LOVE METER INTENSITY TEST
     ========================================================================== */
  const calculateLoveBtn = document.getElementById('calculate-love-btn');
  const meterFill = document.getElementById('meter-fill');
  const meterPercentage = document.getElementById('meter-percentage');
  const meterMessage = document.getElementById('meter-message');

  const meterQuotes = [
    "Warming up affection sensors...",
    "Analyzing your gorgeous smile...",
    "Calculating cute moments & cozy cuddles...",
    "WARNING: Love levels exceeding normal human limits! 🚨",
    "WARNING: CRITICAL LOVE OVERLOAD! SYSTEM CANNOT CONTAIN IT!",
    "FINAL RESULT: Keshuu loves Nanduu by 1,000,000,000% !! 💖♾️"
  ];

  calculateLoveBtn.addEventListener('click', () => {
    calculateLoveBtn.disabled = true;
    meterFill.style.width = '0%';
    meterPercentage.textContent = '0%';
    let currentPct = 0;

    const interval = setInterval(() => {
      currentPct += Math.floor(Math.random() * 12) + 5;
      
      if (currentPct > 100) {
        currentPct = 100;
        clearInterval(interval);
        
        setTimeout(() => {
          meterFill.classList.add('overflow');
          meterFill.style.width = '100%';
          meterPercentage.textContent = '1,000,000,000% 💥';
          meterMessage.textContent = meterQuotes[5];
          triggerMegaConfetti();
          playSweetChime();
          calculateLoveBtn.disabled = false;
          calculateLoveBtn.innerHTML = '<i class="fa-solid fa-rotate-right"></i> Recalculate (Still Infinity!)';
        }, 1200);
      } else {
        meterFill.style.width = `${currentPct}%`;
        meterPercentage.textContent = `${currentPct}%`;
        if (currentPct > 20 && currentPct <= 45) meterMessage.textContent = meterQuotes[1];
        else if (currentPct > 45 && currentPct <= 75) meterMessage.textContent = meterQuotes[2];
        else if (currentPct > 75 && currentPct <= 99) meterMessage.textContent = meterQuotes[3];
        else if (currentPct === 100) meterMessage.textContent = meterQuotes[4];
      }
    }, 100);
  });

  /* ==========================================================================
     10. VIRTUAL 3D ENVELOPE & CRAZY LOVE LETTER
     ========================================================================== */
  const envelope = document.getElementById('envelope');
  const waxSeal = document.getElementById('wax-seal');
  const openLetterBtn = document.getElementById('open-letter-action-btn');
  const letterCloseBtn = document.getElementById('letter-close-btn');

  function openEnvelope() {
    playSweetChime();
    triggerMegaConfetti();
    envelope.classList.add('open');
    if (openLetterBtn) {
      openLetterBtn.innerHTML = '<i class="fa-solid fa-envelope-circle-check"></i> Close Crazy Letter 💌';
    }
  }

  function closeEnvelope() {
    envelope.classList.remove('open');
    if (openLetterBtn) {
      openLetterBtn.innerHTML = '<i class="fa-solid fa-envelope-open-text"></i> Open My Crazy Letter 💌';
    }
  }

  function toggleEnvelope(e) {
    if (e) e.stopPropagation();
    if (envelope.classList.contains('open')) {
      closeEnvelope();
    } else {
      openEnvelope();
    }
  }

  if (waxSeal) {
    waxSeal.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleEnvelope(e);
    });
  }

  if (openLetterBtn) {
    openLetterBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleEnvelope(e);
    });
  }

  if (letterCloseBtn) {
    letterCloseBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeEnvelope();
    });
  }

  if (envelope) {
    envelope.addEventListener('click', (e) => {
      if (e.target.closest('.letter-paper')) return;
      toggleEnvelope(e);
    });
  }

  // Fullscreen Crazy Letter Modal
  window.openFullscreenLetter = function() {
    playSweetChime();
    triggerMegaConfetti();
    const modalIcon = document.getElementById('modal-icon');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const letterModal = document.getElementById('letter-modal');

    modalIcon.textContent = "🔥💌💖";
    modalTitle.textContent = "Keshuu's Crazy Love Letter To Nanduu";
    modalBody.innerHTML = `
      <div style="background: rgba(255, 42, 112, 0.15); border: 1px dashed #ff2a70; padding: 10px; border-radius: 8px; margin-bottom: 15px; font-weight: bold; color: #ffd166; text-align: center;">
        ⚠️ WARNING: EXTREME OBSESSION & CRAZY LOVE AHEAD ⚠️
      </div>
      <p style="font-size: 1.2rem; font-weight: 700; color: #ffbed6; margin-bottom: 12px;">My Dearest, Chaotic, Prettiest Soulmate Nanduu,</p>
      <p>Listen to me, Nanduu: On <strong>20 November 2025</strong>, my soul took one look at you and immediately surrendered. No questions asked. No backup plans. It just declared: <em>"Yep, that’s her. That’s the chaotic, breathtaking angel we are going to love like crazy for the rest of our lives."</em></p>
      <p>I am not just in love with you; I am <strong>unapologetically, crazily, uncontrollably obsessed with you!</strong> I love the silly faces you make. I love the way your eyes sparkle when you're being playful. I love the cute, dramatic sighs you let out when you're annoyed, and I swear to God, even your angry pouts look illegally adorable to me.</p>
      <p>You are my 2:00 AM thoughts, my favorite notification sound, my 5-star comfort food, and my entire universe packed into the prettiest girl on Earth. If the whole world is on one side and you are on the other, I would throw on a cape and fight the whole world for you without blinking once.</p>
      <p>I promise you a lifetime where you never have to wonder if you are loved. I will buy you your favorite treats, hold your hand when you're overwhelmed, annoy you with infinite kisses, and wipe every tear that dares to touch your face.</p>
      <div style="background: rgba(255, 209, 102, 0.2); border-left: 4px solid #ffd166; padding: 12px; margin: 16px 0; font-style: italic; color: #fff;">
        "If loving Nanduu is crazy, then throw Keshuu in the madhouse, because I never want to be sane again!" 💥
      </div>
      <p style="text-align: right; margin-top: 20px; font-style: italic; font-size: 1.1rem; color: #ffd166;">
        Forever your biggest fan, devotee & husband-to-be,<br>
        <strong style="font-size: 1.8rem; font-family: 'Dancing Script', cursive; color: #ff6b9d;">Keshuu ❤️</strong>
      </p>
    `;
    letterModal.classList.remove('hidden');
  };

  /* ==========================================================================
     11. 100 REASONS WHY I LOVE YOU
     ========================================================================== */
  const reasonsList = [
    "The way your smile instantly erases my worst days and replaces everything with pure peace.",
    "How adorably you talk when you're super excited about something small.",
    "The way you look at me that makes me feel like the luckiest man alive.",
    "Your warm little hands that fit so perfectly inside mine.",
    "How cute you look when you pout or pretend to be mad at me.",
    "The way you care so deeply about the people you love.",
    "Your contagious laugh that I could listen to on repeat for 24 hours straight.",
    "The fact that my favorite place in the entire world is right by your side.",
    "How you make ordinary, boring moments feel like magical movie scenes.",
    "The way you scrunch your nose when you're thinking hard.",
    "Because no matter how tough the day is, your voice is my instant remedy.",
    "The kindness and warmth that radiates from your golden heart.",
    "How you support my dreams and believe in me even when I doubt myself.",
    "Because your hugs feel like coming home after a long, exhausting journey.",
    "The cute nicknames you give me that make my heart melt every single time.",
    "How beautiful you look with messy hair, no makeup, just being your genuine self.",
    "Because you are not just my girlfriend, you are my best friend and soulmate.",
    "The silly inside jokes only the two of us understand and laugh at.",
    "How safe and peaceful my heart feels whenever I know you are happy.",
    "Because loving you is the easiest, most natural, and most wonderful thing I've ever done."
  ];

  let currentReasonIndex = 0;
  const reasonTextEl = document.getElementById('reason-text');
  const reasonNumberEl = document.getElementById('reason-number');
  const reasonCardEl = document.getElementById('reason-card');
  const prevReasonBtn = document.getElementById('prev-reason-btn');
  const nextReasonBtn = document.getElementById('next-reason-btn');
  const randomReasonBtn = document.getElementById('random-reason-btn');

  function displayReason(index) {
    reasonCardEl.classList.add('fade-out');
    setTimeout(() => {
      currentReasonIndex = (index + reasonsList.length) % reasonsList.length;
      reasonNumberEl.textContent = currentReasonIndex + 1;
      reasonTextEl.textContent = `"${reasonsList[currentReasonIndex]}"`;
      reasonCardEl.classList.remove('fade-out');
    }, 250);
  }

  if (prevReasonBtn) prevReasonBtn.addEventListener('click', () => displayReason(currentReasonIndex - 1));
  if (nextReasonBtn) nextReasonBtn.addEventListener('click', () => displayReason(currentReasonIndex + 1));
  if (randomReasonBtn) {
    randomReasonBtn.addEventListener('click', () => {
      let rand = Math.floor(Math.random() * reasonsList.length);
      if (rand === currentReasonIndex) rand = (rand + 1) % reasonsList.length;
      displayReason(rand);
      playSweetChime();
    });
  }

  /* ==========================================================================
     12. CUSTOM PHOTO UPLOAD
     ========================================================================== */
  const photoUploadInput = document.getElementById('custom-photo-upload');
  const polaroidGallery = document.getElementById('polaroid-gallery');

  if (photoUploadInput) {
    photoUploadInput.addEventListener('change', (e) => {
      const files = e.target.files;
      if (!files || files.length === 0) return;

      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          const newCard = document.createElement('div');
          newCard.className = 'polaroid-card';
          newCard.setAttribute('data-tilt', '');
          newCard.style.transform = `rotate(${(Math.random() - 0.5) * 8}deg)`;
          newCard.innerHTML = `
            <div class="polaroid-img-wrap">
              <img src="${event.target.result}" alt="Nandu and Keshuu Memory" class="polaroid-img">
              <div class="tape-strip"></div>
            </div>
            <p class="polaroid-caption">My favorite memory with my favorite girl ❤️</p>
          `;
          polaroidGallery.prepend(newCard);
          triggerMegaConfetti();
        };
        reader.readAsDataURL(file);
      });
    });
  }

  /* ==========================================================================
     13. INTERACTIVE SCRATCH CARD
     ========================================================================== */
  const scratchCanvas = document.getElementById('scratch-canvas');
  const scratchStatus = document.getElementById('scratch-status');

  if (scratchCanvas) {
    const sCtx = scratchCanvas.getContext('2d');
    scratchCanvas.width = scratchCanvas.offsetWidth || 400;
    scratchCanvas.height = scratchCanvas.offsetHeight || 250;

    function initScratchFoil() {
      const grad = sCtx.createLinearGradient(0, 0, scratchCanvas.width, scratchCanvas.height);
      grad.addColorStop(0, '#c0c0c0');
      grad.addColorStop(0.3, '#f5d6df');
      grad.addColorStop(0.7, '#d8b4e2');
      grad.addColorStop(1, '#a8a8a8');
      sCtx.fillStyle = grad;
      sCtx.fillRect(0, 0, scratchCanvas.width, scratchCanvas.height);

      sCtx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      for (let i = 0; i < 200; i++) {
        sCtx.beginPath();
        sCtx.arc(Math.random() * scratchCanvas.width, Math.random() * scratchCanvas.height, Math.random() * 2, 0, Math.PI * 2);
        sCtx.fill();
      }

      sCtx.font = 'bold 18px Outfit, sans-serif';
      sCtx.fillStyle = '#4a154b';
      sCtx.textAlign = 'center';
      sCtx.fillText('✨ SCRATCH HERE WITH LOVE ✨', scratchCanvas.width / 2, scratchCanvas.height / 2 - 10);
      sCtx.font = '13px Outfit, sans-serif';
      sCtx.fillStyle = '#6b2d5c';
      sCtx.fillText('(Use mouse or finger to reveal)', scratchCanvas.width / 2, scratchCanvas.height / 2 + 18);
    }
    initScratchFoil();

    let isScratching = false;
    let prizeRevealed = false;

    function scratch(x, y) {
      sCtx.globalCompositeOperation = 'destination-out';
      sCtx.beginPath();
      sCtx.arc(x, y, 25, 0, Math.PI * 2);
      sCtx.fill();
      checkScratchPercentage();
    }

    function checkScratchPercentage() {
      if (prizeRevealed) return;
      if (Math.random() > 0.3) return;

      const imgData = sCtx.getImageData(0, 0, scratchCanvas.width, scratchCanvas.height);
      let transparentCount = 0;
      const totalPixels = imgData.data.length / 4;

      for (let i = 3; i < imgData.data.length; i += 16) {
        if (imgData.data[i] === 0) transparentCount++;
      }

      const percent = (transparentCount / (totalPixels / 4)) * 100;
      if (percent >= 38) {
        prizeRevealed = true;
        scratchCanvas.style.transition = 'opacity 0.8s ease';
        scratchCanvas.style.opacity = '0';
        setTimeout(() => {
          scratchCanvas.style.display = 'none';
        }, 800);
        scratchStatus.innerHTML = "🎉 <strong>COUPON UNLOCKED! Nanduu has claimed Keshuu's VIP pass! ❤️</strong>";
        triggerMegaConfetti();
        playSweetChime();
      }
    }

    function getCanvasCoords(e) {
      const rect = scratchCanvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return { x: clientX - rect.left, y: clientY - rect.top };
    }

    scratchCanvas.addEventListener('mousedown', (e) => {
      isScratching = true;
      const { x, y } = getCanvasCoords(e);
      scratch(x, y);
    });

    scratchCanvas.addEventListener('mousemove', (e) => {
      if (!isScratching) return;
      const { x, y } = getCanvasCoords(e);
      scratch(x, y);
    });

    window.addEventListener('mouseup', () => (isScratching = false));

    scratchCanvas.addEventListener('touchstart', (e) => {
      isScratching = true;
      const { x, y } = getCanvasCoords(e);
      scratch(x, y);
    }, { passive: true });

    scratchCanvas.addEventListener('touchmove', (e) => {
      if (!isScratching) return;
      const { x, y } = getCanvasCoords(e);
      scratch(x, y);
    }, { passive: true });

    scratchCanvas.addEventListener('touchend', () => (isScratching = false));
  }

  /* ==========================================================================
     14. VIRTUAL BOUQUET BUILDER
     ========================================================================== */
  const bouquetContainer = document.getElementById('bouquet-flowers-container');
  const bouquetCountEl = document.getElementById('bouquet-count');
  const bouquetMeaningEl = document.getElementById('bouquet-meaning');
  let currentFlowerCount = 3;

  window.addFlower = function(emoji, name, meaning) {
    if (currentFlowerCount >= 20) {
      bouquetMeaningEl.textContent = "The vase is overflowing with flowers, just like my love for you! 💐❤️";
      return;
    }
    const span = document.createElement('span');
    span.textContent = emoji;
    span.style.animation = 'popIn 0.3s ease';
    bouquetContainer.appendChild(span);
    currentFlowerCount++;
    bouquetCountEl.textContent = `Bouquet contains: ${currentFlowerCount} blossoms`;
    bouquetMeaningEl.textContent = `Added a ${name}: "${meaning}" ✨`;
    playSweetChime();
  };

  window.resetBouquet = function() {
    bouquetContainer.innerHTML = '<span>🌹</span><span>🌷</span><span>🌸</span>';
    currentFlowerCount = 3;
    bouquetCountEl.textContent = `Bouquet contains: 3 blossoms`;
    bouquetMeaningEl.textContent = `"You make my world bloom into vibrant colors."`;
  };

  window.giftBouquet = function() {
    triggerMegaConfetti();
    playSweetChime();
    alert("💐 Ding dong! Special delivery of fresh flowers has been dispatched straight to Nanduu's heart! 🥰");
  };

  /* ==========================================================================
     15. STAR CONSTELLATION CANVAS
     ========================================================================== */
  const gCanvas = document.getElementById('galaxy-canvas');
  if (gCanvas) {
    const gCtx = gCanvas.getContext('2d');
    gCanvas.width = gCanvas.offsetWidth || 800;
    gCanvas.height = gCanvas.offsetHeight || 380;
    const stars = [];

    class Star {
      constructor(x, y, isSpecial = false) {
        this.x = x;
        this.y = y;
        this.radius = isSpecial ? 3.5 : Math.random() * 2 + 1.5;
        this.color = isSpecial ? '#ffd166' : '#ffffff';
        this.alpha = 0;
        this.targetAlpha = Math.random() * 0.5 + 0.5;
      }
      draw() {
        if (this.alpha < this.targetAlpha) this.alpha += 0.05;
        gCtx.beginPath();
        gCtx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        gCtx.fillStyle = this.color;
        gCtx.shadowColor = '#ff6b9d';
        gCtx.shadowBlur = 10;
        gCtx.globalAlpha = this.alpha;
        gCtx.fill();
        gCtx.globalAlpha = 1;
        gCtx.shadowBlur = 0;
      }
    }

    function drawConstellationLines() {
      gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dist = Math.hypot(stars[i].x - stars[j].x, stars[i].y - stars[j].y);
          if (dist < 85) {
            gCtx.beginPath();
            gCtx.moveTo(stars[i].x, stars[i].y);
            gCtx.lineTo(stars[j].x, stars[j].y);
            gCtx.strokeStyle = `rgba(255, 107, 157, ${1 - dist / 85})`;
            gCtx.lineWidth = 1;
            gCtx.stroke();
          }
        }
      }
      stars.forEach(s => s.draw());
      requestAnimationFrame(drawConstellationLines);
    }
    requestAnimationFrame(drawConstellationLines);

    gCanvas.addEventListener('click', (e) => {
      const rect = gCanvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      stars.push(new Star(x, y, true));
      playSweetChime();
    });

    const spellNanduBtn = document.getElementById('spell-nandu-btn');
    if (spellNanduBtn) {
      spellNanduBtn.addEventListener('click', () => {
        stars.length = 0;
        const w = gCanvas.width;
        const scale = w / 800;

        const points = [
          // N
          {x: 60, y: 120}, {x: 60, y: 160}, {x: 60, y: 200}, {x: 60, y: 240},
          {x: 80, y: 160}, {x: 100, y: 200},
          {x: 120, y: 120}, {x: 120, y: 160}, {x: 120, y: 200}, {x: 120, y: 240},
          // A
          {x: 180, y: 240}, {x: 190, y: 180}, {x: 205, y: 120}, {x: 220, y: 180}, {x: 230, y: 240},
          {x: 195, y: 195}, {x: 215, y: 195},
          // N
          {x: 280, y: 120}, {x: 280, y: 160}, {x: 280, y: 200}, {x: 280, y: 240},
          {x: 300, y: 160}, {x: 320, y: 200},
          {x: 340, y: 120}, {x: 340, y: 160}, {x: 340, y: 200}, {x: 340, y: 240},
          // D
          {x: 390, y: 120}, {x: 390, y: 160}, {x: 390, y: 200}, {x: 390, y: 240},
          {x: 420, y: 130}, {x: 440, y: 170}, {x: 440, y: 190}, {x: 420, y: 230},
          // U
          {x: 490, y: 120}, {x: 490, y: 170}, {x: 500, y: 220}, {x: 525, y: 240},
          {x: 550, y: 220}, {x: 560, y: 170}, {x: 560, y: 120},
          // Heart ❤️
          {x: 650, y: 140}, {x: 630, y: 120}, {x: 610, y: 140}, {x: 610, y: 170},
          {x: 650, y: 220}, {x: 690, y: 170}, {x: 690, y: 140}, {x: 670, y: 120}
        ];

        points.forEach((p, index) => {
          setTimeout(() => {
            stars.push(new Star(p.x * scale, p.y, true));
            if (index % 4 === 0) playSweetChime();
          }, index * 40);
        });

        setTimeout(triggerMegaConfetti, points.length * 40 + 300);
      });
    }
  }

  /* ==========================================================================
     16. CRAZY LOVE EXPLOSION
     ========================================================================= */
  const crazyLoveBtn = document.getElementById('crazy-love-btn');

  window.triggerMegaConfetti = function() {
    if (typeof confetti === 'function') {
      confetti({
        particleCount: 80,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#ff2a70', '#ffd166', '#ff758f', '#ffffff', '#06d6a0']
      });
    }
  };

  function triggerCrazyLoveExplosion() {
    playSweetChime();
    if (typeof confetti === 'function') {
      const count = 220;
      const defaults = { origin: { y: 0.7 } };
      function fire(ratio, opts) {
        confetti(Object.assign({}, defaults, opts, {
          particleCount: Math.floor(count * ratio)
        }));
      }
      fire(0.25, { spread: 26, startVelocity: 55, colors: ['#ff2a70', '#ff6b9d'] });
      fire(0.2, { spread: 60, colors: ['#ffd166', '#ffffff'] });
      fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
      fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, colors: ['#ff0055'] });
      fire(0.1, { spread: 120, startVelocity: 45 });
    }
    document.body.style.transform = 'scale(0.995)';
    setTimeout(() => {
      document.body.style.transform = 'scale(1)';
    }, 150);
  }

  if (crazyLoveBtn) crazyLoveBtn.addEventListener('click', triggerCrazyLoveExplosion);

  /* ==========================================================================
     17. "OPEN WHEN..." MODALS
     ========================================================================== */
  const letterModal = document.getElementById('letter-modal');
  const modalIcon = document.getElementById('modal-icon');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');

  const openWhenLetters = {
    sad: {
      icon: "🥺🌧️",
      title: "Open When You Are Sad",
      body: `
        <p>Hey my sweet Nanduu,</p>
        <p>I know right now your heart feels a little heavy. Take a deep, gentle breath and close your eyes for a moment. Remember that rainy days are just preparing flowers to bloom brighter.</p>
        <p>You are one of the strongest, most resilient, and most beautiful souls on this planet. Even when you feel tired, I am here to lean on. You don't have to carry the whole world on your shoulders.</p>
        <p>Whenever you're ready, message me or call me. I have endless hugs, soft blankets, and silly jokes waiting for you. I love you so much, my girl. Everything is going to be okay. ❤️</p>
      `
    },
    miss: {
      icon: "💭❤️",
      title: "Open When You Miss Me",
      body: `
        <p>My precious Nanduu,</p>
        <p>If you're reading this, you're missing me—and trust me, whatever amount you miss me, I miss you ten times more.</p>
        <p>Put your right hand on your left shoulder, and your left hand on your right shoulder. Now squeeze tightly. That's a warm bear hug from me right across the distance.</p>
        <p>Distance is just physical; our hearts are locked together forever since <strong>20 November 2025</strong>. I am counting the minutes until I can look into your eyes and hold you close again. Until then, remember you are in every single thought of mine.</p>
      `
    },
    mad: {
      icon: "😤💢",
      title: "Open When You're Mad At Me",
      body: `
        <p>To My Fierce Little Queen,</p>
        <p>First of all: I'm sorry. Whatever silly, thoughtless, or clumsy thing I did, please forgive your Keshuu.</p>
        <p>I never want to be the reason for your frown. Your happiness means more to me than my ego ever could. You have every right to be mad, and I am ready to listen, learn, and make it right.</p>
        <p>You are officially granted 1 free hit on my arm with a pillow, followed by your favorite food treat on Keshuu. Deal? Please smile for me again, Nanduu... I love you endlessly! 🥺💖</p>
      `
    },
    sleep: {
      icon: "🌙✨",
      title: "Open When You Can't Sleep",
      body: `
        <p>Goodnight, my sleeping beauty,</p>
        <p>Turn off your overthinking brain for tonight. You have done more than enough today. The stars outside your window are keeping guard over you, and so is my love.</p>
        <p>Imagine me tucking you under the blanket, softly running my fingers through your hair, and whispering in your ear: <em>"Sleep peacefully, Nanduu. Keshuu is right here."</em></p>
        <p>May your dreams be as sweet and tender as you are. Rest well, my angel. See you in dreamland! 😴🌟</p>
      `
    },
    doubt: {
      icon: "👑💎",
      title: "Open When You Feel Insecure",
      body: `
        <p>Listen to me very carefully, Nanduu:</p>
        <p>If you could see yourself through my eyes for just 10 seconds, you would never doubt yourself again for the rest of your life.</p>
        <p>You are gorgeous. You are smart. You are funny. You have a heart pure enough to change anyone's world. Never let comparison or a bad day steal your crown.</p>
        <p>You are Keshuu's #1, forever and without question. Don't you dare forget how extraordinary you are! 👑✨</p>
      `
    },
    crazy: {
      icon: "🤪🔥",
      title: "Open When You Need Crazy Love",
      body: `
        <p>ATTENTION NANDUU!! 🚨📢</p>
        <p>This is a high-priority broadcast to inform you that Keshuu is absolutely, head-over-heels, crazily, uncontrollably IN LOVE WITH YOU!!</p>
        <p>I would fight a grizzly bear for you! I would walk across Legos barefoot for you! I would give you the last slice of pizza (and that's true love)!</p>
        <p>You're stuck with me forever since 20 November 2025, Nanduu, and there is no escape! Prepare for a lifetime of extreme affection, crazy love attacks, and infinite kisses! 🥰💥❤️</p>
      `
    }
  };

  window.openWhenModal = function(type) {
    const data = openWhenLetters[type];
    if (!data) return;
    modalIcon.textContent = data.icon;
    modalTitle.textContent = data.title;
    modalBody.innerHTML = data.body;
    letterModal.classList.remove('hidden');
    playSweetChime();
  };

  window.closeWhenModal = function() {
    letterModal.classList.add('hidden');
  };

  letterModal.addEventListener('click', (e) => {
    if (e.target === letterModal) closeWhenModal();
  });

  /* ==========================================================================
     18. WHATSAPP HUG SHARING
     ========================================================================== */
  window.shareLoveMessage = function() {
    const text = encodeURIComponent("Hey Keshuu! ❤️ I just saw the crazy website and the secret suspense gift you made for me... I love you so, so much! You made my whole world happy! 🥰💖");
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

});
