import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import type { SlideItem } from '../types/slides';

function buildSlideMarkup(slide: SlideItem): string {
  const isHero = slide.layout === 'hero-title';
  const isQuiz = slide.layout === 'quiz' && slide.quiz;

  const headerHtml = !isHero
    ? `
      <div class="slide-header-block">
        <span class="slide-category-chip">${slide.category}</span>
        <h2 class="slide-title-primary">${slide.title}</h2>
        ${slide.subtitle ? `<div class="slide-subtitle">${slide.subtitle}</div>` : ''}
      </div>
    `
    : '';

  let bodyHtml = slide.html ?? '';
  if (isQuiz && slide.quiz) {
    const optionsHtml = slide.quiz.options
      .map(
        (opt, idx) => `
          <div class="quiz-option-btn">
            <span class="opt-letter">${opt.label ?? String.fromCharCode(65 + idx)}</span>
            <span class="opt-text">${opt.text}</span>
          </div>
        `
      )
      .join('');

    bodyHtml = `
      <div class="quiz-card">
        <div class="quiz-question-box">
          <span class="quiz-badge">MCQ PRACTICE</span>
          <h3 class="quiz-question-text">${slide.quiz.question}</h3>
        </div>
        <div class="quiz-options-list">${optionsHtml}</div>
      </div>
    `;
  }

  return `
    <div class="slide-inner" style="overflow: visible; height: auto;">
      ${headerHtml}
      <div class="slide-body-content">${bodyHtml}</div>
    </div>
  `;
}

export async function exportSlidesToPdf(
  slides: SlideItem[],
  filename: string,
  onProgress?: (current: number, total: number) => void
): Promise<void> {
  if (slides.length === 0) return;

  const renderWidth = 1600;
  const minRenderHeight = 900;
  const pageWidth = 1280;
  const pageHeight = 720;

  const stage = document.createElement('div');
  stage.className = 'presentation-frame';
  stage.style.position = 'fixed';
  stage.style.left = '-99999px';
  stage.style.top = '0';
  stage.style.width = `${renderWidth}px`;
  stage.style.minHeight = `${minRenderHeight}px`;
  stage.style.height = 'auto';
  stage.style.maxWidth = 'none';
  stage.style.maxHeight = 'none';
  stage.style.aspectRatio = 'auto';
  stage.style.overflow = 'visible';
  stage.style.borderRadius = '0';
  stage.style.boxShadow = 'none';
  stage.style.zIndex = '-1';
  document.body.appendChild(stage);

  try {
    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'px',
      format: [pageWidth, pageHeight],
      compress: true,
    });

    for (let i = 0; i < slides.length; i++) {
      onProgress?.(i + 1, slides.length);
      stage.innerHTML = buildSlideMarkup(slides[i]);

      // Wait for layout & fonts to settle
      await new Promise((r) => requestAnimationFrame(() => setTimeout(r, 25)));

      const captureWidth = Math.max(renderWidth, stage.scrollWidth);
      const captureHeight = Math.max(minRenderHeight, stage.scrollHeight);

      const canvas = await html2canvas(stage, {
        width: captureWidth,
        height: captureHeight,
        windowWidth: captureWidth,
        windowHeight: captureHeight,
        scale: 1,
        backgroundColor: '#0d1117',
        useCORS: true,
        logging: false,
      });

      const imgData = canvas.toDataURL('image/jpeg', 0.9);
      if (i > 0) {
        pdf.addPage([pageWidth, pageHeight], 'landscape');
      }

      // Fill background and scale-to-fit (contain) so nothing is ever clipped
      pdf.setFillColor(13, 17, 23);
      pdf.rect(0, 0, pageWidth, pageHeight, 'F');

      const fitScale = Math.min(pageWidth / canvas.width, pageHeight / canvas.height);
      const drawW = canvas.width * fitScale;
      const drawH = canvas.height * fitScale;
      const offsetX = (pageWidth - drawW) / 2;
      const offsetY = (pageHeight - drawH) / 2;

      pdf.addImage(imgData, 'JPEG', offsetX, offsetY, drawW, drawH, undefined, 'FAST');
    }

    pdf.save(filename.endsWith('.pdf') ? filename : `${filename}.pdf`);
  } finally {
    document.body.removeChild(stage);
  }
}
