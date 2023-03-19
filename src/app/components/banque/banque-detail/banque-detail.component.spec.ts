import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanqueDetailComponent } from './banque-detail.component';

describe('BanqueDetailComponent', () => {
  let component: BanqueDetailComponent;
  let fixture: ComponentFixture<BanqueDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanqueDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BanqueDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
