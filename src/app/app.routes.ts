import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from '../components/home-page/home-page';
import { Contacts } from '../components/contacts/contacts';
import { Contact } from '../components/contact/contact';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'home', component: HomePage },
  { path: 'contacts', component: Contacts },
  { path: 'contact', component: Contact },
];



// import { LoginComponent } from './login.component';
// import { ProductsComponent } from './products.component';

// export const appRoutes: Routes = [
//   { path: 'login', component: LoginComponent },
//   { path: 'products', component: ProductsComponent },
//   { path: ' ** ', redirectTo: '' }
// ]
