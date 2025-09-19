import { AbstractControl, FormArray, FormGroup, ValidationErrors } from '@angular/forms';
async function sleep() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 2500);
  });
}
export class UtilidadesFormulario {
  // Expresiones regulares
	static nombrePattern = '([a-zA-Z]+) ([a-zA-Z]+)';
	static emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
	static notOnlySpacesPattern = '^[a-zA-Z0-9]+$';


	static obtenerTextoError(errores: ValidationErrors) {
		for (const clave of Object.keys(errores)) {
			switch (clave) {
				case 'required':
					return 'Este campo es obligatorio';
				case 'minlength':
					return `Debe tener al menos ${errores['minlength'].requiredLength} caracteres.`;

				case 'min':
					return `El valor mínimo permitido es ${errores['min'].min}`;
				case 'email':
					return `El valor ingresado no es un correo electrónico`;

				case 'emailTaken':
					return `El correo electrónico ya está siendo usado por otro usuario`;

				case 'noStrider':
					return `No se puede usar el username de strider en la app`;

				case 'pattern':
					if (errores['pattern'].requiredPattern === UtilidadesFormulario.emailPattern) {
						return 'El valor ingresado no luce como un correo electrónico';
					}
					return 'Error de patrón contra expresión regular';
				default:
					return `Error de validación no controlado ${clave}`;
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

	static sonCamposIguales(campo1: string, campo2: string) {
  		return (formGroup: AbstractControl) => {
    		const valorCampo1 = formGroup.get(campo1)?.value;
    		const valorCampo2 = formGroup.get(campo2)?.value;

			return valorCampo1 === valorCampo2 ? null : { contrasenasNoCoinciden: true };
		};
		}

	static async validarContraServidor( control: AbstractControl): Promise<ValidationErrors | null> {
	console.log('Validando contra el servidor...');

	await sleep(); // 2 segundos y medio

	const valor = control.value;

	if (valor === 'hola@mundo.com') {
		return {
		correoYaExiste: true,
		};
	}

	return null;
	}

	static noEsStrider(control: AbstractControl): ValidationErrors | null {
	const valor = control.value;

	return valor === 'strider' ? { noEsStrider: true } : null;
	}
}

// Ejemplo: UtilidadesFormulario.esCampoValido()
