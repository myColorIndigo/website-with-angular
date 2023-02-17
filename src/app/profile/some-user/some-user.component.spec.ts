import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeUserComponent } from './some-user.component';

describe('SomeUserComponent', () => {
  let component: SomeUserComponent;
  let fixture: ComponentFixture<SomeUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomeUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SomeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
