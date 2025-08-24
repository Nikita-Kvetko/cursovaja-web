export function renderHeader(container) {
    container.innerHTML = `
    <div class="header">
      <div class="header__logo">АркоМебель</div>
      <nav class="header__nav">
        <a href="index.html" data-i18n="nav_home">Главная</a>
        <a href="catalog.html" data-i18n="nav_catalog">Каталог</a>
        <a href="about.html" data-i18n="nav_about">О нас</a>
        <a href="contact.html" data-i18n="nav_contact">Контакты</a>
      </nav>
      <div class="header__lang">
        <button onclick="import('../lib/i18n.js').then(m=>m.setLang('ru'))">RU</button>
        <button onclick="import('../lib/i18n.js').then(m=>m.setLang('en'))">EN</button>
      </div>
    </div>
  `;
}
