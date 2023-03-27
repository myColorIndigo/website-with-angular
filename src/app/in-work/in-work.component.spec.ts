import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InWorkComponent } from './in-work.component';

describe('InWorkComponent', () => {
  let component: InWorkComponent;
  let fixture: ComponentFixture<InWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InWorkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
