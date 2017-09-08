import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ceprofile',
  templateUrl: './ceprofile.component.html',
  styleUrls: ['./ceprofile.component.css']
})
export class CEProfileComponent implements OnInit {

  rForm: FormGroup;
  post: any;                     // A property for our submitted form
  description = '';
  name = '';
  constructor(private fb: FormBuilder) {

  this.rForm = fb.group({
    'name' : [null, Validators.required],
    'description' : [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
    'validate' : ''
  });

}

addPost(post) {
  this.description = post.description;
  this.name = post.name;
}


  ngOnInit() {

  }

}