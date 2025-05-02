import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RetroScreenComponent } from './retro-screen/retro-screen.component';
import { BottomMenuComponent } from './bottom-menu/bottom-menu.component';
import { CertificationsComponent } from "./certifications/certifications.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ContactComponent } from "./contact/contact.component";
import { BioComponent } from "./bio/bio.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BottomMenuComponent, RetroScreenComponent, CertificationsComponent, ProjectsComponent, ContactComponent, BioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'RetroPortfolio';
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
