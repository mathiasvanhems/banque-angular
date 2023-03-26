import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOperationListeComponent } from './type-operation-liste.component';

describe('TypeOperationListeComponent', () => {
  let component: TypeOperationListeComponent;
  let fixture: ComponentFixture<TypeOperationListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeOperationListeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeOperationListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
