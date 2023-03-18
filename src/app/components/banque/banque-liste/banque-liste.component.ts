import { Component,OnInit,NgModule, LOCALE_ID} from '@angular/core';
import { Banque } from 'src/app/models/banque.model';
import { BanqueService } from 'src/app/services/banque.service';


@Component({
  selector: 'app-banque-liste',
  templateUrl: './banque-liste.component.html',
  styleUrls: ['./banque-liste.component.css']
})
export class BanqueListeComponent implements OnInit {
  

  banques:Banque[]=[];
  total:number=0;
  taux:number=2;
  livretA:number=0;
  rentLivretA:number=0;


  constructor(private banqueService: BanqueService){}
  
  ngOnInit(): void {
    console.log(0);
    this.banqueService.getAllBanque()
      .subscribe({
        next: (banques$) => {
          this.banques=banques$;
          console.log(66);
        },
        error:(response) => {console.log(response);},
        complete:() => {
          console.log('DONE!')
          this.CalculResponse()
        }
      },
    

    );
    //console.log(this.banques);
    this.banques.forEach(banque => {
      console.log(banque.id);
    });


    
    this.CalculResponse()
    console.log(2);

  }
  CalculResponse() {
    console.log(this.CalculResponse)
    
    this.banques.forEach(banque => {
      console.log(banque);
      this.total = this.total+banque.compteCourant+banque.epargne+banque.livretA+banque.ticketRestaurant;
      this.livretA=this.livretA+banque.livretA
    })
    this.rentLivretA=this.livretA*(this.taux/100);
  }

  
}
