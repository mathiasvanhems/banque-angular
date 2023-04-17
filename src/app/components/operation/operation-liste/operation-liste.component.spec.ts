import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationListeComponent } from './operation-liste.component';

describe('OperationListeComponent', () => {
  let component: OperationListeComponent;
  let fixture: ComponentFixture<OperationListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationListeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperationListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
