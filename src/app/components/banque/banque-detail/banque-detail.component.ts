import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Banque } from 'src/app/models/banque.model';
import { BanqueService } from 'src/app/services/banque.service';
import { Location } from '@angular/common';
import { FormatNumberPipe } from 'src/app/pipe/format-number.pipe';

@Component({
  selector: 'app-banque-detail',
  templateUrl: './banque-detail.component.html',
  styleUrls: ['./banque-detail.component.css']
})
export class BanqueDetailComponent implements OnInit {


  banque: Banque | undefined;
  constructor(private route: ActivatedRoute,private banqueService: BanqueService,private location: Location,private formatNumberPipe: FormatNumberPipe){}

  ngOnInit(): void {
    console.log('start')
    console.log(Number(this.route.snapshot.paramMap.get('id')))
    this.getBanque();
    console.log('end')
  }

  getBanque(): void {
    console.log('getBanque');
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id==0){
      console.log('create');
      this.banque={} as Banque;
      console.log(this.banque);
    }else{
      console.log('update');
      this.banqueService.getBanque(id)
      .subscribe(banque => this.banque = banque);
    }
    
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.banque) {
      console.log(this.banque)
      this.banqueService.updateBanque(this.format(this.banque))
        .subscribe(() => this.goBack());
    }
  }

  format(banque: Banque){
    console.log(banque)
    banque.compteCourant=this.formatNumberPipe.transform(banque.compteCourant)
    if(banque.livretA){banque.livretA=this.formatNumberPipe.transform(banque.livretA)}
    if(banque.epargne){banque.epargne=this.formatNumberPipe.transform(banque.epargne)}
    if(banque.ticketRestaurant){banque.ticketRestaurant=this.formatNumberPipe.transform(banque.ticketRestaurant)}
    return banque;
  }
}
