import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityFromsComponent } from './activity-froms.component';

describe('ActivityFromsComponent', () => {
  let component: ActivityFromsComponent;
  let fixture: ComponentFixture<ActivityFromsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityFromsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityFromsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
