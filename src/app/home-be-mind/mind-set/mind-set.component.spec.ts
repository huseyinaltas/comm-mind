import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MindSetComponent } from './mind-set.component';

describe('MindSetComponent', () => {
  let component: MindSetComponent;
  let fixture: ComponentFixture<MindSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MindSetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MindSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
