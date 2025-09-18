import { FormArray, FormGroup, ValidationErrors } from '@angular/forms';

export class UtilidadesFormulario {
  // Expresiones regulares

	static obtenerTextoError(errores: ValidationErrors) {
		for (const clave of Object.keys(errores)) {
		switch (clave) {
			case 'required':
			return 'Este campo es obligatorio';

			case 'minlength':
			return `Debe tener al menos ${errores['minlength'].requiredLength} caracteres.`;

			case 'min':
			return `El valor mínimo permitido es ${errores['min'].min}`;
		}
		}

		return null;
	}

	static esCampoValido(formulario: FormGroup, nombreCampo: string): boolean | null {
		return (
		!!formulario.controls[nombreCampo].errors &&
		formulario.controls[nombreCampo].touched
		);
	}

	static obtenerErrorCampo(formulario: FormGroup, nombreCampo: string): string | null {
		if (!formulario.controls[nombreCampo]) return null;

		const errores = formulario.controls[nombreCampo].errors ?? {};

		return UtilidadesFormulario.obtenerTextoError(errores);
	}

	static esCampoValidoEnArray(formArray: FormArray, indice: number) {
		return (
		formArray.controls[indice].errors &&
		formArray.controls[indice].touched
		);
	}

	static obtenerErrorCampoEnArray(
		formArray: FormArray,
		indice: number
	): string | null {
		if (formArray.controls.length === 0) return null;

		const errores = formArray.controls[indice].errors ?? {};

		return UtilidadesFormulario.obtenerTextoError(errores);
	}
}

// Ejemplo: UtilidadesFormulario.esCampoValido()
