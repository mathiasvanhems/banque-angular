import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { Historique } from 'src/app/models/historique.model';
import { HistoriqueService } from 'src/app/services/historique.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-historique-liste',
  templateUrl: './historique-liste.component.html',
  styleUrls: ['./historique-liste.component.css']
})
export class HistoriqueListeComponent implements OnInit {
  historiques:Historique[]=[];
  dataArray: number[]=[];
  labelArray: string[]=[];


  constructor(private historiqueService: HistoriqueService,private datePipe: DatePipe){}
  
  
  ngOnInit(): void {
    this.historiqueService.getAllHistorique()
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
        label: 'compte bancaire',
        fill: true,
        tension: 0,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.2)'
      }
    ]
    
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false,
    scales: {
      y: {
          stacked: true,
          suggestedMin: 50,
          suggestedMax: 100
        }
      
    },
    
  };
  public lineChartLegend = true;

  
}
