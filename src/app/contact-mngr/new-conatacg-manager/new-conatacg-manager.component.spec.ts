import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewConatacgManagerComponent } from './new-conatacg-manager.component';

describe('NewConatacgManagerComponent', () => {
  let component: NewConatacgManagerComponent;
  let fixture: ComponentFixture<NewConatacgManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewConatacgManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewConatacgManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
