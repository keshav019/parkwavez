import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ProviderDetails, Role } from '../../model/ProviderDetails';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDetailsService } from '../../service/user-details.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  editing = false;
  providerId = 'ohndoe311235';
  providerForm!: FormGroup;
  provider!: ProviderDetails;
  constructor(
    private location: Location,
    private fb: FormBuilder,
    private providerService: UserDetailsService
  ) {
    this.createForm();
  }
  createForm() {
    this.providerForm = this.fb.group({
      userId: [this.provider?.userId || '', Validators.required], // Provide a default value or an empty string if the property is undefined.
      phone: ['', Validators.required],
      userName: [this.provider?.userName || '', Validators.required], // Provide a default value or an empty string if the property is undefined.
      email: [
        this.provider?.email || '',
        [Validators.required, Validators.email],
      ], // Provide a default value or an empty string if the property is undefined.
      role: [this.provider?.role || '', Validators.required], // Provide a default value or an appropriate default for 'role' if the property is undefined.
      address: this.fb.group({
        street: [this.provider?.address?.street || '', Validators.required], // Provide a default value or an empty string if the property is undefined.
        city: [this.provider?.address?.city || '', Validators.required], // Provide a default value or an empty string if the property is undefined.
        zip: [
          this.provider?.address?.zip || '',
          [Validators.required, Validators.pattern(/^\d+$/)],
        ], // Provide a default value or an empty string if the property is undefined.
        state: [this.provider?.address?.state || '', Validators.required], // Provide a default value or an empty string if the property is undefined.
      }),
    });
  }

  ngOnInit(): void {
    this.getProvider();
  }

  goBack(): void {
    this.location.back();
  }

  editToggle() {
    if (!this.editing) {
      this.createForm();
    }
    this.editing = !this.editing;
  }
  getProvider() {
    this.providerService.getUserDetails(this.providerId).subscribe(
      (user: ProviderDetails) => {
        this.provider = user;
      },
      (err: any) => {
        console.log(err.message);
      }
    );
  }
  save() {
    this.providerService.updateUserDetails(this.providerForm.value).subscribe(
      (user: ProviderDetails) => {
        this.provider = user;
        this.editToggle();
      },
      (err: any) => {
        console.log(err.message);
      }
    );
  }
}
