import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNoCompleteComponent } from './card-no-complete.component';

describe('CardNoCompleteComponent', () => {
  let component: CardNoCompleteComponent;
  let fixture: ComponentFixture<CardNoCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardNoCompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardNoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
