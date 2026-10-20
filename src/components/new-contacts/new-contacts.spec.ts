import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewContacts } from './new-contacts';

describe('NewContacts', () => {
  let component: NewContacts;
  let fixture: ComponentFixture<NewContacts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewContacts],
    }).compileComponents();

    fixture = TestBed.createComponent(NewContacts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
