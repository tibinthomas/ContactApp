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

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => { this.selectedPersonId = params['id']; });
  }

}
