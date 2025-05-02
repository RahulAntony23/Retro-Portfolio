import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Import this

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule], // ✅ Add this
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent {
  certifications = [
    { image: 'assets/cert1.png', title: 'AWS Certified Developer' },
    { image: 'assets/cert2.png', title: 'Google Cloud Engineer' },
    { image: 'assets/cert3.png', title: 'Microsoft Azure Associate' },
    { image: 'assets/cert4.png', title: 'Oracle Java SE 11' },
    { image: 'assets/cert5.png', title: 'React.js Developer' },
    { image: 'assets/cert6.png', title: 'Flutter Expert' },
    { image: 'assets/cert7.png', title: 'Kubernetes Administrator' },
    { image: 'assets/cert8.png', title: 'Data Science with Python' }
  ];
}
