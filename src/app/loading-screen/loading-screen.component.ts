import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.scss']
})
export class LoadingScreenComponent {
  isVisible = false;

  show() {
    this.isVisible = true;
    setTimeout(() => {
      this.isVisible = false;
    }, 1000); // Hide after 2 seconds
  }
}
