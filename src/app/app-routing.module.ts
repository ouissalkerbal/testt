import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CartographieComponent } from './cartographie/cartographie.component';
import { FormulaireAjoutComponent } from './formulaire-ajout/formulaire-ajout.component';
import { FormulaireModificationComponent } from './formulaire-modification/formulaire-modification.component';
import { SuppressionComponent } from './suppression/suppression.component';





const routes: Routes = [
  //{ path: '**', redirectTo: '/login', pathMatch: 'full' } ,// Redirige les routes non définies vers /login
  { path: '', component: HomeComponent },
  { path: 'cartographie', component: CartographieComponent },
  { path: 'formulaire-ajout', component: FormulaireAjoutComponent}, // Route pour le formulaire
  { path: 'formulaire-modification', component: FormulaireModificationComponent},
  { path: 'suppression', component: SuppressionComponent },
  { path: 'login', component: LoginComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
