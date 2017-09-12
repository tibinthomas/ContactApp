import { computeMsgId } from '@angular/compiler/src/i18n/digest';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PersonService } from './../../shared/person.service';
import { Person } from './../../shared/person.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vprofile',
  templateUrl: './vprofile.component.html',
  styleUrls: ['./vprofile.component.css']
})
export class VProfileComponent implements OnInit {

  constructor(private personService: PersonService, private route: ActivatedRoute, private router: Router) { }

  selectedPersonId: number;
  selectedPerson: Person;

  ngOnInit() {

    this.route.params
      .subscribe((params: Params) => { this.selectedPersonId = +params['id'];
                                       this.selectedPerson = this.personService.getSelectedPerson(this.selectedPersonId - 1);
                                      });
  }

}
