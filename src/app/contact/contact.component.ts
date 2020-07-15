import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

contacts: [];

  constructor(private contactservice : ContactService) { }

  ngOnInit(): void {

     this.contactservice.getcontacts().subscribe((data)=>{ 
      this.contacts = this.contacts['data'];
      console.log(data);
    });
  }

}
