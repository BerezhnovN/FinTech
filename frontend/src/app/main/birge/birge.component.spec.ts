import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirgeComponent } from './birge.component';

describe('BirgeComponent', () => {
  let component: BirgeComponent;
  let fixture: ComponentFixture<BirgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
