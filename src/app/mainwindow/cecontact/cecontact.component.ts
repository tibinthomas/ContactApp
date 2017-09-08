import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-cecontact',
  templateUrl: './cecontact.component.html',
  styleUrls: ['./cecontact.component.css']
})
export class CEContactComponent implements OnInit {


  emailFormControl = new FormControl('', [
        Validators.required,
        Validators.pattern(EMAIL_REGEX)]
      );

  constructor() { }

  ngOnInit() {
  }

}
