import { Component, inject } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormBuilder,FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UtilidadesFormulario } from '../../../utils/form-utils';

@Component({
	selector: 'app-basic-page',
	imports: [JsonPipe,ReactiveFormsModule],
	templateUrl: './basic-page.component.html',
})
export class BasicPageComponent {


	private fb = inject(FormBuilder);
	
	formUtils = UtilidadesFormulario;

	
	myForm: FormGroup = this.fb.group({
		nombre: ['', [Validators.required, Validators.minLength(3)]],
		precio: [0, [Validators.required, Validators.min(10)]],
		existencias: [0, [Validators.required, Validators.min(0)]],
	});

  // myForm2 = new FormGroup({
  //   nombre: new FormControl('', [], []),
  //   precio: new FormControl(0),
  //   existencias: new FormControl(0),
  // });

  // isValidField(fieldName: string): boolean | null {
  //   return (
  //     this.myForm.controls[fieldName].errors &&
  //     this.myForm.controls[fieldName].touched
  //   );
  // }

  // getFieldError(fieldName: string): string | null {
  //   if (!this.myForm.controls[fieldName]) return null;

  //   const errors = this.myForm.controls[fieldName].errors ?? {};

  //   for (const key of Object.keys(errors)) {
  //     switch (key) {
  //       case 'required':
  //         return 'Este campo es requerido';

  //       case 'minlength':
  //         return `Mínimo de ${errors['minlength'].requiredLength} caracteres.`;

  //       case 'min':
  //         return `Valor mínimo de ${errors['min'].min}`;
  //     }
  //   }

  //   return null;
  // }


	guardar() {
		if (this.myForm.invalid) {
			//toque todos los campos para que se muestren los errores
			this.myForm.markAllAsTouched();
			return;
		} 
		console.log(this.myForm.value);

		this.myForm.reset({
			precio: 0,
			existencias: 0,
		});
  	}

}
