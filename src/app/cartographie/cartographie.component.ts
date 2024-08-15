import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cartographie',
  templateUrl: './cartographie.component.html',
  styleUrls: ['./cartographie.component.css']
})
export class CartographieComponent {

  constructor(private router: Router) {}

  isFormVisible: boolean = false;
  isModificationVisible: boolean = false;
  isSuppressionVisible: boolean = false;

  navigateToAjoutForm(){
    this.router.navigate(['/formulaire-ajout']);
  }
  navigateToUpdateForm(){
    this.router.navigate(['/formulaire-modification']);
  }
  navigateToDeleteForm(){
    this.router.navigate(['/suppression']);
  }
  navigateToImportForm(){
    this.router.navigate(['/import']);
  }
  navigateToExportForm(){
    this.router.navigate(['/Export']);
  }
}
