import { Component, OnInit } from '@angular/core';

//
/* import { ProfileService } from '../profile_service';
import { Model } from './contact-form';
import { NgForm } from '@angular/forms';
import  './../../../assets/js/smtp.js '; 
declare let Email: any; */


//

@Component({
  selector: 'app-contanct',
  templateUrl: './contanct.component.html',
  styleUrls: ['./contanct.component.css']
})
export class ContanctComponent implements OnInit {
  /* model: Model = new Model() */
  constructor() { }

  ngOnInit(): void {
  }
//
/* onSubmit(f: NgForm) {
 
  Email.send({
                Host : 'smtp.elasticemail.com',
               Username : 'vlaja432@gmail.com', 
               Password : '',          //Enter your password here
               To : 'vlaja432@gmail.com',
               From : `vlaja432@gmail.com`,
               Subject : this.model.subject,
              Body : `
                     <i>This is sent as a feedback from my resume page.</i> <br/>
                     <b>Name: 
                    </b>${this.model.name} <br />
                     <b>Email: </b>${this.model.email}<br />
                    <b>Subject: 
                    </b>${this.model.subject}<br />
                    <b>Message:</b> <br /> 
                    ${this.model.message} <br> 
                    <br> <b>~End of Message.~</b> `
  }).then( 
    (               message: any) => {alert(message); f.resetForm(); } 
               );
      } */
//
}
