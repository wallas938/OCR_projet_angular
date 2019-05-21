import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilService } from './services/appareil.service';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './services/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from './services/auth-gard.service';

const appRoutes: Routes = [
  { path: 'appareils', canActivate: [AuthGuard] ,component: AppareilViewComponent },
  { path: 'appareils/:id', canActivate: [AuthGuard],component: SingleAppareilComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: AppareilViewComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
];
@NgModule({
  declarations: [
    AppComponent, //Controller 
    AppareilComponent, // Composants chargés dans appareilsView 
    AppareilViewComponent, // Composants qui contient tous les appareils 
    AuthComponent, // Composant chargé de gerer l'authentification 
    SingleAppareilComponent, // Composant chargé d'afficher un seul composant a la fois
    FourOhFourComponent, // Composant chargé d'afficher un page 404 en cas de requete inexistante 
  ],
  imports: [
    BrowserModule,
    FormsModule, // Module servant au "two-way-binding" on l'utilise pour changer la valeur d'un input en direct 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
