import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeDemosComponent } from './practice-demos.component';

describe('PracticeDemosComponent', () => {
  let component: PracticeDemosComponent;
  let fixture: ComponentFixture<PracticeDemosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeDemosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeDemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
