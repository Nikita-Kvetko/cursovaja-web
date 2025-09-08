export function renderWorks(container) {
    if (!container) return;

    container.innerHTML = `
    <div class="works">
      <div class="works__head">
        <h2 class="works__title">НАШИ РАБОТЫ</h2>
        <a href="#" class="works__all">Смотреть все работы</a>
      </div>
      <div class="works__grid">
        <div class="works__item">
          <img src="../../image/work1.png" alt="Кухня Глетчер">
          <span class="works__label">КУХНЯ ГЛЕТЧЕР</span>
        </div>
        <div class="works__item">
          <img src="../../image/work2.png" alt="Гостиная Денвер">
          <span class="works__label">ГОСТИНАЯ ДЕНВЕР</span>
        </div>
        <div class="works__item works__item--big-vert">
          <img src="../../image/work3.png" alt="Кухня Лондон">
          <span class="works__label">КУХНЯ ЛОНДОН</span>
        </div>
        <div class="works__item works__item--big-horiz">
          <img src="../../image/work4.png" alt="Кухня Амели">
          <span class="works__label">КУХНЯ АМЕЛИ</span>
        </div>
      </div>
    </div>
  `;
}

