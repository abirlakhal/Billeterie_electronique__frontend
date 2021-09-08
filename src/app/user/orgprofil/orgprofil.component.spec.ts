import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgprofilComponent } from './orgprofil.component';

describe('OrgprofilComponent', () => {
  let component: OrgprofilComponent;
  let fixture: ComponentFixture<OrgprofilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgprofilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
