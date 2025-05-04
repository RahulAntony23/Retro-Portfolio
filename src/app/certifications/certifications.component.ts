import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-certifications',
  imports: [CommonModule],
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent {

  constructor(private router: Router) {}

  onNavigate(path: string): void {
    this.router.navigate([path]);
  }
  certifications = [
    { name: 'AWS Certified Developer', link: 'https://www.credly.com/badges/3199bb37-ece4-4034-a453-3cf81a811322/public_url', image: 'assets/aws-badge.png' },
    { name: 'Java', link: 'https://www.hackerrank.com/certificates/0ed93734418a', image: 'assets/google-cloud-badge.png' },
    { name: 'Go Lang', link: 'https://www.hackerrank.com/certificates/03a7590cda1e', image: 'assets/azure-badge.png' },
    { name: 'JavaScript', link: 'https://www.hackerrank.com/certificates/2df538707cdc', image: 'assets/java-badge.png' },
    { name: 'Android Native', link: 'https://www.udemy.com/certificate/UC-da4fb3f6-2846-42fc-8085-8bdb2da35d4f/', image: 'assets/react-badge.png' },
    { name: 'React', link: 'https://www.udemy.com/certificate/UC-7f129418-b0e9-40d4-9c20-870003e72994/', image: 'assets/flutter-badge.png' },
    { name: 'Kafka', link: 'https://capgemini.udemy.com/certificate/UC-8f035082-7cf5-4270-bc90-607968b150b1/', image: 'assets/kubernetes-badge.png' },
    { name: 'CSS', link: 'https://www.hackerrank.com/certificates/6c91f2d100bd', image: 'assets/data-science-badge.png' }
  ];

  selectedIndex = 0; // Track selected item index
  selectedCert = this.certifications[this.selectedIndex]; // Default selection

  selectCert(cert: any, index: number) {
    this.selectedCert = cert;
    this.selectedIndex = index;
  }

  openLink(url: string, event: Event) {
    event.stopPropagation();
    window.open(url, '_blank');
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'ArrowDown' && this.selectedIndex < this.certifications.length - 1) {
      this.selectedIndex++;
    } else if (event.key === 'ArrowUp' && this.selectedIndex > 0) {
      this.selectedIndex--;
    } else if (event.key === 'Enter') {
      this.openLink(this.certifications[this.selectedIndex].link, event);
    }

    this.selectedCert = this.certifications[this.selectedIndex];
  }
}
