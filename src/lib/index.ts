import { writable } from 'svelte/store';

export const screen_size = writable(0);
export const mouse_position = writable({ x: 0, y: 0 });