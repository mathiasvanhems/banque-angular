import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { Historique } from 'src/app/models/historique.model';
import { HistoriqueService } from 'src/app/services/historique.service';
import { DatePipe } from '@angular/common';
import { ActivatedRoute,Router } from '@angular/router';



@Component({
  selector: 'app-historique-liste',
  templateUrl: './historique-liste.component.html',
  styleUrls: ['./historique-liste.component.css'],
  
})

export class HistoriqueListeComponent implements OnInit {
  historiques:Historique[]=[];
  dataArray: number[]=[];
  labelArray: string[]=[];
  annee:string|null="";
  anneePrec:number=0;
  anneeSuiv:number=0;
  anneeCurrent:number=0;


  constructor(private route: ActivatedRoute,private router: Router,private historiqueService: HistoriqueService,private datePipe: DatePipe){}
  
  
  ngOnInit(): void {
    //this.router.routeReuseStrategy.shouldReuseRoute = function() { return false; };
    //this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    //this.router.navigateByUrl('/historique', { onSameUrlNavigation: 'reload' })
    if(Number(this.route.snapshot.paramMap.get('annee'))){
      this.annee = this.route.snapshot.paramMap.get('annee');
    console.log(Number(this.route.snapshot.paramMap.get('annee')))
    }else{
      this.annee = new Date().getFullYear().toString();
    }
    this.anneeCurrent=Number(this.annee!)
    this.anneePrec=(Number(this.annee!)-1);
    this.anneeSuiv=(Number(this.annee!)+1);
    //this.router.navigateByUrl('/historique/'+this.annee, { onSameUrlNavigation: 'reload' })
    this.historiqueService.getHistoriqueByAnnee(this.annee!)
      .subscribe({
        next: (historiques$) => {
          this.historiques=historiques$;
        },
        error:(response) => {console.log(response);},
        complete:() => {
          console.log('DONE!')
          this.historiques.forEach(historique => {
            this.dataArray.push(historique.montant)
            this.labelArray.push(this.datePipe.transform(historique.periode,'dd/MM/yyyy')!);

          });
          console.log(this.labelArray);
        }
      },
    );
    console.log(this.labelArray);

  }

  ngOnChange(){

  }

  delete(historique: Historique): void {
    this.historiques = this.historiques.filter(h => h !== historique);
    this.historiqueService.deleteHistorique(historique.id).subscribe();
    location.reload();
  }


  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: this.labelArray ,
    datasets: [
      {
        data: this.dataArray,
        label: "Historique de l'année "+this.route.snapshot.paramMap.get('annee'),
        backgroundColor:'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
      }
    ]
    
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false,
    scales: {
      y: {
          suggestedMin: 0,
          suggestedMax: 100
        }
      
    },
    
  };
  public lineChartLegend = true;

  
}
