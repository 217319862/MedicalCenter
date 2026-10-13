import { Component } from '@angular/core';
import { Contact } from '../contact/contact';

@Component({
  imports: [Contact],
  selector: 'app-contacts',
  styleUrl: './contacts.css',
  templateUrl: './contacts.html',
})
export class Contacts {


  contacts: Contact[] = [];
addContact(){
  
}
}
