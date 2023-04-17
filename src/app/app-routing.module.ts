import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BanqueDetailComponent } from './components/banque/banque-detail/banque-detail.component';
import { BanqueListeComponent } from './components/banque/banque-liste/banque-liste.component';
import { HistoriqueDetailComponent } from './components/historique/historique-detail/historique-detail.component';
import { HistoriqueListeComponent } from './components/historique/historique-liste/historique-liste.component';
import { OperationDetailComponent } from './components/operation/operation-detail/operation-detail.component';
import { OperationListeComponent } from './components/operation/operation-liste/operation-liste.component';
import { TypeOperationDetailComponent } from './components/type-operation/type-operation-detail/type-operation-detail.component';
import { TypeOperationListeComponent } from './components/type-operation/type-operation-liste/type-operation-liste.component';


const routes: Routes = [
  { path: '', component: BanqueListeComponent },
  { path: 'banque', component: BanqueListeComponent },
  { path: 'banqueDetail/:id', component: BanqueDetailComponent },
  { path: 'operation', component: OperationListeComponent },
  { path: 'operationDetail/:id', component: OperationDetailComponent },
  { path: 'type', component: TypeOperationListeComponent },
  { path: 'typeDetail/:id', component: TypeOperationDetailComponent },
  { path: 'historique', component: HistoriqueListeComponent,data: { shouldReuse: false } },
  { path: 'historique/:annee', component: HistoriqueListeComponent, data: { shouldReuse: false }},
  { path: 'historiqueDetail/:id', component: HistoriqueDetailComponent },
  { path: 'home', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
