import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { UtilidadesFormulario } from '../../../utils/form-utils';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches-page',
  imports: [JsonPipe,ReactiveFormsModule],
  templateUrl: './switches-page.component.html',
})

export class SwitchesPageComponent {
  private fb = inject(FormBuilder);
  formUtils = UtilidadesFormulario;

  myForm: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
	//notifications: [false],
    wantNotifications: [true],
    termAndConditions: [false, Validators.requiredTrue],
  });

  onSubmit() {
    this.myForm.markAllAsTouched();

    console.log(this.myForm.value);
  }
}