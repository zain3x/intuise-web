import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WebSanlogComponent } from './project/web-sanlog/web-sanlog.component';  // <– create this

export const routes: Routes = [
  { path: '', component: HomeComponent },           // root (intuise.com)

  // ➜ client-preview page (intuise.com/proj/web-sanlog)
  { path: 'proj/web-sanlog', component: WebSanlogComponent },

  // optional: wildcard fallback
  { path: '**', redirectTo: '' },
];
