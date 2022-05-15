import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBeMindComponent } from './home-be-mind.component';

describe('HomeBeMindComponent', () => {
  let component: HomeBeMindComponent;
  let fixture: ComponentFixture<HomeBeMindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeBeMindComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBeMindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
