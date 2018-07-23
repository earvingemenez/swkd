import * as _ from 'lodash';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';


// export class UserForm1 {
//   form;
  
//   constructor (
//     private data: Object
//   ) {
//     this.form = new FormBuilder;
//     this.form = this.form.group(this.getFields());

//     //var x = this.getFields().map(function (v, k) { return [0, v]; });
//     // console.log(x);

//     //var x = _.mapValues(this.getFields(), function (v, k) { return [k, v]; });
//     var x = _.mapValues(this.getFields(), (val, key) => { return [val, key]});
//     console.log(x);
//   }

//   getFields () {
//     return {
//       email : ['asdasdas', [Validators.required, Validators.email]],
//       first_name : [null, Validators.required],
//       last_name : [null, Validators.required],
//       birthdate : [null, Validators.required],
//       image : [null]
//     };
//   }

//   fields () {
//     return Object.keys(this.getFields());
//   }

//   valid (f) {
//     return !(!this.form.get(f).valid && this.form.get(f).touched);
//   }

//   hasError(f, e) {
//     return this.form.get(f).hasError(e) && this.form.get(f).touched;
//   }

// }


class FormFields {
  fields = {};

  CharField (validators) {
    //return {type: 'char', validators: validators};
    console.log(this.name, "field name");
    return validators;
  }
}



export class UserForm {
  form;
  formfields;

  constructor (
    private data: Object
  ) {
    let fb = new FormBuilder;
    this.form = fb.group(this.__initfields__());

    console.log(this.email());

  }

  // FIELD LIST
  // @format: { name : [validators1, validators2, ...] }
  private fields = {
    email      : [Validators.required, Validators.email],
    first_name : [Validators.required],
    last_name  : [Validators.required],
    birthdate  : [Validators.required],
    image      : []
  }

  
  email = new FormFields().CharField([Validators.required]);

  /* PARSE THE FORM FIELDS
   * @desc : parse the form fields for form initialization.
   */
  __initfields__ () {
    return _.mapValues(this.fields, (val, key) => { return [this.data[key], val]; });
  }

  valid (f) {
    return !(!this.form.get(f).valid && this.form.get(f).touched);
  }

  hasError(f, e) {
    return this.form.get(f).hasError(e) && this.form.get(f).touched;
  }
}