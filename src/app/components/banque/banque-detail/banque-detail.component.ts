import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Banque } from 'src/app/models/banque.model';
import { BanqueService } from 'src/app/services/banque.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-banque-detail',
  templateUrl: './banque-detail.component.html',
  styleUrls: ['./banque-detail.component.css']
})
export class BanqueDetailComponent implements OnInit {


  banque: Banque | undefined;
  constructor(private route: ActivatedRoute,private banqueService: BanqueService,private location: Location){}

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
      this.banqueService.updateBanque(this.banque)
        .subscribe(() => this.goBack());
    }
  }
}
