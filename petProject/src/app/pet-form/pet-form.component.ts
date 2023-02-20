import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PetApiService } from '../pet-api.service';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.css'],
})
export class PetFormComponent {
  message: string = '';
  type = ['Dog', 'Cat', 'Horse', 'Other'];
  petForm = new FormGroup({
    name: new FormControl<string>('', [
      Validators.required,
      Validators.maxLength(25),
    ]),
    age: new FormControl<number>(1, [Validators.required, Validators.min(0)]),
    type: new FormControl<string>('', [Validators.required]),
    color: new FormControl<string>('', [Validators.required]),
  });

  constructor(private petApi: PetApiService) {}

  submit(): void {
    console.log(this.petForm.valid);
    if (this.petForm.valid) {
      
      const data = this.petForm.value;

      this.petApi.addPet(data).subscribe((res) => {
      this.petForm.reset()
      });
    } else {this.message = 'The form is not valid!'
    ;}
  }
}
