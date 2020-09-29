import { Component, OnInit } from '@angular/core';
import { AwsService } from '../aws.service';
import { IContact } from '../models/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public contact: IContact;
  constructor(private aws: AwsService) { }

  ngOnInit() {
    this.contact = {
      email : '',
      name : '',
      phone : null,
      subject : ''
    };
    this.aws.getcontacts()
    .subscribe((data: any) => {
      console.log(data);
    });
  }

  public onSubmit(): void {
    console.log(this.contact);
    this.aws.addContact(this.contact).subscribe((contact: any) => {
      console.log(contact);
    });
   }

}
