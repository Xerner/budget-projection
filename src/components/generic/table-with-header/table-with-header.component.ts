import { Component, input } from '@angular/core';

@Component({
  selector: 'app-table-with-header',
  standalone: true,
  imports: [],
  templateUrl: './table-with-header.component.html',
})
export class TableWithHeaderComponent {
  header = input.required<string>();
}
