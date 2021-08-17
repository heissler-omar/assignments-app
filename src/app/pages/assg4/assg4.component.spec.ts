import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assg4Component } from './assg4.component';

describe('Assg4Component', () => {
  let component: Assg4Component;
  let fixture: ComponentFixture<Assg4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Assg4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Assg4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
