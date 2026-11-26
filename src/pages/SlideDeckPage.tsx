import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getClassDeck } from '../services/slideService';
import type { ClassDeck, SlideItem, Subject } from '../types/slides';

declare global {
  interface Window {
    handleQuizAnswer?: (btn: HTMLElement, isCorrect: boolean) => void;
    toggleCQAnswer?: (btn: HTMLElement) => void;
  }
}

export function SlideDeckPage() {
  const { subjectSlug, classSlug } = useParams<{
    subjectSlug: string;
    classSlug: string;
  }>();
  const location = useLocation();

  const [subject, setSubject] = useState<Subject | null>(null);
  const [deck, setDeck] = useState<ClassDeck | null>(null);
  const [loading, setLoading] = useState(true);

  const [currentIdx, setCurrentIdx] = useState(0);
  const [slideInput, setSlideInput] = useState('1');
  const [isPenMode, setIsPenMode] = useState(false);
  const [isLaserMode, setIsLaserMode] = useState(false);
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [isOverviewOpen, setIsOverviewOpen] = useState(false);
  const [isShortcutsOpen, setIsShortcutsOpen] = useState(false);

  const [penColor, setPenColor] = useState('#ffeb3b');
  const [penSize, setPenSize] = useState(4);
  const [isEraser, setIsEraser] = useState(false);
  const [laserPos, setLaserPos] = useState<{ x: number; y: number; visible: boolean }>({
    x: 0,
    y: 0,
    visible: false,
  });

  // Quiz state for React-rendered quiz slides
  const [quizSelected, setQuizSelected] = useState<number | null>(null);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const frameRef = useRef<HTMLDivElement | null>(null);
  const isDrawingRef = useRef(false);
  const lastPosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const canvasHistoryRef = useRef<Record<number, string>>({});

  // Load deck
  useEffect(() => {
    let active = true;
    (async () => {
      if (!subjectSlug || !classSlug) {
        setLoading(false);
        return;
      }
      const res = await getClassDeck(subjectSlug, classSlug);
      if (!active) return;
      if (res) {
        setSubject(res.subject);
        setDeck(res.deck);
        const hash = location.hash;
        if (hash.startsWith('#slide-')) {
          const n = parseInt(hash.replace('#slide-', ''), 10);
          if (!Number.isNaN(n) && n >= 1 && n <= res.deck.slides.length) {
            setCurrentIdx(n - 1);
            setSlideInput(String(n));
          }
        }
      }
      setLoading(false);
    })();
    return () => {
      active = false;
    };
  }, [subjectSlug, classSlug, location.hash]);

  // Expose legacy inline onclick handlers for CQ & Quiz HTML snippets
  useEffect(() => {
    window.handleQuizAnswer = (btn: HTMLElement, isCorrect: boolean) => {
      const parent = btn.closest('.quiz-options-list');
      if (!parent) return;
      const allBtns = parent.querySelectorAll<HTMLElement>('.quiz-option-btn');
      allBtns.forEach((b) => {
        b.style.pointerEvents = 'none';
      });
      if (isCorrect) {
        btn.classList.add('correct');
      } else {
        btn.classList.add('wrong');
        allBtns.forEach((b) => {
          if (b.getAttribute('onclick')?.includes('true')) {
            b.classList.add('correct');
          }
        });
      }
      const expl = document.getElementById('quizExpl');
      if (expl) expl.style.display = 'block';
    };

    window.toggleCQAnswer = (btn: HTMLElement) => {
      const item = btn.closest('.cq-item');
      const ansBox = item?.querySelector<HTMLElement>('.cq-ans-box');
      if (ansBox) {
        const isHidden = ansBox.style.display === 'none' || !ansBox.style.display;
        ansBox.style.display = isHidden ? 'block' : 'none';
        btn.textContent = isHidden ? 'উত্তর লুকান' : 'উত্তর দেখুন';
      }
    };

    return () => {
      delete window.handleQuizAnswer;
      delete window.toggleCQAnswer;
    };
  }, []);

  const slides: SlideItem[] = deck?.slides ?? [];
  const totalSlides = slides.length;
  const currentSlide = slides[currentIdx];

  // Restore canvas for current slide
  const restoreCanvas = useCallback((idx: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const saved = canvasHistoryRef.current[idx];
    if (saved) {
      const img = new Image();
      img.onload = () => ctx.drawImage(img, 0, 0);
      img.src = saved;
    }
  }, []);

  useEffect(() => {
    setQuizSelected(null);
    setSlideInput(String(currentIdx + 1));
    restoreCanvas(currentIdx);
    if (totalSlides > 0) {
      window.history.replaceState(null, '', `#slide-${currentIdx + 1}`);
    }
  }, [currentIdx, totalSlides, restoreCanvas]);

  const goToSlide = useCallback(
    (idx: number) => {
      if (idx < 0 || idx >= totalSlides) return;
      // Save current canvas before switching
      const canvas = canvasRef.current;
      if (canvas) {
        canvasHistoryRef.current[currentIdx] = canvas.toDataURL();
      }
      setCurrentIdx(idx);
    },
    [currentIdx, totalSlides]
  );

  const nextSlide = useCallback(() => {
    if (currentIdx < totalSlides - 1) goToSlide(currentIdx + 1);
  }, [currentIdx, totalSlides, goToSlide]);

  const prevSlide = useCallback(() => {
    if (currentIdx > 0) goToSlide(currentIdx - 1);
  }, [currentIdx, goToSlide]);

  const clearCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    delete canvasHistoryRef.current[currentIdx];
  }, [currentIdx]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) {
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
          goToSlide(0);
          break;
        case 'End':
          e.preventDefault();
          if (totalSlides > 0) goToSlide(totalSlides - 1);
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          toggleFullscreen();
          break;
        case 'o':
        case 'O':
          e.preventDefault();
          setIsOverviewOpen((v) => !v);
          break;
        case 's':
        case 'S':
          e.preventDefault();
          setIsNotesOpen((v) => !v);
          break;
        case 'p':
        case 'P':
          e.preventDefault();
          setIsPenMode((v) => {
            if (!v) setIsLaserMode(false);
            return !v;
          });
          break;
        case 'l':
        case 'L':
          e.preventDefault();
          setIsLaserMode((v) => {
            if (!v) setIsPenMode(false);
            return !v;
          });
          break;
        case 'c':
        case 'C':
          if (isPenMode) clearCanvas();
          break;
        case '?':
          setIsShortcutsOpen((v) => !v);
          break;
        case 'Escape':
          setIsOverviewOpen(false);
          setIsShortcutsOpen(false);
          setIsNotesOpen(false);
          setIsPenMode(false);
          setIsLaserMode(false);
          break;
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [nextSlide, prevSlide, goToSlide, totalSlides, toggleFullscreen, isPenMode, clearCanvas]);

  // Canvas drawing helpers
  const getCanvasCoords = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    return {
      x: ((clientX - rect.left) / rect.width) * canvas.width,
      y: ((clientY - rect.top) / rect.height) * canvas.height,
    };
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isPenMode) return;
    isDrawingRef.current = true;
    lastPosRef.current = getCanvasCoords(e.clientX, e.clientY);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isPenMode || !isDrawingRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const pos = getCanvasCoords(e.clientX, e.clientY);
    ctx.beginPath();
    ctx.moveTo(lastPosRef.current.x, lastPosRef.current.y);
    ctx.lineTo(pos.x, pos.y);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    if (isEraser) {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.lineWidth = penSize * 4;
    } else {
      ctx.globalCompositeOperation = 'source-over';
      ctx.strokeStyle = penColor;
      ctx.lineWidth = penSize;
    }
    ctx.stroke();
    lastPosRef.current = pos;
  };

  const handlePointerUp = () => {
    if (!isDrawingRef.current) return;
    isDrawingRef.current = false;
    const canvas = canvasRef.current;
    if (canvas) {
      canvasHistoryRef.current[currentIdx] = canvas.toDataURL();
    }
  };

  const handleFrameMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isLaserMode || !frameRef.current) return;
    const rect = frameRef.current.getBoundingClientRect();
    setLaserPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      visible: true,
    });
  };

  if (loading) {
    return (
      <div className="portal-shell" style={{ justifyContent: 'center', alignItems: 'center' }}>
        Loading slide deck...
      </div>
    );
  }

  if (!deck || !subject || totalSlides === 0 || !currentSlide) {
    return (
      <div className="portal-shell">
        <main className="portal-main">
          <Link to="/" className="breadcrumb">
            <ArrowLeft size={16} /> Back to Subjects
          </Link>
          <div className="empty-state">Slide deck not found.</div>
        </main>
      </div>
    );
  }

  const progressPct = ((currentIdx + 1) / totalSlides) * 100;
  const isHero = currentSlide.layout === 'hero-title';
  const isQuiz = currentSlide.layout === 'quiz' && currentSlide.quiz;

  return (
    <div className="deck-app">
      {/* Top Teacher Navigation Bar */}
      <header className="deck-header">
        <div className="header-left" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Link to={`/subject/${subject.slug}`} className="deck-back-link" title="Back to Subject">
            <ArrowLeft size={14} />
            <span>Classes</span>
          </Link>
          <div className="brand-badge">
            <span className="brand-dot" />
            <span className="brand-title">ICT COACH</span>
            <span className="brand-tag">{deck.chapter}</span>
          </div>
        </div>

        <div className="header-center-info">
          <span className="current-module-badge">{currentSlide.module}</span>
          <span className="current-slide-heading">{currentSlide.title}</span>
        </div>

        <div className="header-tools">
          <button
            className="tool-btn"
            onClick={() => setIsOverviewOpen(true)}
            title="Slide Overview Grid (O)"
          >
            <span>Overview</span>
          </button>

          <button
            className={`tool-btn ${isNotesOpen ? 'active' : ''}`}
            onClick={() => setIsNotesOpen((v) => !v)}
            title="Teacher Speaker Notes (S)"
          >
            <span>Teacher Notes</span>
          </button>

          <button
            className={`tool-btn ${isPenMode ? 'active' : ''}`}
            onClick={() => {
              setIsPenMode((v) => {
                if (!v) setIsLaserMode(false);
                return !v;
              });
            }}
            title="Annotation Pen (P)"
          >
            <span>Pen</span>
          </button>

          <button
            className={`tool-btn ${isLaserMode ? 'active' : ''}`}
            onClick={() => {
              setIsLaserMode((v) => {
                if (!v) setIsPenMode(false);
                return !v;
              });
            }}
            title="Presenter Laser Pointer (L)"
          >
            <span>Laser</span>
          </button>

          <button
            className="tool-btn icon-only"
            onClick={() => setIsShortcutsOpen(true)}
            title="Keyboard Shortcuts (?)"
          >
            <span>?</span>
          </button>

          <button
            className="tool-btn icon-only"
            onClick={toggleFullscreen}
            title="Toggle Fullscreen (F)"
          >
            <span>⛶</span>
          </button>
        </div>
      </header>

      {/* Main Stage Viewport */}
      <main className="deck-stage">
        <div
          className="presentation-frame"
          ref={frameRef}
          onMouseMove={handleFrameMouseMove}
          onMouseLeave={() => setLaserPos((p) => ({ ...p, visible: false }))}
          style={{ cursor: isLaserMode ? 'none' : undefined }}
        >
          <div className="slide-inner">
            {!isHero && (
              <div className="slide-header-block">
                <span className="slide-category-chip">{currentSlide.category}</span>
                <h2 className="slide-title-primary">{currentSlide.title}</h2>
                {currentSlide.subtitle && (
                  <div className="slide-subtitle">{currentSlide.subtitle}</div>
                )}
              </div>
            )}

            <div className="slide-body-content">
              {isQuiz && currentSlide.quiz ? (
                <div className="quiz-card">
                  <div className="quiz-question-box">
                    <span className="quiz-badge">MCQ PRACTICE</span>
                    <h3 className="quiz-question-text">{currentSlide.quiz.question}</h3>
                  </div>

                  <div className="quiz-options-list">
                    {currentSlide.quiz.options.map((opt, idx) => {
                      let cls = 'quiz-option-btn';
                      if (quizSelected !== null) {
                        if (opt.correct) cls += ' correct';
                        else if (quizSelected === idx) cls += ' wrong';
                      }
                      return (
                        <button
                          key={idx}
                          className={cls}
                          disabled={quizSelected !== null}
                          onClick={() => setQuizSelected(idx)}
                        >
                          <span className="opt-letter">
                            {opt.label ?? String.fromCharCode(65 + idx)}
                          </span>
                          <span className="opt-text">{opt.text}</span>
                        </button>
                      );
                    })}
                  </div>

                  {quizSelected !== null && (
                    <div className="quiz-explanation-card">
                      <strong style={{ color: '#00e5ff' }}>ব্যাখ্যা:</strong>{' '}
                      {currentSlide.quiz.explanation}
                    </div>
                  )}
                </div>
              ) : (
                <div
                  style={{ display: 'contents' }}
                  dangerouslySetInnerHTML={{ __html: currentSlide.html ?? '' }}
                />
              )}
            </div>
          </div>

          {/* Whiteboard Canvas Overlay */}
          <canvas
            ref={canvasRef}
            id="deckCanvas"
            width={1920}
            height={1080}
            style={{ pointerEvents: isPenMode ? 'auto' : 'none', cursor: isPenMode ? 'crosshair' : 'default' }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
          />

          {/* Floating Pen Toolbar */}
          {isPenMode && (
            <div
              style={{
                position: 'absolute',
                top: 16,
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 40,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '6px 12px',
                borderRadius: 999,
                background: 'rgba(13, 17, 23, 0.92)',
                border: '1px solid rgba(255,255,255,0.16)',
              }}
            >
              {['#ffeb3b', '#00e5ff', '#ff3366', '#00e676', '#ffffff'].map((c) => (
                <button
                  key={c}
                  onClick={() => {
                    setIsEraser(false);
                    setPenColor(c);
                  }}
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: '50%',
                    background: c,
                    border: !isEraser && penColor === c ? '2px solid #fff' : '1px solid #444',
                    cursor: 'pointer',
                  }}
                  title="Pen Color"
                />
              ))}
              <button
                className={`tool-btn ${isEraser ? 'active' : ''}`}
                onClick={() => setIsEraser((v) => !v)}
                style={{ padding: '2px 8px', fontSize: '0.75rem' }}
              >
                Eraser
              </button>
              <select
                value={penSize}
                onChange={(e) => setPenSize(Number(e.target.value))}
                style={{
                  background: '#161b22',
                  color: '#fff',
                  border: '1px solid #30363d',
                  borderRadius: 6,
                  padding: '2px 6px',
                  fontSize: '0.75rem',
                }}
              >
                <option value={3}>Thin</option>
                <option value={6}>Medium</option>
                <option value={10}>Thick</option>
              </select>
              <button
                className="tool-btn"
                onClick={clearCanvas}
                style={{ padding: '2px 8px', fontSize: '0.75rem' }}
              >
                Clear (C)
              </button>
            </div>
          )}

          {/* Laser Pointer */}
          {isLaserMode && laserPos.visible && (
            <div
              className="laser-dot"
              style={{
                display: 'block',
                left: `${laserPos.x}px`,
                top: `${laserPos.y}px`,
              }}
            />
          )}

          {/* Hotspots */}
          <div
            className="stage-hotspot hotspot-left"
            onClick={prevSlide}
            title="Previous Slide (← / PgUp)"
          >
            <div className="hotspot-icon">‹</div>
          </div>
          <div
            className="stage-hotspot hotspot-right"
            onClick={nextSlide}
            title="Next Slide (→ / Space / PgDn)"
          >
            <div className="hotspot-icon">›</div>
          </div>
        </div>
      </main>

      {/* Teacher Speaker Notes Drawer */}
      <aside className={`teacher-notes-drawer ${isNotesOpen ? 'open' : ''}`}>
        <div className="notes-header">
          <h3>👨‍🏫 Teacher Speaker Notes</h3>
          <button className="btn-close-notes" onClick={() => setIsNotesOpen(false)}>
            ✕
          </button>
        </div>
        <div className="notes-body">
          <p>{currentSlide.teacherNotes || 'No speaker notes for this slide.'}</p>
        </div>
      </aside>

      {/* Bottom Controls & Scrubber */}
      <footer className="deck-footer">
        <div
          className="timeline-scrubber"
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
            const target = Math.min(totalSlides - 1, Math.floor(pct * totalSlides));
            goToSlide(target);
          }}
          title="Click to jump along the lecture"
        >
          <div className="timeline-fill" style={{ width: `${progressPct}%` }} />
        </div>

        <div className="footer-controls">
          <div className="footer-left">
            <button
              className="nav-ctrl-btn"
              onClick={() => goToSlide(0)}
              disabled={currentIdx === 0}
              title="First Slide (Home)"
            >
              ⏮ First
            </button>
            <button
              className="nav-ctrl-btn"
              onClick={prevSlide}
              disabled={currentIdx === 0}
              title="Previous Slide (←)"
            >
              ◀ Prev
            </button>
            <button
              className="nav-ctrl-btn primary"
              onClick={nextSlide}
              disabled={currentIdx === totalSlides - 1}
              title="Next Slide (→ / Space)"
            >
              Next ▶
            </button>
            <button
              className="nav-ctrl-btn"
              onClick={() => goToSlide(totalSlides - 1)}
              disabled={currentIdx === totalSlides - 1}
              title="Last Slide (End)"
            >
              Last ⏭
            </button>
          </div>

          <div className="footer-center">
            <div className="slide-counter-box">
              <span>Slide</span>
              <input
                type="number"
                className="slide-num-input"
                min={1}
                max={totalSlides}
                value={slideInput}
                onChange={(e) => {
                  setSlideInput(e.target.value);
                  const val = parseInt(e.target.value, 10);
                  if (!Number.isNaN(val) && val >= 1 && val <= totalSlides) {
                    goToSlide(val - 1);
                  }
                }}
              />
              <span style={{ color: '#666' }}>/</span>
              <span>{totalSlides}</span>
            </div>
          </div>

          <div className="footer-right">
            <button
              className="nav-ctrl-btn"
              onClick={() => window.print()}
              title="Print / Save Handout (Ctrl+P)"
            >
              <span>🖨️ Handout</span>
            </button>
          </div>
        </div>
      </footer>

      {/* Overview Lightbox Grid Modal */}
      {isOverviewOpen && (
        <div className="overview-modal" style={{ display: 'flex' }}>
          <div className="overview-backdrop" onClick={() => setIsOverviewOpen(false)} />
          <div className="overview-dialog">
            <div className="overview-top">
              <h3 style={{ color: '#ffaa00', fontSize: '1.15rem' }}>
                📑 লেকচার স্লাইড তালিকা (Slide Overview)
              </h3>
              <button
                className="btn-close-modal"
                onClick={() => setIsOverviewOpen(false)}
              >
                ✕ Close
              </button>
            </div>
            <div className="overview-grid">
              {slides.map((s, idx) => (
                <div
                  key={s.id}
                  className={`overview-thumb ${idx === currentIdx ? 'active' : ''}`}
                  onClick={() => {
                    goToSlide(idx);
                    setIsOverviewOpen(false);
                  }}
                >
                  <div className="thumb-num">
                    Slide {idx + 1} • {s.module}
                  </div>
                  <div className="thumb-title">{s.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Shortcuts Modal */}
      {isShortcutsOpen && (
        <div className="overview-modal" style={{ display: 'flex' }}>
          <div className="overview-backdrop" onClick={() => setIsShortcutsOpen(false)} />
          <div className="overview-dialog" style={{ maxWidth: 520 }}>
            <div className="overview-top">
              <h3 style={{ color: '#00e5ff', fontSize: '1.1rem' }}>⌨️ Keyboard Shortcuts</h3>
              <button
                className="btn-close-modal"
                onClick={() => setIsShortcutsOpen(false)}
              >
                ✕ Close
              </button>
            </div>
            <div style={{ padding: '1rem 1.5rem', display: 'grid', gap: '0.6rem', fontSize: '0.92rem' }}>
              <div><code>→ / Space / PgDn</code> — Next slide</div>
              <div><code>← / Backspace / PgUp</code> — Previous slide</div>
              <div><code>Home / End</code> — First / Last slide</div>
              <div><code>S</code> — Toggle Teacher Speaker Notes</div>
              <div><code>P</code> — Toggle Annotation Pen</div>
              <div><code>L</code> — Toggle Laser Pointer</div>
              <div><code>C</code> — Clear Pen Drawings</div>
              <div><code>O</code> — Toggle Slide Overview</div>
              <div><code>F</code> — Toggle Fullscreen</div>
              <div><code>Esc</code> — Close drawers / tools</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
