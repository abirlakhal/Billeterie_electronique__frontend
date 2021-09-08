import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CliprofilComponent } from './cliprofil.component';

describe('CliprofilComponent', () => {
  let component: CliprofilComponent;
  let fixture: ComponentFixture<CliprofilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CliprofilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CliprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
