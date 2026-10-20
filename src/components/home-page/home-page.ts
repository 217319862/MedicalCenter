import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.css']
})
export class HomePage {
  currentSection: string = '';

  constructor(private router: Router) { }

  // showSection(section: string) {
  //   this.currentSection = section;
  // }
  goToContacts()  {
    this.router.navigate(['/contacts']);
  }
  // goToSingleContacts()  {
  //   this.router.navigate(['/single-contact']);}
    goToNewCContact()  {
      this.router.navigate(['/new-contact']);}
}