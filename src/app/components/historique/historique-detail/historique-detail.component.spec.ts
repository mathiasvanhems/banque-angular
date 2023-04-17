import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueDetailComponent } from './historique-detail.component';

describe('HistoriqueDetailComponent', () => {
  let component: HistoriqueDetailComponent;
  let fixture: ComponentFixture<HistoriqueDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriqueDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoriqueDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
