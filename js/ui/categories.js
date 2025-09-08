export function renderCategories(container) {
    if (!container) return;

    const categories = [
        "КУХНИ", "КРОВАТИ", "ГОСТИННЫЕ", "ШКАФ-КУПЕ", "СПАЛЬНИ",
        "ПРИХОЖИЕ", "ДИВАНЫ", "ДЕТСКИЕ", "СТУЛЬЯ", "СТОЛЫ"
    ];

    container.innerHTML = `
    <div class="categories">
      <h2 class="categories__title">ПОПУЛЯРНЫЕ КАТЕГОРИИ</h2>
      <div class="categories__list">
        ${categories.map((c, i) =>
        `<button class="categories__btn ${i === 0 ? "active" : ""}">${c}</button>`
    ).join("")}
      </div>
    </div>
  `;

    // интерактив: переключение активной категории
    const buttons = container.querySelectorAll(".categories__btn");
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            buttons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
        });
    });
}

