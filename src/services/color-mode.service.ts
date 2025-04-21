import { Injectable, signal } from '@angular/core';

export type ColorMode = "light" | "dark" | "auto";

@Injectable({ providedIn: 'root' })
export class ColorModeService {
  storageKey = 'color-scheme';
  mode = signal<ColorMode>("auto");

  constructor() { }

  getModeFromMediaQueryOrLocalStorage(): ColorMode {
    const localStorageMode = localStorage.getItem(this.storageKey);
    const mediaQueryMode = this.getModeFromMediaQuery();
    return (localStorageMode ?? mediaQueryMode) as ColorMode;
  }

  getModeFromMediaQuery(): ColorMode {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return "dark";
    }
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return "light";
    }
    return "auto";
  }

  getModeFromLocalStorage(storageKey: string): ColorMode {
    const localStorageMode = localStorage.getItem(storageKey);
    return localStorageMode as ColorMode ?? this.getModeFromMediaQuery();
  }

  switchColorMode(mode: ColorMode) {
    const html = document.querySelector('html');
    if (html === null) {
      return;
    }
    localStorage.setItem(this.storageKey, mode);
    html.style.setProperty("color-scheme", mode === "auto" ? "light dark" : mode);
    this.mode.set(mode);
  }
}
