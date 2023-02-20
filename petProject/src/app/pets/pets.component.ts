import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet';
import { PetApiService } from '../pet-api.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  pets: Pet[] = [];

  constructor(private petApi: PetApiService){}
  ngOnInit(): void {
    
   this.getPets()
  }
getPets(): void{
  this.petApi.getPets().subscribe(res => {
    console.log(res)
    this.pets = res
  })
}

}
