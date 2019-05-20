import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact';

@Component({
  selector: 'dtca-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];

  constructor() {
    this.contacts = [];
  }

  onContactSelected(contact: Contact): void {
    console.log(contact);
    alert(contact.firstName);
  }

  ngOnInit() {
    this.contacts = [
      new Contact('Aku', 'Ankka', '313'),
      new Contact('Roope', 'Ankka', '999'),
      new Contact('Taavi', 'Ankka', '123')
    ];
    console.log(this.contacts);
  }
}
