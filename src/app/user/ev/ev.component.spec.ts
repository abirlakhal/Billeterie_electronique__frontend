import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvComponent } from './ev.component';

describe('EvComponent', () => {
  let component: EvComponent;
  let fixture: ComponentFixture<EvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
