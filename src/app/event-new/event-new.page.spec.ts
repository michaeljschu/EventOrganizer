import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventNewPage } from './event-new.page';

describe('EventNewPage', () => {
  let component: EventNewPage;
  let fixture: ComponentFixture<EventNewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventNewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
