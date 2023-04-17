import { Component } from '@angular/core';
import { TypeOperation } from 'src/app/models/typeOperation.model';
import { TypeOperationService } from 'src/app/services/type-operation.service';

@Component({
  selector: 'app-type-operation-liste',
  templateUrl: './type-operation-liste.component.html',
  styleUrls: ['./type-operation-liste.component.css']
})
export class TypeOperationListeComponent {

  typeOperations:TypeOperation[]=[];

  constructor(private typeOperationService: TypeOperationService){}
  
  ngOnInit(): void {
    this.typeOperationService.getAllTypeOperation()
      .subscribe({
        next: (typeOperations$) => {
          this.typeOperations=typeOperations$;
        },
        error:(response) => {console.log(response);},
        complete:() => {
          console.log('DONE!')
        }
      },
    );
    this.typeOperations.forEach(typeOperation => {
      console.log(typeOperation.id);
    });
  }


  delete(typeOperation: TypeOperation): void {
    this.typeOperations = this.typeOperations.filter(h => h !== typeOperation);
    this.typeOperationService.deleteTypeOperation(typeOperation.id).subscribe();
  }





}
