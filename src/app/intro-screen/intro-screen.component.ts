import { Component } from '@angular/core';

@Component({
  selector: 'app-intro-screen',
  imports: [],
  templateUrl: './intro-screen.component.html',
  styleUrl: './intro-screen.component.scss'
})
export class IntroScreenComponent {


  isRight = true; // Default to "Rahul Antony"

  toggle() {
    this.isRight = !this.isRight;
  }
}



