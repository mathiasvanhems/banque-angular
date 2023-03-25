import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TypeOperation } from 'src/app/models/typeOperation.model';
import { TypeOperationService } from 'src/app/services/type-operation.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-type-operation-detail',
  templateUrl: './type-operation-detail.component.html',
  styleUrls: ['./type-operation-detail.component.css']
})
export class TypeOperationDetailComponent implements OnInit {
  states = [
    {name: 'Arizona', abbrev: 'AZ'},
    {name: 'California', abbrev: 'CA'},
    {name: 'Colorado', abbrev: 'CO'},
    {name: 'New York', abbrev: 'NY'},
    {name: 'Pennsylvania', abbrev: 'PA'},
  ];
  recurrenceSelected="";
  recurrences = [
    {value: 'NA'},
    {value: 'Hebdomadaire'},
    {value: 'Mensuel'},
  ];
  typeOperation: TypeOperation | undefined;
  constructor(private route: ActivatedRoute,private typeOperationService: TypeOperationService,private location: Location){}

  ngOnInit(): void {
    console.log('start')
    console.log(Number(this.route.snapshot.paramMap.get('id')))
    this.getTypeOperation();
    
    console.log('end')
  }

  getTypeOperation(): void {
    console.log('getTypeOperation');
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id==0){
      console.log('create');
      this.typeOperation={} as TypeOperation;
      console.log(this.typeOperation);
      this.recurrenceSelected="NA"
    }else{
      this.typeOperationService.getTypeOperation(id).subscribe(typeOperation => this.typeOperation = typeOperation);
      this.typeOperationService.getTypeOperation(id)
      .subscribe({
        next: (typeOperations$) => {
          this.typeOperation=typeOperations$;;
        },
        error:(response) => {console.log(response);},
        complete:() => {
          console.log(this.typeOperation);
          this.recurrenceSelected=this.typeOperation!.recurrence;
          console.log(this.recurrenceSelected);
        }
      },
      );
    }
    
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.typeOperation) {
      this.typeOperationService.updateTypeOperation(this.typeOperation)
        .subscribe(() => this.goBack());
    }
  }

  onSelected(value:string): void {
		this.typeOperation!.recurrence = value;
	}

  onRecurrenceSelected(val:any){
    this.typeOperation!.recurrence=val;
    this.recurrenceSelected=val;

  }
}
