import { Component } from '@angular/core';
import { Operation } from 'src/app/models/operation.model';
import { OperationService } from 'src/app/services/operation.service';

@Component({
  selector: 'app-operation-liste',
  templateUrl: './operation-liste.component.html',
  styleUrls: ['./operation-liste.component.css']
})
export class OperationListeComponent {
  operations:Operation[]=[];

  constructor(private operationService: OperationService){}
  
  ngOnInit(): void {
    this.operationService.getAllOperation()
      .subscribe({
        next: (operations$) => {
          this.operations=operations$;
        },
        error:(response) => {console.log(response);},
        complete:() => {
          console.log('DONE!')
        }
      },
    );
    this.operations.forEach(operation => {
      console.log(operation.id);
    });
  }


  delete(operation: Operation): void {
    this.operations = this.operations.filter(h => h !== operation);
    this.operationService.deleteOperation(operation.id).subscribe();
  }
}
