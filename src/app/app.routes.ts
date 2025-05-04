import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'intro', loadComponent: () => import('./intro-screen/intro-screen.component').then(m => m.IntroScreenComponent) },
    { path: 'home', loadComponent: () => import('./retro-screen/retro-screen.component').then(m => m.RetroScreenComponent) },
    { path: 'about', loadComponent: () => import('./bio/bio.component').then(m => m.BioComponent) },
    { path: 'certs', loadComponent: () => import('./certifications/certifications.component').then(m => m.CertificationsComponent) },
    { path: 'projects', loadComponent: () => import('./projects/projects.component').then(m => m.ProjectsComponent) },
    { path: 'contact', loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent) },
    { path: '**', redirectTo: 'home' }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}
