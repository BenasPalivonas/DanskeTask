import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarPlatesEditComponent } from './car-plates-edit.component';

describe('CarPlatesEditComponent', () => {
  let component: CarPlatesEditComponent;
  let fixture: ComponentFixture<CarPlatesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarPlatesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarPlatesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
