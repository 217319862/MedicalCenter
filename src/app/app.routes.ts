import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from '../components/home-page/home-page';
import { Contacts } from '../components/contacts/contacts';
import { Contact } from '../components/contact/contact';
import{ NewContacts } from '../components/new-contacts/new-contacts';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'home', component: HomePage },
  { path: 'contacts', component: Contacts },
  { path: 'new-contact', component: NewContacts },

];



