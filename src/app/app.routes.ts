// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { InsurancesComponent } from './insurances/insurances.component';
import { BlogComponent } from './blog/blog.component';
import { ContactusComponent } from './contactus/contactus.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'insurances', component: InsurancesComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact-us', component: ContactusComponent },
];
