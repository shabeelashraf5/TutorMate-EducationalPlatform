import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const passwordMatchValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const password = control.get('password')?.value;
  const repeatPassword = control.get('repeat_password')?.value;

  return password === repeatPassword ? null : { passwordMismatch: true };
};
