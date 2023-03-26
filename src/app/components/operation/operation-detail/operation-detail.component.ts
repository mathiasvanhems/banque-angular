import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Operation } from 'src/app/models/operation.model';
import { OperationService } from 'src/app/services/operation.service';
import { Location } from '@angular/common';
import { TypeOperation } from 'src/app/models/typeOperation.model';
import { TypeOperationService } from 'src/app/services/type-operation.service';
import { FormatStringPipe } from 'src/app/pipe/format-string.pipe';
import { FormatNumberPipe } from 'src/app/pipe/format-number.pipe';

@Component({
  selector: 'app-operation-detail',
  templateUrl: './operation-detail.component.html',
  styleUrls: ['./operation-detail.component.css']
})
export class OperationDetailComponent {
  operation: Operation | undefined;
  typeOperationSelected: number = 24;
  typeOperations: TypeOperation[] = [];
  typeOperation: TypeOperation | undefined;
  id:number;
  constructor(private route: ActivatedRoute, private operationService: OperationService, private typeOperationService: TypeOperationService, private location: Location,private formatNumberPipe: FormatNumberPipe,private formatStringPipe: FormatStringPipe) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    console.log('start')
    this.getTypeOperation();
    this.getOperation();
    console.log('end')
  }

  getOperation(): void {
    if (this.id == 0) {
      console.log('create');
      this.operation = {} as Operation;
      console.log(this.operation);
      this.typeOperationSelected = 0;
    } else {
      this.operationService.getOperation(this.id).subscribe(operation => this.operation = operation);
      this.operationService.getOperation(this.id)
        .subscribe({
          next: (operations$) => {
            this.operation = operations$;;
          },
          error: (response) => { console.log(response); },
          complete: () => {
            console.log("DONE");
            this.typeOperationSelected = this.operation!.type.id;
          }
        },);
    }
  }

  getTypeOperation(): void {
    this.typeOperationService.getAllTypeOperation()
      .subscribe({
        next: (typeOperations$) => {
          this.typeOperations = typeOperations$;
        },
        error: (response) => { console.log(response); },
        complete: () => {
          this.typeOperations.push({ id: 0, libelle: "NA", recurrence: "NA", sortie: false } as TypeOperation);
        }
      },
      );
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.operation) {
      this.operationService.updateOperation(this.format(this.operation))
        .subscribe(() => this.goBack());
    }
  }

  onTypeOperationSelected(val: any) {
    this.operation!.type = this.getTypeOperationById(Number(val))!;
    this.typeOperationSelected = this.getTypeOperationById(Number(val))!.id;
  }

  getTypeOperationById(id: any): TypeOperation {
    return this.typeOperations.find(x => Number(x.id) === Number(id))!;
  }

  format(operation: Operation){
    operation.montant=this.formatNumberPipe.transform(operation.montant)
    if(operation.detail){operation.detail=this.formatStringPipe.transform(operation.detail)}
    return operation;
  }
}
