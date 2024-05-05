import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-row-table',
  templateUrl: './row-table.component.html',
  styleUrl: './row-table.component.scss'
})
export class RowTableComponent {
  @Input() dataUser: any
}
