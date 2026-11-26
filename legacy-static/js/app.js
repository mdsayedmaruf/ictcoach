/**
 * Interactive Slide Presentation Engine
 * HSC ICT Chapter 4: Web Design and HTML
 * High-performance Vanilla JavaScript Application
 */

(function () {
  'use strict';

  // --- Constants & Slide Configuration ---
  const TOTAL_SLIDES = 152;

  // Curated section mapping based on the lecture contents
  const SECTIONS = [
    { start: 1, end: 2, title: 'Chapter Analysis & Introduction', category: 'Introduction', filter: 'intro' },
    { start: 3, end: 24, title: 'Webpage, Browsers & Web Fundamentals', category: 'Fundamentals', filter: 'fundamentals' },
    { start: 25, end: 39, title: 'Website Structures (Tree, Network, Linear, Hybrid)', category: 'Structure', filter: 'structure' },
    { start: 40, end: 59, title: 'HTML Core Structure & Formatting Tags', category: 'HTML Code', filter: 'html' },
    { start: 60, end: 69, title: 'Hyperlinks & Anchor Tags', category: 'Links & Media', filter: 'links' },
    { start: 70, end: 79, title: 'Images & Multimedia Embedding', category: 'Links & Media', filter: 'links' },
    { start: 80, end: 90, title: 'HTML Tables, Lists & Practical Practice', category: 'Tables & Lists', filter: 'tables' },
    { start: 91, end: 135, title: 'Creative Questions (Board CQ Practice)', category: 'Board CQ', filter: 'cq' },
    { start: 136, end: 150, title: 'Multiple Choice Questions (Board MCQ)', category: 'Board MCQ', filter: 'mcq' },
    { start: 151, end: 152, title: 'Conclusion & Thank You', category: 'Summary', filter: 'all' }
  ];

  // Specific slide title landmarks for prominent slides
  const SLIDE_TITLES = {
    1: 'ONESHOT REVISION: ওয়েবডিজাইন ও HTML',
    2: 'Chapter Analysis (CQ & MCQ Breakdown)',
    3: 'Webpage Concept & Definition',
    4: 'ওয়েব ব্রাউজার (Web Browser)',
    5: 'সার্চ ইঞ্জিন (Search Engine)',
    6: 'IP Address & Domain System',
    10: 'DNS (Domain Name System)',
    15: 'URL Structure & Components',
    20: 'Static vs Dynamic Websites',
    25: 'ওয়েবসাইট কাঠামো (Website Structure)',
    30: 'ট্রি / হায়ারার্কিক্যাল কাঠামো (Tree Structure)',
    35: 'লিনিয়ার ও নেটওয়ার্ক কাঠামো (Linear & Network Structure)',
    40: 'HTML কোড পরিচিতি ও বেসিক স্ট্রাকচার',
    45: 'HTML Tags & Attributes',
    50: 'Text Formatting Tags (b, i, u, sub, sup)',
    60: 'Anchor Tag (<a>) & Hyperlinks',
    70: 'Image Tag (<img>) & Attributes',
    80: 'HTML Table (<table>, <tr>, <td>, <th>)',
    85: 'Colspan & Rowspan Attributes',
    88: 'Table Home Work & Classroom Practice',
    91: 'CQ Practice: কুমিল্লা বোর্ড - ২৩',
    100: 'CQ Practice: চট্টগ্রাম বোর্ড - ১৯',
    110: 'CQ Practice: যশোর বোর্ড - ১৭',
    120: 'CQ Practice: দিনাজপুর বোর্ড - ১৭',
    130: 'CQ Practice: ঢাকা ও রাজশাহী বোর্ড',
    136: 'MCQ Practice: বোর্ড বহুনির্বাচনী প্রশ্ন',
    151: 'Class Summary & Takeaways',
    152: 'Thank You'
  };

  // --- State Variables ---
  let currentIndex = 0; // 0-based index (0 to 151)
  let isAutoplayRunning = false;
  let autoplayTimer = null;
  const autoplayInterval = 5000; // 5 seconds
  let soundEnabled = true;
  let isPenMode = false;
  let isLaserMode = false;
  let isDrawing = false;
  let currentColor = '#ffeb3b';
  let currentStrokeSize = 4;
  let isEraser = false;
  let lastX = 0;
  let lastY = 0;
  
  // Annotation storage: map of slideIndex -> Array of stroke history (for undo)
  const slideDrawings = {};

  // Audio Context for crisp tactile sound effects
  let audioCtx = null;

  // --- DOM Elements ---
  const currentSlideImg = document.getElementById('currentSlideImg');
  const slideFrame = document.getElementById('slideFrame');
  const slideContentWrapper = document.getElementById('slideContentWrapper');
  const slideLoader = document.getElementById('slideLoader');
  const slideSectionTitle = document.getElementById('slideSectionTitle');
  const slideCategoryTag = document.getElementById('slideCategoryTag');
  const sectionSelect = document.getElementById('sectionSelect');
  const inputSlideNumber = document.getElementById('inputSlideNumber');
  const totalSlidesCount = document.getElementById('totalSlidesCount');
  const progressBarFill = document.getElementById('progressBarFill');
  const progressBarContainer = document.getElementById('progressBarContainer');
  const progressHover = document.getElementById('progressHover');
  const hoverThumbImg = document.getElementById('hoverThumbImg');
  const hoverSlideNum = document.getElementById('hoverSlideNum');
  const transitionSelect = document.getElementById('transitionSelect');

  // Annotation Canvas & Tools
  const annotationCanvas = document.getElementById('annotationCanvas');
  const ctx = annotationCanvas.getContext('2d');
  const laserPointer = document.getElementById('laserPointer');
  const drawingToolbar = document.getElementById('drawingToolbar');

  // Modals & Overlays
  const overviewModal = document.getElementById('overviewModal');
  const overviewBackdrop = document.getElementById('overviewBackdrop');
  const overviewGrid = document.getElementById('overviewGrid');
  const overviewFilterPills = document.getElementById('overviewFilterPills');
  const shortcutsModal = document.getElementById('shortcutsModal');
  const shortcutsBackdrop = document.getElementById('shortcutsBackdrop');
  const blackoutOverlay = document.getElementById('blackoutOverlay');

  // Buttons
  const btnPrev = document.getElementById('btnPrev');
  const btnNext = document.getElementById('btnNext');
  const btnFirst = document.getElementById('btnFirst');
  const btnLast = document.getElementById('btnLast');
  const hotspotPrev = document.getElementById('hotspotPrev');
  const hotspotNext = document.getElementById('hotspotNext');
  const btnOverview = document.getElementById('btnOverview');
  const btnCloseOverview = document.getElementById('btnCloseOverview');
  const btnPen = document.getElementById('btnPen');
  const btnLaser = document.getElementById('btnLaser');
  const btnAutoplay = document.getElementById('btnAutoplay');
  const btnFullscreen = document.getElementById('btnFullscreen');
  const btnShortcuts = document.getElementById('btnShortcuts');
  const btnCloseShortcuts = document.getElementById('btnCloseShortcuts');
  const btnSound = document.getElementById('btnSound');
  const btnBlackout = document.getElementById('btnBlackout');
  const btnClosePenToolbar = document.getElementById('btnClosePenToolbar');
  const btnToolPen = document.getElementById('btnToolPen');
  const btnToolEraser = document.getElementById('btnToolEraser');
  const btnToolUndo = document.getElementById('btnToolUndo');
  const btnToolClear = document.getElementById('btnToolClear');
  const btnDownloadSlide = document.getElementById('btnDownloadSlide');

  // --- Helper Functions ---
  function getSlideImagePath(index) {
    const formatted = String(index).padStart(3, '0');
    return `slides/slide-${formatted}.png`;
  }

  function getSlideThumbnailPath(index) {
    const formatted = String(index).padStart(3, '0');
    return `thumbnails/slide-${formatted}.webp`;
  }

  function getSectionInfo(slideNum) {
    for (const sec of SECTIONS) {
      if (slideNum >= sec.start && slideNum <= sec.end) {
        return sec;
      }
    }
    return SECTIONS[0];
  }

  function getSlideTitle(slideNum) {
    if (SLIDE_TITLES[slideNum]) {
      return SLIDE_TITLES[slideNum];
    }
    const sec = getSectionInfo(slideNum);
    return `${sec.title} (${slideNum})`;
  }

  // Preload adjacent slides for seamless navigation
  const preloadedImages = new Set();
  function preloadSlide(idx) {
    if (idx < 0 || idx >= TOTAL_SLIDES || preloadedImages.has(idx)) return;
    const img = new Image();
    img.src = getSlideImagePath(idx);
    preloadedImages.add(idx);
  }

  function preloadAdjacent(idx) {
    preloadSlide(idx + 1);
    preloadSlide(idx + 2);
    preloadSlide(idx - 1);
  }

  // Tactile sound effect using Web Audio API
  function playSlideSound() {
    if (!soundEnabled) return;
    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.04);
      gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.04);
    } catch (e) {
      // Audio might be blocked until user interacts
    }
  }

  // --- Core Navigation ---
  function goToSlide(targetIndex, direction = null) {
    if (targetIndex < 0 || targetIndex >= TOTAL_SLIDES) return;
    if (targetIndex === currentIndex && direction === null) return;

    // Save current drawings before leaving
    saveCurrentCanvas();

    const previousIndex = currentIndex;
    currentIndex = targetIndex;
    const slideNumber = currentIndex + 1;

    // Determine direction for animation if not explicitly given
    if (!direction && previousIndex !== currentIndex) {
      direction = currentIndex > previousIndex ? 'next' : 'prev';
    }

    // Apply animation class based on transition selector
    const transitionType = transitionSelect.value;
    slideFrame.classList.remove('transition-fade', 'transition-slide-next', 'transition-slide-prev', 'transition-zoom');

    if (transitionType === 'slide') {
      slideFrame.classList.add(direction === 'next' ? 'transition-slide-next' : 'transition-slide-prev');
    } else if (transitionType === 'fade') {
      slideFrame.classList.add('transition-fade');
    } else if (transitionType === 'zoom') {
      slideFrame.classList.add('transition-zoom');
    }

    // Update slide image
    currentSlideImg.src = getSlideImagePath(currentIndex);
    currentSlideImg.alt = `Slide ${slideNumber}`;

    // Update Top Bar Meta Info
    const secInfo = getSectionInfo(slideNumber);
    slideSectionTitle.textContent = getSlideTitle(slideNumber);
    slideCategoryTag.textContent = secInfo.category;

    // Update Dropdown selector
    updateSectionDropdown(slideNumber);

    // Update Counter & Input
    inputSlideNumber.value = slideNumber;

    // Update Scrubber Progress Bar
    const progressPercent = ((slideNumber - 1) / (TOTAL_SLIDES - 1)) * 100;
    progressBarFill.style.width = `${Math.max(0.65, progressPercent)}%`;

    // Restore canvas drawing for the new slide
    restoreCanvasForSlide(currentIndex);

    // Update overview grid active indicator if modal is open
    updateActiveGridCard();

    // Play tactile sound
    playSlideSound();

    // Update URL hash without polluting browser history excessively
    window.location.hash = `slide-${slideNumber}`;

    // Preload next and previous slides
    preloadAdjacent(currentIndex);
  }

  function nextSlide() {
    if (currentIndex < TOTAL_SLIDES - 1) {
      goToSlide(currentIndex + 1, 'next');
    } else if (isAutoplayRunning) {
      stopAutoplay();
    }
  }

  function prevSlide() {
    if (currentIndex > 0) {
      goToSlide(currentIndex - 1, 'prev');
    }
  }

  function firstSlide() {
    goToSlide(0, 'prev');
  }

  function lastSlide() {
    goToSlide(TOTAL_SLIDES - 1, 'next');
  }

  // --- Autoplay Slideshow Engine ---
  function toggleAutoplay() {
    if (isAutoplayRunning) {
      stopAutoplay();
    } else {
      startAutoplay();
    }
  }

  function startAutoplay() {
    isAutoplayRunning = true;
    btnAutoplay.classList.add('active');
    btnAutoplay.querySelector('.play-icon').style.display = 'none';
    btnAutoplay.querySelector('.pause-icon').style.display = 'block';
    btnAutoplay.querySelector('.btn-text').textContent = 'Pause';
    
    autoplayTimer = setInterval(() => {
      if (currentIndex < TOTAL_SLIDES - 1) {
        nextSlide();
      } else {
        stopAutoplay();
      }
    }, autoplayInterval);
  }

  function stopAutoplay() {
    isAutoplayRunning = false;
    clearInterval(autoplayTimer);
    autoplayTimer = null;
    btnAutoplay.classList.remove('active');
    btnAutoplay.querySelector('.play-icon').style.display = 'block';
    btnAutoplay.querySelector('.pause-icon').style.display = 'none';
    btnAutoplay.querySelector('.btn-text').textContent = 'Play';
  }

  // --- Fullscreen Engine ---
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  }

  document.addEventListener('fullscreenchange', () => {
    const isFs = !!document.fullscreenElement;
    btnFullscreen.querySelector('.fs-enter').style.display = isFs ? 'none' : 'block';
    btnFullscreen.querySelector('.fs-exit').style.display = isFs ? 'block' : 'none';
  });

  // --- Digital Whiteboard / Canvas Annotation Engine ---
  function togglePenMode() {
    isPenMode = !isPenMode;
    if (isPenMode) {
      // Disable laser mode if pen is activated
      if (isLaserMode) toggleLaserMode();
      document.body.classList.add('pen-mode-active');
      btnPen.classList.add('active');
      drawingToolbar.style.display = 'flex';
      setPenModeTool(false);
    } else {
      document.body.classList.remove('pen-mode-active');
      btnPen.classList.remove('active');
      drawingToolbar.style.display = 'none';
    }
  }

  function setPenModeTool(eraser) {
    isEraser = eraser;
    btnToolPen.classList.toggle('active', !eraser);
    btnToolEraser.classList.toggle('active', eraser);
  }

  function getCanvasCoordinates(e) {
    const rect = annotationCanvas.getBoundingClientRect();
    const scaleX = annotationCanvas.width / rect.width;
    const scaleY = annotationCanvas.height / rect.height;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);
    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY
    };
  }

  function startDrawing(e) {
    if (!isPenMode) return;
    isDrawing = true;
    const coords = getCanvasCoordinates(e);
    lastX = coords.x;
    lastY = coords.y;

    // Start a new path
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = currentStrokeSize;

    if (isEraser) {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.strokeStyle = 'rgba(0,0,0,1)';
    } else {
      ctx.globalCompositeOperation = 'source-over';
      ctx.strokeStyle = currentColor;
    }
  }

  function drawMove(e) {
    if (!isPenMode || !isDrawing) return;
    const coords = getCanvasCoordinates(e);
    ctx.lineTo(coords.x, coords.y);
    ctx.stroke();
    lastX = coords.x;
    lastY = coords.y;
  }

  function stopDrawing() {
    if (!isPenMode || !isDrawing) return;
    isDrawing = false;
    ctx.closePath();
    saveCanvasState();
  }

  // Save history state for undo functionality per slide
  function saveCanvasState() {
    if (!slideDrawings[currentIndex]) {
      slideDrawings[currentIndex] = [];
    }
    slideDrawings[currentIndex].push(ctx.getImageData(0, 0, annotationCanvas.width, annotationCanvas.height));
    if (slideDrawings[currentIndex].length > 20) {
      slideDrawings[currentIndex].shift(); // limit history depth
    }
  }

  function saveCurrentCanvas() {
    // Current state is already tracked via stroke history
  }

  function restoreCanvasForSlide(slideIdx) {
    ctx.clearRect(0, 0, annotationCanvas.width, annotationCanvas.height);
    const history = slideDrawings[slideIdx];
    if (history && history.length > 0) {
      ctx.putImageData(history[history.length - 1], 0, 0);
    }
  }

  function undoCanvas() {
    const history = slideDrawings[currentIndex];
    if (history && history.length > 1) {
      history.pop(); // remove current state
      const previousState = history[history.length - 1];
      ctx.clearRect(0, 0, annotationCanvas.width, annotationCanvas.height);
      ctx.putImageData(previousState, 0, 0);
    } else if (history && history.length === 1) {
      history.pop();
      ctx.clearRect(0, 0, annotationCanvas.width, annotationCanvas.height);
    }
  }

  function clearCanvas() {
    ctx.clearRect(0, 0, annotationCanvas.width, annotationCanvas.height);
    if (!slideDrawings[currentIndex]) {
      slideDrawings[currentIndex] = [];
    }
    saveCanvasState();
  }

  // Export current slide combined with drawing as downloadable image
  function downloadCurrentSlide() {
    const exportCanvas = document.createElement('canvas');
    exportCanvas.width = 1920;
    exportCanvas.height = 1080;
    const expCtx = exportCanvas.getContext('2d');

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = getSlideImagePath(currentIndex);
    img.onload = () => {
      expCtx.drawImage(img, 0, 0, 1920, 1080);
      expCtx.drawImage(annotationCanvas, 0, 0, 1920, 1080);
      const link = document.createElement('a');
      link.download = `HSC_ICT_Ch4_Slide_${currentIndex + 1}_Annotated.png`;
      link.href = exportCanvas.toDataURL('image/png');
      link.click();
    };
  }

  // --- Laser Pointer Engine ---
  function toggleLaserMode() {
    isLaserMode = !isLaserMode;
    if (isLaserMode) {
      if (isPenMode) togglePenMode();
      document.body.classList.add('laser-mode-active');
      btnLaser.classList.add('active');
    } else {
      document.body.classList.remove('laser-mode-active');
      btnLaser.classList.remove('active');
    }
  }

  slideFrame.addEventListener('mousemove', (e) => {
    if (!isLaserMode) return;
    const rect = slideFrame.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    laserPointer.style.left = `${x}px`;
    laserPointer.style.top = `${y}px`;
  });

  // --- Overview Lightbox Grid ---
  function populateOverviewGrid() {
    overviewGrid.innerHTML = '';
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < TOTAL_SLIDES; i++) {
      const slideNum = i + 1;
      const sec = getSectionInfo(slideNum);
      const title = getSlideTitle(slideNum);

      const card = document.createElement('div');
      card.className = `grid-card ${i === currentIndex ? 'active' : ''}`;
      card.dataset.index = i;
      card.dataset.filter = sec.filter;

      card.innerHTML = `
        <div class="grid-thumb-wrapper">
          <img class="grid-thumb" src="${getSlideThumbnailPath(i)}" alt="Slide ${slideNum}" loading="lazy">
          <span class="grid-slide-num">#${slideNum}</span>
        </div>
        <div class="grid-card-footer">
          <span class="grid-card-title" title="${title}">${title}</span>
          <span class="grid-card-badge">${sec.category}</span>
        </div>
      `;

      card.addEventListener('click', () => {
        goToSlide(i);
        closeOverview();
      });

      fragment.appendChild(card);
    }

    overviewGrid.appendChild(fragment);
  }

  function updateActiveGridCard() {
    const cards = overviewGrid.querySelectorAll('.grid-card');
    cards.forEach((card) => {
      const idx = parseInt(card.dataset.index, 10);
      card.classList.toggle('active', idx === currentIndex);
    });
  }

  function openOverview() {
    overviewModal.style.display = 'flex';
    updateActiveGridCard();
    // Scroll active card into view smoothly
    const activeCard = overviewGrid.querySelector('.grid-card.active');
    if (activeCard) {
      activeCard.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
  }

  function closeOverview() {
    overviewModal.style.display = 'none';
  }

  function filterOverviewCards(filter) {
    const cards = overviewGrid.querySelectorAll('.grid-card');
    cards.forEach((card) => {
      if (filter === 'all' || card.dataset.filter === filter) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }

  // --- Section Dropdown ---
  function populateSectionDropdown() {
    sectionSelect.innerHTML = '';
    SECTIONS.forEach((sec, idx) => {
      const opt = document.createElement('option');
      opt.value = sec.start - 1; // 0-based
      opt.textContent = `${sec.title} (Slides ${sec.start}–${sec.end})`;
      sectionSelect.appendChild(opt);
    });

    sectionSelect.addEventListener('change', (e) => {
      const targetIdx = parseInt(e.target.value, 10);
      goToSlide(targetIdx);
    });
  }

  function updateSectionDropdown(slideNum) {
    for (let i = 0; i < SECTIONS.length; i++) {
      const sec = SECTIONS[i];
      if (slideNum >= sec.start && slideNum <= sec.end) {
        sectionSelect.selectedIndex = i;
        break;
      }
    }
  }

  // --- Progress Scrubber Events ---
  progressBarContainer.addEventListener('click', (e) => {
    const rect = progressBarContainer.getBoundingClientRect();
    const clickRatio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const targetIdx = Math.round(clickRatio * (TOTAL_SLIDES - 1));
    goToSlide(targetIdx);
  });

  progressBarContainer.addEventListener('mousemove', (e) => {
    const rect = progressBarContainer.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const hoverIdx = Math.round(ratio * (TOTAL_SLIDES - 1));
    const hoverSlideNumber = hoverIdx + 1;

    progressHover.style.display = 'flex';
    progressHover.style.left = `${e.clientX - rect.left}px`;
    hoverThumbImg.src = getSlideThumbnailPath(hoverIdx);
    hoverSlideNum.textContent = `Slide ${hoverSlideNumber}: ${getSectionInfo(hoverSlideNumber).category}`;
  });

  progressBarContainer.addEventListener('mouseleave', () => {
    progressHover.style.display = 'none';
  });

  // --- Direct Slide Number Input ---
  inputSlideNumber.addEventListener('change', (e) => {
    const num = parseInt(e.target.value, 10);
    if (!isNaN(num) && num >= 1 && num <= TOTAL_SLIDES) {
      goToSlide(num - 1);
    } else {
      inputSlideNumber.value = currentIndex + 1;
    }
  });

  inputSlideNumber.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      inputSlideNumber.blur();
    }
  });

  // --- Keyboard Shortcuts & Touch Gestures ---
  document.addEventListener('keydown', (e) => {
    // If typing inside an input field, do not trigger global presentation hotkeys
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') {
      return;
    }

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
        if (overviewModal.style.display === 'flex') {
          closeOverview();
        } else {
          openOverview();
        }
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
        if (isPenMode) {
          clearCanvas();
        }
        break;
      case 'z':
      case 'Z':
        if (e.ctrlKey || e.metaKey) {
          e.preventDefault();
          undoCanvas();
        }
        break;
      case 'b':
      case 'B':
        toggleBlackout();
        break;
      case '?':
        toggleShortcutsModal();
        break;
      case 'Escape':
        if (overviewModal.style.display === 'flex') {
          closeOverview();
        } else if (shortcutsModal.style.display === 'flex') {
          toggleShortcutsModal();
        } else if (isPenMode) {
          togglePenMode();
        } else if (isLaserMode) {
          toggleLaserMode();
        }
        break;
    }
  });

  // Touch Swipe Handling on Stage Viewport
  let touchStartX = 0;
  let touchStartY = 0;
  const stageContainer = document.getElementById('stageContainer');

  stageContainer.addEventListener('touchstart', (e) => {
    if (isPenMode) return;
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });

  stageContainer.addEventListener('touchend', (e) => {
    if (isPenMode) return;
    const touchEndX = e.changedTouches[0].screenX;
    const touchEndY = e.changedTouches[0].screenY;
    const diffX = touchEndX - touchStartX;
    const diffY = touchEndY - touchStartY;

    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  }, { passive: true });

  // --- Blackout Mode ---
  function toggleBlackout() {
    const isHidden = blackoutOverlay.style.display === 'none';
    blackoutOverlay.style.display = isHidden ? 'flex' : 'none';
  }
  blackoutOverlay.addEventListener('click', () => {
    blackoutOverlay.style.display = 'none';
  });

  // --- Shortcuts Modal ---
  function toggleShortcutsModal() {
    const isHidden = shortcutsModal.style.display === 'none';
    shortcutsModal.style.display = isHidden ? 'flex' : 'none';
  }

  // --- Sound Toggle ---
  function toggleSound() {
    soundEnabled = !soundEnabled;
    btnSound.querySelector('.sound-on-icon').style.display = soundEnabled ? 'block' : 'none';
    btnSound.querySelector('.sound-off-icon').style.display = soundEnabled ? 'none' : 'block';
  }

  // --- Drawing Toolbar Listeners ---
  drawingToolbar.querySelectorAll('.color-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      drawingToolbar.querySelectorAll('.color-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      currentColor = btn.dataset.color;
      setPenModeTool(false);
    });
  });

  drawingToolbar.querySelectorAll('.stroke-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      drawingToolbar.querySelectorAll('.stroke-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      currentStrokeSize = parseInt(btn.dataset.size, 10);
    });
  });

  btnToolPen.addEventListener('click', () => setPenModeTool(false));
  btnToolEraser.addEventListener('click', () => setPenModeTool(true));
  btnToolUndo.addEventListener('click', undoCanvas);
  btnToolClear.addEventListener('click', clearCanvas);
  btnDownloadSlide.addEventListener('click', downloadCurrentSlide);
  btnClosePenToolbar.addEventListener('click', togglePenMode);

  // Canvas drawing event bindings
  annotationCanvas.addEventListener('mousedown', startDrawing);
  annotationCanvas.addEventListener('mousemove', drawMove);
  window.addEventListener('mouseup', stopDrawing);

  annotationCanvas.addEventListener('touchstart', startDrawing, { passive: false });
  annotationCanvas.addEventListener('touchmove', drawMove, { passive: false });
  window.addEventListener('touchend', stopDrawing);

  // --- Filter Pills in Overview ---
  overviewFilterPills.querySelectorAll('.filter-pill').forEach((pill) => {
    pill.addEventListener('click', () => {
      overviewFilterPills.querySelectorAll('.filter-pill').forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
      filterOverviewCards(pill.dataset.filter);
    });
  });

  // --- Button Click Bindings ---
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
  btnAutoplay.addEventListener('click', toggleAutoplay);
  btnFullscreen.addEventListener('click', toggleFullscreen);
  btnSound.addEventListener('click', toggleSound);
  btnBlackout.addEventListener('click', toggleBlackout);
  btnShortcuts.addEventListener('click', toggleShortcutsModal);
  btnCloseShortcuts.addEventListener('click', toggleShortcutsModal);
  shortcutsBackdrop.addEventListener('click', toggleShortcutsModal);

  // --- Initialization ---
  function init() {
    populateSectionDropdown();
    populateOverviewGrid();

    // Check URL hash for starting slide (e.g. #slide-42)
    const hash = window.location.hash;
    let initialIdx = 0;
    if (hash && hash.startsWith('#slide-')) {
      const num = parseInt(hash.replace('#slide-', ''), 10);
      if (!isNaN(num) && num >= 1 && num <= TOTAL_SLIDES) {
        initialIdx = num - 1;
      }
    }

    goToSlide(initialIdx);
  }

  // Run on DOM load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
