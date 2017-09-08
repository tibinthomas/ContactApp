import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VContactComponent } from './vcontact.component';

describe('VContactComponent', () => {
  let component: VContactComponent;
  let fixture: ComponentFixture<VContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
