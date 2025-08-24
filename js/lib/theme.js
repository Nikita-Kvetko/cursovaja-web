import { load, save } from './storage.js';
const KEY = 'settings';
export function themeInit() {
    const { theme = 'light' } = load(KEY) || {};
    document.documentElement.setAttribute('data-theme', theme);
}
export function toggleTheme() {
    const s = load(KEY) || {};
    const next = (s.theme === 'dark') ? 'light' : 'dark';
    save(KEY, { ...s, theme: next });
    document.documentElement.setAttribute('data-theme', next);
}
