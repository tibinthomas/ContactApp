import { Person } from './../../shared/person.model';
import { PersonService } from '../../shared/person.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-ceprofile',
  templateUrl: './ceprofile.component.html',
  styleUrls: ['./ceprofile.component.css']
})
export class CEProfileComponent implements OnInit {

  editPersonId: number;
  editMode = false;
  ceProfileForm: FormGroup;

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


    if (this.editMode) {
      const per = this.personService.getSelectedPerson(this.editPersonId - 1);
      firstName = per.firstName;
      middleName = per.middleName;
      lastName = per.lastName;
      dateOfBirth = per.dateOfBirth;

    }

    this.ceProfileForm = new FormGroup({
      firstName: new FormControl(firstName, Validators.required),
      middleName: new FormControl(middleName, Validators.required),
      lastName: new FormControl(lastName, Validators.required),
      dateOfBirth: new FormControl(dateOfBirth, Validators.required),
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


