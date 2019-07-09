import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionDiagramsComponent } from './version-diagrams.component';

describe('VersionDiagramsComponent', () => {
  let component: VersionDiagramsComponent;
  let fixture: ComponentFixture<VersionDiagramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VersionDiagramsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionDiagramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
