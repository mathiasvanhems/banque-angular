import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BanqueDetailComponent } from './components/banque/banque-detail/banque-detail.component';
import { BanqueListeComponent } from './components/banque/banque-liste/banque-liste.component';

const routes: Routes = [
  { path: '', component: BanqueListeComponent },
  { path: 'banque', component: BanqueListeComponent },
  { path: 'banqueDetail/:id', component: BanqueDetailComponent },
  { path: 'operation', component: BanqueListeComponent },
  { path: 'type', component: BanqueListeComponent },
  { path: 'historique', component: BanqueListeComponent },
  { path: 'home', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
