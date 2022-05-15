import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QPPViewComponent } from './qppview.component';

describe('QPPViewComponent', () => {
  let component: QPPViewComponent;
  let fixture: ComponentFixture<QPPViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QPPViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QPPViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
