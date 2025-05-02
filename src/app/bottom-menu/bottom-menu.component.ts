import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-bottom-menu',
  standalone: true,
  imports: [],
  templateUrl: './bottom-menu.component.html',
  styleUrl: './bottom-menu.component.scss'
})
export class BottomMenuComponent {

@Output() navigate = new EventEmitter<string>();
}
