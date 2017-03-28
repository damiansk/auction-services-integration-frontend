import {AbstractControl, FormGroup} from "@angular/forms";

export class CustomValidators {

  static matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup): {[key: string]: any} => {
      const password = group.controls[passwordKey];
      const confirmPassword = group.controls[confirmPasswordKey];

      if (password.value !== confirmPassword.value) {
        return {
          mismatchedPasswords: true
        };
      }

      return null;
    }
  }

  static emailValid(control: AbstractControl): {[key: string]: any} {
    const email: string = control.value;
    const emailRegex = /.+@.+/;

    if ( !emailRegex.test(email) ) {
      return {
        emailValid: true
      };
    }

    return null;
  }

  static passwordValid(control: AbstractControl): {[key: string]: any} {
    const password: string = control.value;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

    if ( !passwordRegex.test(password) ) {
      return {
        passwordValid: true
      }
    }

    return null;
  }

}
