import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagedComponent } from './messaged.component';

describe('MessagedComponent', () => {
  let component: MessagedComponent;
  let fixture: ComponentFixture<MessagedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
