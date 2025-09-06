export function renderBenefits(el) {
    if (!el) return;
    el.innerHTML = `
      <div class="benefits">
        <div class="benefits__box"></div>
        <h2>Наши преимущества</h2>
      </div>
    `;
}