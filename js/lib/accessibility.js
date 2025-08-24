import { load, save } from './storage.js';
const KEY = 'settings';
export function accessInit() {
    const { access=false, fontSize='m' } = load(KEY) || {};
    document.documentElement.classList.toggle('access', !!access);
    document.documentElement.classList.add(`size-${fontSize}`);
}
export function setFontSize(val) {
    ['size-s','size-m','size-l','size-xl'].forEach(c=>document.documentElement.classList.remove(c));
    document.documentElement.classList.add(`size-${val}`);
    const s = load(KEY) || {};
    save(KEY, { ...s, fontSize: val });
}
export function toggleAccess() {
    const s = load(KEY) || {};
    const next = !s.access;
    document.documentElement.classList.toggle('access', next);
    save(KEY, { ...s, access: next });
}