import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Historique } from 'src/app/models/historique.model';
import { HistoriqueService } from 'src/app/services/historique.service';
import { DatePipe, formatDate, Location } from '@angular/common';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-historique-detail',
  templateUrl: './historique-detail.component.html',
  styleUrls: ['./historique-detail.component.css']
})
export class HistoriqueDetailComponent implements OnInit {
  historique: Historique;
  constructor(private route: ActivatedRoute,private historiqueService: HistoriqueService,private location: Location,private datePipe: DatePipe){
    //formatDate(new Date(), 'dd/MM/yyyy', 'fr-FR');
    this.historique={} as Historique;
  }

  ngOnInit(): void {

    console.log(Number(this.route.snapshot.paramMap.get('id')))
    this.getHistorique();

  }

  getHistorique(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id==0){

      this.historique={} as Historique;
      console.log(this.historique);
    }else{
      this.historiqueService.getHistorique(id).subscribe(historique => this.historique = historique);
      this.historiqueService.getHistorique(id)
      .subscribe({
        next: (historiques$) => {
          this.historique=historiques$;;
        },
        error:(response) => {console.log(response);},
        complete:() => {
          console.log(this.historique);
        }
      },
    );
    }
    
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    
    console.log(this.historique);
    if (this.historique) {
      this.historiqueService.updateHistorique(this.historique)
        .subscribe(() => this.goBack());
    }
  }
}
