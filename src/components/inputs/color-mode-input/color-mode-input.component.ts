import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';

type ColorMode = "light" | "dark" | "auto";

@Component({
  selector: 'app-color-mode-input',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatMenuTrigger,
  ],
  templateUrl: './color-mode-input.component.html',
})
export class ColorModeComponent {
  mode = signal<ColorMode>("auto");

  ngOnInit(): void {
    this.mode.set(this.getModeFromMediaQuery());
  }

  switchColorMode(mode: ColorMode) {
    const html = document.querySelector('html');
    if (html === null) {
      return;
    }
    this.mode.set(mode);
    html.style.setProperty("color-scheme", mode === "auto" ? "light dark" : mode);
  }

  getModeFromMediaQuery() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return "dark";
    }
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return "light";
    }
    return "auto";
  }
}
