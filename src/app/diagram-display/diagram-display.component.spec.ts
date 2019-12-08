import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagramDisplayComponent } from './diagram-display.component';

describe('DiagramDisplayComponent', () => {
  let component: DiagramDisplayComponent;
  let fixture: ComponentFixture<DiagramDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagramDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagramDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
