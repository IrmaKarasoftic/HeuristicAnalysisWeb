import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAnalysisFormComponent } from './createanalysisform.component';

describe('CreateAnalysisFormComponent', () => {
  let component: CreateAnalysisFormComponent;
  let fixture: ComponentFixture<CreateAnalysisFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAnalysisFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAnalysisFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
