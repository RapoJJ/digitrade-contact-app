import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactService} from '../services/contact.service';
import {ToolbarService} from '../../layout/toolbar/toolbar.service';
import {ToolbarOptions} from '../../layout/toolbar/toolbar-options';
import {ToolbarAction} from '../../layout/toolbar/toolbar-action';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'dtca-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  contact: Contact;
  contactId: number;
  editingEnabled: boolean;

  constructor(public snackBar: MatSnackBar, private router: Router, private route: ActivatedRoute,
              private contactService: ContactService, private toolbar: ToolbarService) {
    this.contact = new Contact();
    this.editingEnabled = false;
  }

  ngOnInit() {
    this.contactId = this.route.snapshot.params.id;
    let toolbarActions: ToolbarAction[];

    if (isNaN(this.contactId)) {
      this.editingEnabled = true;
      toolbarActions = [];
      console.log(this.contactId);
    } else {
      toolbarActions = [new ToolbarAction(this.onEdit.bind(this), 'edit')];

      this.contactService.getContactById(this.contactId).subscribe(response => {
        this.contact = response;
        console.log(this.contact);
      }, error => {
        console.error('Getting contact failed!');
        console.error(error);
        this.router.navigate(['/contacts']);
      });
    }
    this.toolbar.setToolbarOptions(new ToolbarOptions(true, 'Contact', toolbarActions));
  }

  onEdit() {
    let toolbarActions: ToolbarAction[];
    this.editingEnabled = !this.editingEnabled;

    if (this.editingEnabled === true) {
      toolbarActions = [
      new ToolbarAction(this.onDelete.bind(this), 'delete'),
      new ToolbarAction(this.onEdit.bind(this), 'edit')
        ];
    } else {
      toolbarActions = [new ToolbarAction(this.onEdit.bind(this), 'edit')];
    }
    this.toolbar.setToolbarOptions((new ToolbarOptions(true, 'Edit Contact', toolbarActions)));
  }

  onDelete() {
    this.editingEnabled = false;
    this.contactService.deleteContact(this.contact).subscribe(() => {
      this.router.navigate(['/contacts']);
    });
  }

  onSave(): void {
    if (isNaN(this.contactId)) { // Create contact
      this.editingEnabled = false;
      this.contactService.createContact(this.contact).subscribe(response => {
        console.log(response);
        this.router.navigate(['/contacts']);
        this.snackBar.open('Contact created!', 'Ok', {
          duration: 3000
        });
    });
    } else { // Edit contact
      this.editingEnabled = false;
      this.contactService.updateContact(this.contact).subscribe( response => {
        this.contact = response;
        this.snackBar.open('Contact modified!', 'Ok', {
          duration : 3000
        });
      });
    }

  }
}
