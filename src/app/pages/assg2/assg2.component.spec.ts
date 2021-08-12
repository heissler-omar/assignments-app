import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assg2Component } from './assg2.component';

describe('Assg2Component', () => {
  let component: Assg2Component;
  let fixture: ComponentFixture<Assg2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Assg2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Assg2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
