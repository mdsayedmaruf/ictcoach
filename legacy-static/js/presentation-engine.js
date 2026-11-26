/**
 * ICT Coach Presentation Engine
 * Controls Slide Rendering, Whiteboard Canvas, Laser, Quiz, and Keyboard/Touch Events
 */

(function () {
  'use strict';

  const slides = window.SLIDES_DATA || [];
  const totalSlides = slides.length;

  if (totalSlides === 0) {
    console.error('No slide data found in SLIDES_DATA');
    return;
  }

  // --- State Variables ---
  let currentIdx = 0;
  let isPenMode = false;
  let isLaserMode = false;
  let isNotesOpen = false;
  let isDrawing = false;
  let currentColor = '#ffeb3b';
  let currentStrokeSize = 4;
  let isEraser = false;
  let lastX = 0;
  let lastY = 0;

  // Canvas drawing history per slide index
  const canvasHistory = {};

  // --- DOM Elements ---
  const slideContainer = document.getElementById('slideContent');
  const slideHeaderBlock = document.getElementById('slideHeaderBlock');
  const slideCategoryChip = document.getElementById('slideCategoryChip');
  const slideTitlePrimary = document.getElementById('slideTitlePrimary');
  const slideSubtitle = document.getElementById('slideSubtitle');
  const headerSlideTitle = document.getElementById('headerSlideTitle');
  const headerModuleBadge = document.getElementById('headerModuleBadge');
  const inputSlideNum = document.getElementById('inputSlideNum');
  const totalSlidesSpan = document.getElementById('totalSlidesSpan');
  const timelineFill = document.getElementById('timelineFill');
  const timelineScrubber = document.getElementById('timelineScrubber');

  // Tools & Modals
  const deckCanvas = document.getElementById('deckCanvas');
  const ctx = deckCanvas.getContext('2d');
  const laserDot = document.getElementById('laserDot');
  const presentationFrame = document.getElementById('presentationFrame');
  const teacherNotesDrawer = document.getElementById('teacherNotesDrawer');
  const notesBody = document.getElementById('notesBody');
  const overviewModal = document.getElementById('overviewModal');
  const overviewBackdrop = document.getElementById('overviewBackdrop');
  const overviewGrid = document.getElementById('overviewGrid');

  // Buttons
  const btnPrev = document.getElementById('btnPrev');
  const btnNext = document.getElementById('btnNext');
  const hotspotPrev = document.getElementById('hotspotPrev');
  const hotspotNext = document.getElementById('hotspotNext');
  const btnFirst = document.getElementById('btnFirst');
  const btnLast = document.getElementById('btnLast');
  const btnOverview = document.getElementById('btnOverview');
  const btnCloseOverview = document.getElementById('btnCloseOverview');
  const btnPen = document.getElementById('btnPen');
  const btnLaser = document.getElementById('btnLaser');
  const btnNotes = document.getElementById('btnNotes');
  const btnCloseNotes = document.getElementById('btnCloseNotes');
  const btnFullscreen = document.getElementById('btnFullscreen');
  const btnShortcuts = document.getElementById('btnShortcuts');
  const shortcutsModal = document.getElementById('shortcutsModal');
  const btnCloseShortcuts = document.getElementById('btnCloseShortcuts');
  const shortcutsBackdrop = document.getElementById('shortcutsBackdrop');

  // --- Canvas Synchronization ---
  function resizeCanvas() {
    deckCanvas.width = 1920;
    deckCanvas.height = 1080;
    restoreCanvas();
  }

  // --- Render Slide Function ---
  function renderSlide(index, direction = 'next') {
    if (index < 0 || index >= totalSlides) return;

    // Save previous canvas state
    saveCanvasState();

    currentIdx = index;
    const slide = slides[currentIdx];
    const slideNumber = currentIdx + 1;

    // Remove old animation class and trigger reflow
    slideContainer.classList.remove('anim-next', 'anim-prev');
    void slideContainer.offsetWidth;
    slideContainer.classList.add(direction === 'next' ? 'anim-next' : 'anim-prev');

    // Update Header Metadata
    headerSlideTitle.textContent = slide.title;
    headerModuleBadge.textContent = slide.module;
    inputSlideNum.value = slideNumber;

    // Update Slide Inner Header
    if (slide.layout === 'hero-title') {
      slideHeaderBlock.style.display = 'none';
    } else {
      slideHeaderBlock.style.display = 'block';
      slideCategoryChip.textContent = slide.category;
      slideTitlePrimary.textContent = slide.title;
      slideSubtitle.textContent = slide.subtitle || '';
    }

    // Render Slide Body HTML
    if (slide.quiz) {
      slideContainer.innerHTML = buildQuizHTML(slide.quiz);
    } else {
      slideContainer.innerHTML = slide.html || '';
    }

    // Update Progress Scrubber
    const progress = ((slideNumber - 1) / (totalSlides - 1)) * 100;
    timelineFill.style.width = `${Math.max(1.5, progress)}%`;

    // Update Teacher Speaker Notes
    notesBody.innerHTML = `
      <div class="note-section">
        <h4 style="color:#ffaa00; margin-bottom:8px;">📌 স্লাইড ${slideNumber}: ${slide.title}</h4>
        <p style="font-size:0.95rem; line-height:1.6; color:#e2e8f0;">${slide.teacherNotes || 'এই স্লাইডের জন্য কোনো অতিরিক্ত নোট নেই।'}</p>
      </div>
      <div class="note-section" style="margin-top:16px; padding-top:12px; border-top:1px solid rgba(255,255,255,0.1);">
        <strong style="color:#00e5ff;">💡 শিক্ষণ টিপস:</strong>
        <p style="font-size:0.88rem; color:#94a3b8; margin-top:4px;">শিক্ষার্থীদের সরাসরি প্রশ্ন করুন এবং তাদের অংশগ্রহণ নিশ্চিত করে আলোচনা এগিয়ে নিন।</p>
      </div>
    `;

    // Restore Canvas annotations for this slide
    restoreCanvas();

    // Update hash
    window.location.hash = `slide-${slideNumber}`;
  }

  // --- Quiz Generator & Handler ---
  function buildQuizHTML(quiz) {
    return `
      <div class="quiz-box">
        <div class="quiz-question-heading">${quiz.question}</div>
        <div class="quiz-options-list">
          ${quiz.options.map((opt, i) => `
            <button class="quiz-option-btn" onclick="handleQuizAnswer(this, ${opt.correct})">
              <span class="opt-label">${opt.label}</span>
              <span class="opt-text">${opt.text}</span>
            </button>
          `).join('')}
        </div>
        <div class="quiz-explanation-card" id="quizExpl" style="display:none;">
          <strong style="color:#00e5ff;">ব্যাখ্যা:</strong> ${quiz.explanation}
        </div>
      </div>
    `;
  }

  window.handleQuizAnswer = function (btn, isCorrect) {
    const parent = btn.closest('.quiz-options-list');
    const allBtns = parent.querySelectorAll('.quiz-option-btn');
    allBtns.forEach(b => b.style.pointerEvents = 'none'); // Lock options

    if (isCorrect) {
      btn.classList.add('correct');
    } else {
      btn.classList.add('wrong');
      // Highlight the correct one
      allBtns.forEach(b => {
        if (b.getAttribute('onclick').includes('true')) {
          b.classList.add('correct');
        }
      });
    }

    const expl = document.getElementById('quizExpl');
    if (expl) expl.style.display = 'block';
  };

  // --- CQ Answer Reveal Handler ---
  window.toggleCQAnswer = function (btn) {
    const item = btn.closest('.cq-item');
    const ansBox = item.querySelector('.cq-ans-box');
    if (ansBox) {
      const isHidden = ansBox.style.display === 'none';
      ansBox.style.display = isHidden ? 'block' : 'none';
      btn.textContent = isHidden ? 'উত্তর লুকান' : 'উত্তর দেখুন';
    }
  };

  // --- Navigation Methods ---
  function nextSlide() {
    if (currentIdx < totalSlides - 1) {
      renderSlide(currentIdx + 1, 'next');
    }
  }

  function prevSlide() {
    if (currentIdx > 0) {
      renderSlide(currentIdx - 1, 'prev');
    }
  }

  function firstSlide() {
    renderSlide(0, 'prev');
  }

  function lastSlide() {
    renderSlide(totalSlides - 1, 'next');
  }

  function jumpToSlide(num) {
    if (num >= 1 && num <= totalSlides) {
      renderSlide(num - 1, num - 1 > currentIdx ? 'next' : 'prev');
    } else {
      inputSlideNum.value = currentIdx + 1;
    }
  }

  // --- Canvas Drawing Methods ---
  function togglePenMode() {
    isPenMode = !isPenMode;
    if (isPenMode) {
      if (isLaserMode) toggleLaserMode();
      document.body.classList.add('pen-mode');
      btnPen.classList.add('active');
    } else {
      document.body.classList.remove('pen-mode');
      btnPen.classList.remove('active');
    }
  }

  function saveCanvasState() {
    if (!canvasHistory[currentIdx]) {
      canvasHistory[currentIdx] = [];
    }
    canvasHistory[currentIdx] = ctx.getImageData(0, 0, deckCanvas.width, deckCanvas.height);
  }

  function restoreCanvas() {
    ctx.clearRect(0, 0, deckCanvas.width, deckCanvas.height);
    if (canvasHistory[currentIdx]) {
      ctx.putImageData(canvasHistory[currentIdx], 0, 0);
    }
  }

  function clearCanvas() {
    ctx.clearRect(0, 0, deckCanvas.width, deckCanvas.height);
    delete canvasHistory[currentIdx];
  }

  function getCanvasCoords(e) {
    const rect = deckCanvas.getBoundingClientRect();
    const scaleX = deckCanvas.width / rect.width;
    const scaleY = deckCanvas.height / rect.height;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);
    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY
    };
  }

  deckCanvas.addEventListener('mousedown', (e) => {
    if (!isPenMode) return;
    isDrawing = true;
    const c = getCanvasCoords(e);
    lastX = c.x;
    lastY = c.y;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = currentStrokeSize;
    ctx.strokeStyle = currentColor;
  });

  deckCanvas.addEventListener('mousemove', (e) => {
    if (!isPenMode || !isDrawing) return;
    const c = getCanvasCoords(e);
    ctx.lineTo(c.x, c.y);
    ctx.stroke();
    lastX = c.x;
    lastY = c.y;
  });

  window.addEventListener('mouseup', () => {
    if (isDrawing) {
      isDrawing = false;
      ctx.closePath();
      saveCanvasState();
    }
  });

  // --- Laser Pointer Methods ---
  function toggleLaserMode() {
    isLaserMode = !isLaserMode;
    if (isLaserMode) {
      if (isPenMode) togglePenMode();
      document.body.classList.add('laser-mode');
      btnLaser.classList.add('active');
    } else {
      document.body.classList.remove('laser-mode');
      btnLaser.classList.remove('active');
    }
  }

  presentationFrame.addEventListener('mousemove', (e) => {
    if (!isLaserMode) return;
    const rect = presentationFrame.getBoundingClientRect();
    laserDot.style.left = `${e.clientX - rect.left}px`;
    laserDot.style.top = `${e.clientY - rect.top}px`;
  });

  // --- Teacher Notes Drawer ---
  function toggleNotesDrawer() {
    isNotesOpen = !isNotesOpen;
    teacherNotesDrawer.classList.toggle('open', isNotesOpen);
    btnNotes.classList.toggle('active', isNotesOpen);
  }

  // --- Fullscreen Engine ---
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) document.exitFullscreen();
    }
  }

  // --- Overview Lightbox Grid ---
  function buildOverviewGrid() {
    overviewGrid.innerHTML = '';
    slides.forEach((s, idx) => {
      const card = document.createElement('div');
      card.className = `slide-card-item ${idx === currentIdx ? 'active' : ''}`;
      card.innerHTML = `
        <span class="card-num-badge">SLIDE #${idx + 1}</span>
        <h4 class="card-title-text">${s.title}</h4>
        <span class="card-module-tag">${s.module} • ${s.category}</span>
      `;
      card.addEventListener('click', () => {
        renderSlide(idx);
        closeOverview();
      });
      overviewGrid.appendChild(card);
    });
  }

  function openOverview() {
    buildOverviewGrid();
    overviewModal.style.display = 'flex';
  }

  function closeOverview() {
    overviewModal.style.display = 'none';
  }

  // --- Timeline Scrubber Click ---
  timelineScrubber.addEventListener('click', (e) => {
    const rect = timelineScrubber.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    const target = Math.round(ratio * (totalSlides - 1));
    renderSlide(target);
  });

  // --- Input Slide Jump ---
  inputSlideNum.addEventListener('change', (e) => {
    jumpToSlide(parseInt(e.target.value, 10));
  });

  // --- Keyboard Shortcuts ---
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;

    switch (e.key) {
      case 'ArrowRight':
      case ' ':
      case 'PageDown':
        e.preventDefault();
        nextSlide();
        break;
      case 'ArrowLeft':
      case 'Backspace':
      case 'PageUp':
        e.preventDefault();
        prevSlide();
        break;
      case 'Home':
        e.preventDefault();
        firstSlide();
        break;
      case 'End':
        e.preventDefault();
        lastSlide();
        break;
      case 'f':
      case 'F':
        e.preventDefault();
        toggleFullscreen();
        break;
      case 'o':
      case 'O':
        e.preventDefault();
        overviewModal.style.display === 'flex' ? closeOverview() : openOverview();
        break;
      case 's':
      case 'S':
        e.preventDefault();
        toggleNotesDrawer();
        break;
      case 'p':
      case 'P':
        e.preventDefault();
        togglePenMode();
        break;
      case 'l':
      case 'L':
        e.preventDefault();
        toggleLaserMode();
        break;
      case 'c':
      case 'C':
        if (isPenMode) clearCanvas();
        break;
      case '?':
        toggleShortcuts();
        break;
      case 'Escape':
        if (overviewModal.style.display === 'flex') closeOverview();
        if (shortcutsModal.style.display === 'flex') toggleShortcuts();
        if (isNotesOpen) toggleNotesDrawer();
        if (isPenMode) togglePenMode();
        if (isLaserMode) toggleLaserMode();
        break;
    }
  });

  function toggleShortcuts() {
    const isHidden = shortcutsModal.style.display === 'none';
    shortcutsModal.style.display = isHidden ? 'flex' : 'none';
  }

  // --- Event Bindings ---
  btnNext.addEventListener('click', nextSlide);
  btnPrev.addEventListener('click', prevSlide);
  btnFirst.addEventListener('click', firstSlide);
  btnLast.addEventListener('click', lastSlide);
  hotspotNext.addEventListener('click', nextSlide);
  hotspotPrev.addEventListener('click', prevSlide);

  btnOverview.addEventListener('click', openOverview);
  btnCloseOverview.addEventListener('click', closeOverview);
  overviewBackdrop.addEventListener('click', closeOverview);

  btnPen.addEventListener('click', togglePenMode);
  btnLaser.addEventListener('click', toggleLaserMode);
  btnNotes.addEventListener('click', toggleNotesDrawer);
  btnCloseNotes.addEventListener('click', toggleNotesDrawer);
  btnFullscreen.addEventListener('click', toggleFullscreen);
  btnShortcuts.addEventListener('click', toggleShortcuts);
  btnCloseShortcuts.addEventListener('click', toggleShortcuts);
  shortcutsBackdrop.addEventListener('click', toggleShortcuts);

  window.addEventListener('resize', resizeCanvas);

  // --- Initial Launch ---
  totalSlidesSpan.textContent = totalSlides;
  inputSlideNum.max = totalSlides;
  resizeCanvas();

  // Check URL hash
  const hash = window.location.hash;
  let startIdx = 0;
  if (hash && hash.startsWith('#slide-')) {
    const n = parseInt(hash.replace('#slide-', ''), 10);
    if (!isNaN(n) && n >= 1 && n <= totalSlides) {
      startIdx = n - 1;
    }
  }

  renderSlide(startIdx);

})();
