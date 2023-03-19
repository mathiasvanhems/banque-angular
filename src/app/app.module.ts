import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BanqueListeComponent } from './components/banque/banque-liste/banque-liste.component';
import { BanqueDetailComponent } from './components/banque/banque-detail/banque-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BanqueListeComponent,
    BanqueDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
