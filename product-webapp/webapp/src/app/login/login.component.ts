import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  onSubmit() {
     console.log('Form submitted');
    this.authService.login(this.username, this.password).subscribe(
      response => {
        if (response.user.authorities[0].authority === 'CUSTOMER') {
          // User authority, navigate to user page
          this.authService.setToken(response.jwt);
          this.router.navigate(['/customer']);
        } else if (response.user.authorities[0].authority === 'PROVIDER') {
          // Admin authority, navigate to admin page
          this.authService.setToken(response.jwt);
          this.router.navigate(['/provider']);
        }
      },
      error => {
        // Handle login error (e.g., display an error message)
        console.error('Login error:', error);
      }
    );
  }
}
