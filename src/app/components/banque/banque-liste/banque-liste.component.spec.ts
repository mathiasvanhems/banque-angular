import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanqueListeComponent } from './banque-liste.component';

describe('BanqueListeComponent', () => {
  let component: BanqueListeComponent;
  let fixture: ComponentFixture<BanqueListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanqueListeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BanqueListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
