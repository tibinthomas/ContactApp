import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CEContactComponent } from './cecontact.component';

describe('CEContactComponent', () => {
  let component: CEContactComponent;
  let fixture: ComponentFixture<CEContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CEContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CEContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
