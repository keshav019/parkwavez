import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  registrationSuccess = false; // Add a flag to track registration success

  constructor(
    private formBuilder: FormBuilder,
    private registrationService: RegistrationService
  ) {}

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      username: [''],
      emailId: [''],
      password: [''],
      role: ['CUSTOMER']
    });
  }

  onSubmit() {
    if (this.registrationForm.invalid) {
      return;
    }

    const registrationData = this.registrationForm.value;

    this.registrationService.registerUser(registrationData)
      .subscribe(
        (response) => {
          if (response.status === 200) {
            // Registration successful
            this.registrationSuccess = true;
            // Optionally, you can reset the form or perform any other actions here
          } else {
            // Handle registration error
            this.registrationSuccess = false;
          }
        },
        (error) => {
          // Handle registration error
          this.registrationSuccess = false;
        }
      );
  }
}