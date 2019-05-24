import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactService} from '../services/contact.service';
import {ToolbarService} from '../../layout/toolbar/toolbar.service';
import {ToolbarOptions} from '../../layout/toolbar/toolbar-options';
import {ToolbarAction} from '../../layout/toolbar/toolbar-action';

@Component({
  selector: 'dtca-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  contact: Contact;
  contactId: string;
  editingEnabled: boolean;

  constructor(private router: Router, private route: ActivatedRoute,
              private contactService: ContactService, private toolbar: ToolbarService) {
    this.contact = new Contact();
    this.editingEnabled = false;
  }

  ngOnInit() {
    this.contactId = this.route.snapshot.params.id;
    /*this.toolbar.setToolbarOptions(new ToolbarOptions(true, 'Contact',
      [new ToolbarAction(this.onEdit(), 'edit')]));*/
    let toolbarActions: ToolbarAction[];

    if (this.contactId == null) {
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
    console.log('TODO');
    let toolbarActions: ToolbarAction[];
    this.editingEnabled = !this.editingEnabled;

    if (this.editingEnabled == true) {
      console.log('Edit mode enabled');
    }

  }
}
