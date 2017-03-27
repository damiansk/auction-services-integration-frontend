import {FormGroup} from "@angular/forms";

export class CustomValidators {

  /**
   * Invaild: mismatchedPasswords
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

}
