import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ProviderDetails, Role } from '../../model/ProviderDetails';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  editing = false;
  providerForm: FormGroup;
  constructor(private location: Location, private fb: FormBuilder) {
    this.providerForm = this.fb.group({
      userId: [this.provider.userId, Validators.required],
      phone: ['', Validators.required],
      userName: [this.provider.userName, Validators.required],
      email: [this.provider.email, [Validators.required, Validators.email]],
      role: [this.provider.role, Validators.required],
      address: this.fb.group({
        street: [this.provider.address.street, Validators.required],
        city: [this.provider.address.city, Validators.required],
        zip: [
          this.provider.address.zip,
          [Validators.required, Validators.pattern(/^\d+$/)],
        ],
        state: [this.provider.address.state, Validators.required],
      }),
    });
  }

  goBack(): void {
    this.location.back();
  }

  provider: ProviderDetails = {
    userId: '12345',
    userName: 'JohnDoe',
    email: 'johndoe@example.com',
    role: Role.PROVIDER,
    address: {
      street: '123 Main St',
      city: 'Example City',
      zip: 12345,
      state: 'CA',
    },
  };
  editToggle() {
    this.editing = !this.editing;
  }
  save() {}
}
