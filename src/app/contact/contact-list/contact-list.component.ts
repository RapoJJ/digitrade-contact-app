import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact';
import {ContactService} from '../services/contact.service';

@Component({
  selector: 'dtca-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];
  selectedContact: string;

  constructor(private contactService: ContactService) {
    this.contacts = [];
    this.selectedContact = '';
  }

  onContactSelected(contact: Contact): void {
    console.log(contact);
    this.selectedContact = contact.firstName + ' ' + contact.lastName;
  }

  ngOnInit() {
    /*this.contacts = this.contactService.get();
    console.log(this.contacts);*/
    this.contactService.get().subscribe((response => {
      this.contacts = response;
    }));
  }
}
