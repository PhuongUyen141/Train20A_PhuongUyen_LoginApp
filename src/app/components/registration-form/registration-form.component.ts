import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  constructor(public authService:AuthService, private router:Router) { }

  public nameGroup = new FormGroup({
    firstNameControl: new FormControl('', Validators.required),
    lastNameControl : new FormControl('', Validators.required),
  });

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.nameGroup.value);
  }

}
