import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assg3Component } from './assg3.component';

describe('Assg3Component', () => {
  let component: Assg3Component;
  let fixture: ComponentFixture<Assg3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Assg3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Assg3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
