import { PersonService } from './../../shared/person.service';
import { Person } from './../../shared/person.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vcontact',
  templateUrl: './vcontact.component.html',
  styleUrls: ['./vcontact.component.css']
})
export class VContactComponent implements OnInit {

  constructor(private personService: PersonService) { }

  persons: Person[] = this.personService.persons;
  selectedPerson: Person;


  onRightClick(event, selPer) {
            this.selectedPerson = selPer;
        }

  ngOnInit() {

  }

}
