// import { Subject } from 'rxjs/Rx';
import { Person } from './person.model';
// mport { Injectable } from '@angular/core';

// @Injectable()
export class PersonService {

  // personChanged = new Subject<Person[]>();

  constructor() { }

  public persons: Person[] = [
    {
      id: 1,
      firstName: 'Tibin',
      middleName: 'Punnoose',
      lastName: 'Thomas',
      dateOfBirth: '05-07-1993',
      age: 24,
      address: 'Chavinikamannil H',
      profilePic: 'Pic',
      phoneNo1: 9446303768,
      phoneNo2: 8075661120,
      email: 'tibinthomas@outlook.com',
      alternateAddress: 'tibinthomas1993@gmail.com'
    },

    {
      id: 2,
      firstName: 'Tibi',
      lastName: 'Thomas',
      dateOfBirth: '05-07-1993',
      age: 24,
      address: 'Chavinikamannil H',
      profilePic: 'Pic',
      phoneNo1: 9446303768,
      phoneNo2: 8075661120,
      email: 'tibinthomas@outlook.com',
      alternateAddress: 'tibinthomas1993@gmail.com'
    },

    {
      id: 3,
      firstName: 'Tib',
      lastName: 'Thomas',
      dateOfBirth: '05-07-1993',
      age: 24,
      address: 'Chavinikamannil H',
      profilePic: 'Pic',
      phoneNo1: 9446303768,
      phoneNo2: 8075661120,
      email: 'tibinthomas@outlook.com',
      alternateAddress: 'tibinthomas1993@gmail.com'
    }
];

getPersons() {
  return this.persons.slice();
}

getSelectedPerson(index: number) {
  return this.persons[index];
}

updatePerson(index: number, newPerson: Person) {
  this.persons[index] = newPerson;
  // this.personChanged.next(this.persons.slice());
}

deletePerson(index: number) {
  this.persons.splice(index, 1);
  // this.personChanged.next(this.persons.slice());
}

addPerson(newPerson: Person) {
  this.persons.push(newPerson);
}

}
