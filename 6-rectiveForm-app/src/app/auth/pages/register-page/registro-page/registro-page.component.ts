import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UtilidadesFormulario } from '../../../../utils/form-utils';

@Component({
  selector: 'app-registro-page',
  imports: [JsonPipe,ReactiveFormsModule],
  templateUrl: './registro-page.component.html',
})
export class RegistroPageComponent {
	fb = inject(FormBuilder);

	formUtils = UtilidadesFormulario;

	myForm = this.fb.group(
		{
		name: [ '', [Validators.required, Validators.pattern(UtilidadesFormulario.nombrePattern)]],
		email: [
			'',
			[Validators.required, Validators.pattern(UtilidadesFormulario.emailPattern)],
			[UtilidadesFormulario.validarContraServidor],
		],
		username: [
			'',
			[
			Validators.required,//
			Validators.minLength(6),//
			Validators.pattern(UtilidadesFormulario.notOnlySpacesPattern),
			UtilidadesFormulario.noEsStrider,
			],
		],
		password: ['', [Validators.required, Validators.minLength(6)]],
		password2: ['', Validators.required],
		},
		{
		validators: [UtilidadesFormulario.sonCamposIguales('password', 'password2')],
		}
	);

	onSubmit() {
		this.myForm.markAllAsTouched();
		console.log(this.myForm.value);
	}
}
