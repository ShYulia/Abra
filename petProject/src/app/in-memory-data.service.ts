import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Pet } from './pet';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const pets = [
      { id:1,
        name:"Finik",
        age: 8,
        type:'cat',
        color:'black',
      }

    ];
    return {pets};
  }
  constructor() { }
}