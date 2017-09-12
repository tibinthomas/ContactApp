import { Person } from './../shared/person.model';
import { PersonService } from './../shared/person.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(private personService: PersonService) { }

  user: Person = this.personService.getSelectedPerson(0);

  ngOnInit() {
  }

}
