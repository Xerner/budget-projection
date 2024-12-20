import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';

enum ColorTheme {
  MagentaAndViolet = "magenta-and-violet-theme",
  CyanAndOrange = "cyan-and-orange-theme",
  RoseAndRed = "rose-and-red-theme",
  AzureAndBlue = "azure-and-blue-theme",
};

@Component({
  selector: 'app-color-scheme-input',
  imports: [
    MatMenuModule,
    MatMenuTrigger,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './color-scheme-input.component.html',
})
export class ColorSchemeInputComponent {
  selectedTheme = signal<ColorTheme>(ColorTheme.MagentaAndViolet);
  ColorTheme = ColorTheme;

  switchColorScheme(theme: ColorTheme) {
    this.selectedTheme.set(theme);
    const html = document.querySelector('html');
    if (html === null) {
      return;
    }
    html.classList.remove(ColorTheme.MagentaAndViolet, ColorTheme.CyanAndOrange, ColorTheme.RoseAndRed, ColorTheme.AzureAndBlue);
    html.classList.add(theme);
  }
}
