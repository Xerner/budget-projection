import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { ColorModeService } from 'services/color-mode.service';

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
  constructor(
    protected colorModeService: ColorModeService,
  ) { }

  ngOnInit(): void {
    this.colorModeService.switchColorMode(this.colorModeService.getModeFromMediaQueryOrLocalStorage());
  }
}
