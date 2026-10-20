import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePage } from './home-page';  // שים לב לשם הקובץ והכיתה

describe('HomePage', () => {  // שים לב לשם כאן
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePage ],  // שים לב שהוספת כאן את HomePage
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});