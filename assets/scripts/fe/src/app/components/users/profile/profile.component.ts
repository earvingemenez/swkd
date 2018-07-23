import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { UserForm } from '../../../commons/structs/user.structs';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private Form;

  constructor(
    private fb  : FormBuilder
  ) { }

  ngOnInit () {
    this.Form = new UserForm({
      'email': 'asds@asdsadas',
      'first_name': 'asdsadas',
      'last_name': 'asdasda',
      'birthdate': '2011-11-11',
      'image': null
    });
  }

  update () {

  }

}
