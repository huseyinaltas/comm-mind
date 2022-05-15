import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNeedMindComponent } from './home-need-mind.component';

describe('HomeNeedMindComponent', () => {
  let component: HomeNeedMindComponent;
  let fixture: ComponentFixture<HomeNeedMindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeNeedMindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNeedMindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
