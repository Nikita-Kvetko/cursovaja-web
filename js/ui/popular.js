export function renderPopular(container) {
    if (!container) return;
    container.innerHTML = `
    <div class="popular">
      <div class="popular__head">
        <h2 class="popular__title">ПОПУЛЯРНЫЕ ТОВАРЫ</h2>
        <a href="#" class="popular__all">Все товары</a>
      </div>
      <div class="popular__grid">
        
        <div class="product">
          <div class="product__labels">
            <span class="label label--sale">-30%</span>
            <span class="label label--hit">ХИТ</span>
          </div>
          <img src="../../image/product1.jpg" alt="Мори кровать KPM 900.1" class="product__img">
          <h3 class="product__name">Мори кровать KPM 900.1</h3>
          <div class="product__colors">
            <span style="background:#111"></span>
            <span style="background:#c0c0a0"></span>
            <span style="background:#e5e5c5"></span>
          </div>
          <div class="product__price">
            <span class="old">7 159 руб.</span>
            <span class="new">5 017 руб.</span>
          </div>
          <div class="product__actions">
            <button class="btn-buy">КУПИТЬ</button>
            <button class="btn-fav">♡</button>
          </div>
          <div class="product__props">
            <p>Размеры: Ширина 1635 мм, Высота 650 мм, Глубина 2032 мм</p>
          </div>
        </div>

        <div class="product">
          <span class="label label--hit">ХИТ</span>
          <img src="../../image/product2.jpg" alt="Гостиная модульная Lucido" class="product__img">
          <h3 class="product__name">Гостиная модульная Lucido</h3>
          <div class="product__price">
            <span class="old">7 159 руб.</span>
            <span class="new">5 017 руб.</span>
          </div>
          <div class="product__actions">
            <button class="btn-buy">КУПИТЬ</button>
            <button class="btn-fav">♡</button>
          </div>
        </div>

        <!-- остальные товары аналогично -->
      </div>
    </div>
  `;
}
