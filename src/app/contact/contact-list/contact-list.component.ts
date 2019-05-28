import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact';
import {ContactService} from '../services/contact.service';
import {Router} from '@angular/router';
import {ToolbarService} from '../../layout/toolbar/toolbar.service';
import {ToolbarOptions} from '../../layout/toolbar/toolbar-options';

@Component({
  selector: 'dtca-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];
  selectedContact: string;

  constructor(private contactService: ContactService, private router: Router,
              private toolbar: ToolbarService) {
    this.contacts = [];
    this.selectedContact = '';
  }

  ngOnInit() {
    this.toolbar.setToolbarOptions(new ToolbarOptions(false, 'Contacts',
      []));

    this.contactService.get().subscribe((response => {
      this.contacts = response;
      console.log(response);
    }));
  }

  onContactSelect(contact) {
    this.router.navigate(['/contacts/' + contact.id], {skipLocationChange: true});
  }

  onCreateNew() {
    this.router.navigate(['/contacts/new'], {skipLocationChange: true});
  }
}
