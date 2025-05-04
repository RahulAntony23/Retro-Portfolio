import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { BottomMenuComponent } from './bottom-menu/bottom-menu.component';
import { LoadingScreenComponent } from "./loading-screen/loading-screen.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BottomMenuComponent, RouterOutlet, LoadingScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private router: Router) {}

  onNavigate(path: string): void {
    this.router.navigate([path]); // Navigate to the emitted path
  }

  title = 'RetroPortfolio';
}