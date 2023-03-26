import { HttpClientModule } from '@angular/common/http';
import { NgModule, LOCALE_ID  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { registerLocaleData,DatePipe } from '@angular/common';


import localeFr from '@angular/common/locales/fr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BanqueListeComponent } from './components/banque/banque-liste/banque-liste.component';
import { BanqueDetailComponent } from './components/banque/banque-detail/banque-detail.component';
import { HistoriqueDetailComponent } from './components/historique/historique-detail/historique-detail.component';
import { HistoriqueListeComponent } from './components/historique/historique-liste/historique-liste.component';
import { NgChartsModule } from 'ng2-charts';
import { RouteReuseStrategy } from '@angular/router';
import { AppRouteReuseStrategy } from './AppRouteReuseStrategy';
import { TypeOperationListeComponent } from './components/type-operation/type-operation-liste/type-operation-liste.component';
import { TypeOperationDetailComponent } from './components/type-operation/type-operation-detail/type-operation-detail.component';
import { OperationListeComponent } from './components/operation/operation-liste/operation-liste.component';
import { OperationDetailComponent } from './components/operation/operation-detail/operation-detail.component';
import { FormatNumberPipe } from './pipe/format-number.pipe';
import { FormatStringPipe } from './pipe/format-string.pipe';





registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    BanqueListeComponent,
    BanqueDetailComponent,
    HistoriqueListeComponent,
    HistoriqueDetailComponent,
    TypeOperationListeComponent,
    TypeOperationDetailComponent,
    OperationListeComponent,
    OperationDetailComponent,
    FormatNumberPipe,
    FormatStringPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgChartsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'fr-FR'},
  DatePipe,
  FormatNumberPipe,
  FormatStringPipe,
  { provide: RouteReuseStrategy, useClass: AppRouteReuseStrategy}],
  //
  bootstrap: [AppComponent]
})
export class AppModule { }
