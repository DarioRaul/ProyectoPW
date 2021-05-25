import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreFamiliaComponent } from './padre-familia.component';

describe('PadreFamiliaComponent', () => {
  let component: PadreFamiliaComponent;
  let fixture: ComponentFixture<PadreFamiliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadreFamiliaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PadreFamiliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
