import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  FormsModule,
  Validators,
} from '@angular/forms';
import { MainService } from 'src/app/main.service';

@Component({
  selector: 'app-formpage',
  templateUrl: './formpage.component.html',
  styleUrls: ['./formpage.component.css'],
})
export class FormpageComponent implements OnInit {
  allUser: any;
  userNumber: any;
  userAge: any;

  phoneMask = [
    '(',
    /[1-9]/,
    /\d/,
    ')',
    '-',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    /\d/,
  ];


  constructor(private router: Router, private _service: MainService) {}
  ngOnInit(): void {
    this.getAllUser();
  }



  createuser = new FormGroup({
    userName: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.minLength(5)])
    ),
    uDob: new FormControl('', Validators.compose([Validators.required])),
    uGender: new FormControl('', Validators.compose([Validators.required])),
    uDesignation: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.minLength(5)])
    ),
    uCompanyName: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.minLength(5)])
    ),
    uEmail: new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern(
          '^[a-zA-Z]{1}[a-zA-Z0-9.-_]*@[a-zA-Z]{1}[a-zA-Z.-]*[a-zA-Z]{1}[.][a-zA-Z]{2,}$'
        ),
      ])
    ),
    uNumber: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.minLength(10)])
    ),
    uAddress: new FormControl('', Validators.compose([Validators.required])),
  });



  public getAllUser() {
    this.allUser = this._service.getuser();
  }

  selectedUser(reqValues: any): void {
    this.createuser.setValue({
      userName: reqValues.userName,
      uDob: reqValues.uDob,
      uGender: reqValues.uGender,
      uDesignation: reqValues.uDesignation,
      uCompanyName: reqValues.uCompanyName,
      uEmail: reqValues.uEmail,
      uNumber: reqValues.uNumber,
      uAddress: reqValues.uAddress,
    });
  }

  public selectUser(user: any): void {
    console.log(JSON.stringify(user));
    this.selectedUser = user;
  }

  public deleteUser(user: any): void {
    this._service.deleteuser(user);
  }


  errorMessage = {
    userName: [
      { type: 'required', message: 'User Name is required.' },
      { type: 'minLength', message: 'Minimum 5 char required.' },
    ],
    uDob: [{ type: 'required', message: 'Date of Birth is required.' }],
    uGender: [{ type: 'required', message: 'Gender is required.' }],
    uDesignation: [
      { type: 'required', message: 'Designation is required.' },
      { type: 'minLength', message: 'Minimum 5 char required.' },
    ],
    uCompanyName: [
      { type: 'required', message: 'Company Name is required.' },
      { type: 'minLength', message: 'Minimum 5 char required.' },
    ],
    uEmail: [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' },
    ],
    uNumber: [
      { type: 'required', message: 'Phone number is required.' },
      { type: 'minLength', message: 'Minimun 10 char required.' },
    ],
    uAddress: [
      { type: 'required', message: 'Address is required.' },
      { type: 'minLength', message: 'Minimun 10 char required.' },
    ],
  };

  onSubmit() {
    console.warn(this.createuser.value);
    this._service.createuser(this.createuser.value);
    this.getAllUser();
  }

  public getAge(): void {
    this.userAge = this.calculateAge(this.createuser.get('uDob')?.value);
    console.log(this.userAge);
    return this.userAge;
  }

  calculateAge(dateString: string | Date) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
}
