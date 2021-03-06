import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public authService: AuthService, private router: Router) {
    this.authService.init();
  }

  onLogout() {
    this.authService.signOut()
      .subscribe(
        () => this.router.navigate(['/auth/signin']),
      );
  }
}
