import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulaire-modification',
  templateUrl: './formulaire-modification.component.html',
  styleUrl: './formulaire-modification.component.css'
})
export class FormulaireModificationComponent {

  isSaved: boolean = false;

    
  constructor(private router: Router) {}

  // Fonction pour enregistrer les données
  saveData() {
    // Logique d'enregistrement des données ici
    // ...

    // Afficher le popup de succès
    this.isSaved = true;
  }
  // Fonction pour fermer le popup
  closePopup() {
    this.isSaved = false;
  }
  navigateToCartographie() {
    this.router.navigate(['/cartographie']); // Changez '/cartographie' par le chemin de votre route
  }
}
