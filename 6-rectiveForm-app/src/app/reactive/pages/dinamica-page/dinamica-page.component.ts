import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';

import { UtilidadesFormulario } from '../../../utils/form-utils';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './dinamica-page.component.html',
})
export class DinamicaPageComponent {
  private fb = inject(FormBuilder);
  formUtils = UtilidadesFormulario;


  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array(
      [
        ['Metal Gear', Validators.required],
        ['Death Stranding', Validators.required],
      ],
      Validators.minLength(2)
    ),
  });

  newFavorite = new FormControl('', Validators.required);
  // newFavorite = this.fb.control([])

  get favoriteGames() {
    return this.myForm.get('favoriteGames') as FormArray;
  }

  onAddToFavorites() {
    if (this.newFavorite.invalid) return;
    const newGame = this.newFavorite.value;

    this.favoriteGames.push(this.fb.control(newGame, Validators.required));

    this.newFavorite.reset();
  }

  onDeleteFavorite(index: number) {
    this.favoriteGames.removeAt(index);
  }

  onSubmit() {
    console.log(this.myForm.value);
    this.myForm.markAllAsTouched();
  }
}