import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assg5Component } from './assg5.component';

describe('Assg5Component', () => {
  let component: Assg5Component;
  let fixture: ComponentFixture<Assg5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Assg5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Assg5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
