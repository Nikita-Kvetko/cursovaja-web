//i18n это интернационализация, тк нзывают файлы отвечающие за процесс создания перевода и отображение страниц для пользователей других стран
import { load, save } from "./storage.js";

const FALLBACK = "ru";
const KEY = "settings";

export async function i18nInit() {
    try {
        const { lang = FALLBACK } = load(KEY) || {};
        const url = `/js/data/i18n/${lang}.json`;
        const res = await fetch(url, { cache: "no-store" });
        if (!res.ok) throw new Error(`i18n not found: ${url} (${res.status})`);
        const dict = await res.json();

        document.querySelectorAll("[data-i18n]").forEach(node => {
            const key = node.getAttribute("data-i18n");
            if (dict[key]) node.textContent = dict[key];
        });
    } catch (e) {
        console.warn("[i18nInit] skipped:", e.message);
    }
}

export function setLang(lang) {
    const s = load(KEY) || {};
    save(KEY, { ...s, lang });
    location.reload();
}