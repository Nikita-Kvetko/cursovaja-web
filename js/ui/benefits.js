export function renderBenefits(el) {
    if (!el) return;
    el.innerHTML = `
    <div class="benefits">
      <div class="benefits__box"></div >
       <div class="benefits__container">
        <h2 class="benefits__title" data-i18n="benefits.title">НАШИ ПРЕИМУЩЕСТВА</h2>
        <div class="benefits__row">
          <div class="benefits__item">
            <img src="../../image/benefits1.png" alt="Удобное расположение">
            <p>Удобное расположение магазина</p>
          </div>
          <div class="benefits__item">
            <img src="../../image/benefits2.png" alt="Доступные цены">
            <p>Доступные цены и акции для клиентов</p>
          </div>
          <div class="benefits__item">
            <img src="../../image/benefits3.png" alt="Качество">
            <p>Высокое качество мебели</p>
          </div>
          <div class="benefits__item">
            <img src="../../image/benefits4.png" alt="Доставка">
            <p>Быстрая и удобная доставка</p>
          </div>
          </div >
        </div>
    </div>
  `;
}
