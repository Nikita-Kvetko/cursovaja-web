import { toggleTheme } from "../lib/theme.js";
import { toggleAccess, setFontSize } from "../lib/accessibility.js";
import { setLang } from "../lib/i18n.js";

export function renderHeader(container) {
    if (!container) return;

    container.innerHTML = `
        <header>
            <div class="top-nav">
                <div class="container">
                    <div class="top-nav-container">
                        <div class="location-info">
                            <a><img src="../../image/loc.gif" alt="loc"> Ростов ˅</a>
                            <a href="#">Акции</a>
                            <a href="#">Сборка</a>
                            <a href="#">Оплата</a>
                            <a href="#">Доставка</a>
                        </div>
                        <div class="contacts-info">
                            <a href="#">Наши работы</a>
                            <a href="#">Контакты</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="header-content">
                    <img src="../../image/logo.png" alt="logo">
                    
                    <div class="store-info">
                        <p>ул. Московская, 144 корп. - 1</p>
                        <a href="#" class="scheme-link">Схема проезда</a>
                    </div>
                    
                    <div class="contacts">
                        <div class="phone"><img src="../../image/phone.png" alt="phone"> 8 (961) 525 91 91</div>
                        <a href="#" class="callback-btn">Заказать звонок</a>
                    </div>
                    
                    <div class="user-actions">
                        <a href="#" class="login-btn"><img src="../../image/login.png" alt="login"> Войти</a>
                        <a href="#" class="favorites"><img src="../../image/favorites.png" alt="favorites">Избранное</a>
                        <a href="#" class="cart"><img src="../../image/cart.png" alt="cart">Корзина</a>
                    </div>

                    <div class="header__actions">
                        <button id="theme-toggle" class="btn" title="Сменить тему">🌙</button>
                        <button id="access-toggle" class="btn" title="Версия для слабовидящих">👓</button>

                        <select id="font-size" class="btn">
                            <option value="s">A-</option>
                            <option value="m" selected>A</option>
                            <option value="l">A+</option>
                            <option value="xl">A++</option>
                        </select>

                        <select id="lang-switch" class="btn">
                            <option value="ru">RU</option>
                            <option value="en">EN</option>
                        </select>
                    </div>
                </div>
            </div>

            <nav class="main-nav">
                <div class="container">
                    <ul class="nav-menu">
                        <div class="highlight"></div> 
                        <li><a href="#">КУХНИ</a></li>
                        <li><a href="#">ГОСТИННЫЕ</a></li>
                        <li><a href="#">СПАЛЬНИ</a></li>
                        <li><a href="#">ПРИХОЖИЕ</a></li>
                        <li><a href="#">ШКАФЫ-КУПЕ</a></li>
                        <li><a href="#">ДЕТСКИЕ</a></li>
                        <li><a href="#">ДИВАНЫ</a></li>
                        <li><a href="#">ГДЕ ПОСМОТРЕТЬ</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    `;

    // интерактив
    document.getElementById("theme-toggle").addEventListener("click", toggleTheme);
    document.getElementById("access-toggle").addEventListener("click", toggleAccess);

    document.getElementById("font-size").addEventListener("change", e => {
        setFontSize(e.target.value);
    });

    document.getElementById("lang-switch").addEventListener("change", e => {
        setLang(e.target.value);
    });

    const menu = container.querySelector(".nav-menu");
    const highlight = container.querySelector(".highlight");
    const links = menu.querySelectorAll("li a");

    let active = links[0];
    moveHighlight(active);

    links.forEach(link => {
        link.addEventListener("mouseenter", () => moveHighlight(link));
        link.addEventListener("click", (e) => {
            e.preventDefault();
            active = link;
            moveHighlight(active);
        });
    });

    function moveHighlight(element) {
        const rect = element.getBoundingClientRect();
        const containerRect = menu.getBoundingClientRect();

        highlight.style.width = rect.width + "px";
        highlight.style.transform = `translateX(${rect.left - containerRect.left}px)`;
    }
}


