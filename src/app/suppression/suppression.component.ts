import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suppression',
  templateUrl: './suppression.component.html',
  styleUrls: ['./suppression.component.css']
})
export class SuppressionComponent {
  searchCode: string = '';
  showConfirmationPopup: boolean = false;
  showStatusPopup: boolean = false;
  statusMessage: string = '';
  
  constructor(private router: Router) {}

  openConfirmationPopup() {
    this.showConfirmationPopup = true;
  }

  confirmDeletion() {
    // Implémentez ici la logique de suppression
    this.statusMessage = 'Supprimé avec succès!';
    this.showConfirmationPopup = false;
    this.showStatusPopup = true;
  }

  cancelDeletion() {
    this.statusMessage = 'Suppression annulée';
    this.showConfirmationPopup = false;
    this.showStatusPopup = true;
  }

  closeStatusPopup() {
    this.showStatusPopup = false;
  }

  navigateToCartographie() {
    this.router.navigate(['/cartographie']); // Changez '/cartographie' par le chemin de votre route
  }
}
