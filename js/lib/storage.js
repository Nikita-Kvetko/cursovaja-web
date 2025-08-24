//реализация локал стороджа k-ключ v-значение которое нужно сохранить.

export const load = k => JSON.parse(localStorage.getItem(k) || 'null');
export const save = (k, v) => localStorage.setItem(k, JSON.stringify(v));
export const clearAll = () => localStorage.clear();
