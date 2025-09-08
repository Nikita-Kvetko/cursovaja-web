export function renderCatalog(container) {
    if (!container) return;
    container.innerHTML = `
    <div class="catalog">
      <h2 class="catalog__title">КАТАЛОГ</h2>
      <div class="catalog__grid">
        <div class="catalog__item">
          <img src="../../image/catalog1.png" alt="Кухни">
          <span class="catalog__badge">Кухни</span>
        </div>
        <div class="catalog__item">
          <img src="../../image/catalog2.jpg" alt="Гостиные">
          <span class="catalog__badge">Гостиные</span>
        </div>
        <div class="catalog__item">
          <img src="../../image/catalog3.jpg" alt="Спальни">
          <span class="catalog__badge">Спальни</span>
        </div>
        <div class="catalog__item">
          <img src="../../image/catalog4.jpg" alt="Прихожие">
          <span class="catalog__badge">Прихожие</span>
        </div>
        <div class="catalog__item">
          <img src="../../image/catalog5.jpg" alt="Шкафы-купе">
          <span class="catalog__badge">Шкафы-купе</span>
        </div>
        <div class="catalog__item">
          <img src="../../image/catalog6.jpg" alt="Детские">
          <span class="catalog__badge">Детские</span>
        </div>
        <div class="catalog__item">
          <img src="../../image/catalog7.jpg" alt="Диваны">
          <span class="catalog__badge">Диваны</span>
        </div>
        <div class="catalog__item">
          <img src="../../image/catalog8.jpg" alt="Где посмотреть">
          <span class="catalog__badge">Где посмотреть</span>
        </div>
      </div>
    </div>
  `;
}
