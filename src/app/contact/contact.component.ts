import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AwsService } from '../aws.service';
import { IContact } from '../models/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public contact: IContact;
  constructor(private aws: AwsService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.contact = {
      email : '',
      name : '',
      phone : null,
      subject : '',
      purpose : ''
    };
    this.aws.getcontacts()
    .subscribe((data: IContact) => {
      console.log(data);
    });
  }

  public onSubmit(): void {
    if (this.contact.email !== '' && this.contact.name !== '') {
    this.aws.addContact(this.contact).subscribe((contact: any) => {
      this.snackBar.open('Thanks For Writing!!!. Will get back soon.');
      this.contact =  {
        email : '',
        name : '',
        phone : null,
        subject : '',
        purpose : ''
      };
    });
   } else {
    this.snackBar.open('We need your email to contact.');
  }
  }

}
