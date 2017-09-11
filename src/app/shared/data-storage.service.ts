import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class DataStorageService {

  constructor(private http: Http) { }

  saveData() {
    // return this.http.put();
  }

  retriveData() {
    // this.http.get()
  }

}
