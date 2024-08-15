import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showLogin = false; // Ajout de la propriété showLogin

  constructor(private router: Router) {}

  showCartographie() {
    this.showLogin = false; // Fermer le popup de connexion
    this.router.navigate(['/cartographie']);
  }

}

