import {AbstractControl, FormGroup} from "@angular/forms";

export class CustomValidators {

  /**
   * Invalid: mismatchedPasswords
   * @param passwordKey
   * @param confirmPasswordKey
   * @returns {(group:FormGroup)=>{[p: string]: any}}
   */
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

  /**
   * Invalid: emailPattern
   * @param control
   * @returns {any}
   */
  static emailPattern(control: AbstractControl): {[key: string]: any} {
    const email: string = control.value;
    const emailRegex = /.+@.+/;

    if ( !emailRegex.test(email) ) {
      return {
        emailPattern: true
      };
    }

    return null;
  }

}
