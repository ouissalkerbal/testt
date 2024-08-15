import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'; // Assurez-vous d'importer ce module
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CartographieComponent } from './cartographie/cartographie.component';
import { FormulaireAjoutComponent } from './formulaire-ajout/formulaire-ajout.component';
import { FormulaireModificationComponent } from './formulaire-modification/formulaire-modification.component';
import { SuppressionComponent } from './suppression/suppression.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CartographieComponent,
    FormulaireAjoutComponent,
    FormulaireModificationComponent,
    SuppressionComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule // Utilisez AppRoutingModule pour les routes
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


