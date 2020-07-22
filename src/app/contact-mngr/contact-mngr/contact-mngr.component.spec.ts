import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMngrComponent } from './contact-mngr.component';

describe('ContactMngrComponent', () => {
  let component: ContactMngrComponent;
  let fixture: ComponentFixture<ContactMngrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactMngrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactMngrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
