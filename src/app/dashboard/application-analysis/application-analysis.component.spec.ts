import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationAnalysisComponent } from './application-analysis.component';

describe('ApplicationAnalysisComponent', () => {
  let component: ApplicationAnalysisComponent;
  let fixture: ComponentFixture<ApplicationAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
