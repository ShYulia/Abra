import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetFormComponent } from './pet-form/pet-form.component';
import { PetsComponent } from './pets/pets.component';

const routes: Routes = [
  {path:'pets', component: PetsComponent},
  {path:'create', component: PetFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
