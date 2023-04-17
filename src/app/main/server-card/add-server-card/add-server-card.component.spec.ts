import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServerCardComponent } from './add-server-card.component';

describe('AddServerCardComponent', () => {
  let component: AddServerCardComponent;
  let fixture: ComponentFixture<AddServerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddServerCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddServerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
