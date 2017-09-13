import { Person } from './../../shared/person.model';
import { PersonService } from './../../shared/person.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-cecontact',
  templateUrl: './cecontact.component.html',
  styleUrls: ['./cecontact.component.css']
})
export class CEContactComponent implements OnInit {

  editPersonId: number;
  editMode = false;
  ceContactForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private personService: PersonService,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe((param: Params) => {
        this.editPersonId = +param['id'];
        this.editMode = param['id'] != null;
        this.initForm();
      });
  }

  private initForm() {
    let firstName = '';
    let middleName = '';
    let lastName = '';
    let dateOfBirth = '';
    let age;
    let address = '';
    let altAddress = '';
    let phNo1;
    let phNo2;
    let email = '';
    let imageUpload = '';

    if (this.editMode) {
      const per = this.personService.getSelectedPerson(this.editPersonId);
       firstName = per.firstName;
       middleName = per.middleName;
       lastName = per.lastName;
       dateOfBirth = per.dateOfBirth;
       age = per.age;
       address = per.address;
       altAddress = per.alternateAddress;
       phNo1 = per.phoneNo1;
       phNo2 = per.phoneNo2;
       email = per.email;
       imageUpload = per.imageLink;
    }

    this.ceContactForm = new FormGroup({
      firstName: new FormControl(firstName, Validators.required),
      middleNam: new FormControl(middleName, Validators.required),
      lastName: new FormControl(lastName, Validators.required),
      dateOfBirth: new FormControl(dateOfBirth, Validators.required),
      age: new FormControl(age, Validators.required),
      address: new FormControl(address, Validators.required),
      altAddress: new FormControl(altAddress, Validators.required),
      phNo1: new FormControl(phNo1, Validators.required),
      phNo2: new FormControl(phNo2, Validators.required),
      email: new FormControl(email, Validators.required),
      imageUpload: new FormControl(imageUpload, Validators.required),
    });
  }

  onSubmit(newPerson: Person) {
    if (!this.editMode) {
      this.personService.addPerson(newPerson);
    } else {
      this.personService.updatePerson(this.editPersonId - 1, newPerson);
    }
    this.router.navigate(['/v-contacts']);
  }

}
