import { HttpClientModule } from '@angular/common/http';
import { NgModule, LOCALE_ID  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { registerLocaleData,DatePipe } from '@angular/common';

import localeFr from '@angular/common/locales/fr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BanqueListeComponent } from './components/banque/banque-liste/banque-liste.component';
import { BanqueDetailComponent } from './components/banque/banque-detail/banque-detail.component';
import { HistoriqueDetailComponent } from './components/historique/historique-detail/historique-detail.component';
import { HistoriqueListeComponent } from './components/historique/historique-liste/historique-liste.component';
import { NgChartsModule } from 'ng2-charts';



registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    BanqueListeComponent,
    BanqueDetailComponent,
    HistoriqueListeComponent,
    HistoriqueDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgChartsModule,
  ],
  providers: [{provide: LOCALE_ID, useValue: 'fr-FR'},DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
