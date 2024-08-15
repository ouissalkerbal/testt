import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-formulaire-ajout',
  templateUrl: './formulaire-ajout.component.html',
  styleUrl: './formulaire-ajout.component.css'
})
export class FormulaireAjoutComponent {
  
  constructor(private router: Router) {}

  isSaved: boolean = false;

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


