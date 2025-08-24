//i18n это интернационализация, тк нзывают файлы отвечающие за процесс создания перевода и отображение страниц для пользователей других стран
import { load, save } from './storage.js';

const FALLBACK = 'ru'; // язык странички по умолчанию
const KEY = 'settings'; // ключ который будет хранится в локал сторадже

export async function i18nInit() {
    const { lang = FALLBACK } = load(KEY) || {}; // получение языка из локал стораджа
    const dict = await fetch(`/js/data/i18n/${lang}.json`).then(r=>r.json()); // поиск перевода из json файла
    document.querySelectorAll('[data-i18n]').forEach(node => {
        const key = node.getAttribute('data-i18n');
        if (dict[key]) node.textContent = dict[key];
    });
}

export function setLang(lang) {
    const s = load(KEY) || {};
    save(KEY, { ...s, lang });
    location.reload();
}