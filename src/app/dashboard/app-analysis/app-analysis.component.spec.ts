import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAnalysisComponent } from './app-analysis.component';

describe('AppAnalysisComponent', () => {
  let component: AppAnalysisComponent;
  let fixture: ComponentFixture<AppAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
