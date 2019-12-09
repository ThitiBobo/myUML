import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorCodeAreaComponent } from './editor-code-area.component';

describe('EditorCodeAreaComponent', () => {
  let component: EditorCodeAreaComponent;
  let fixture: ComponentFixture<EditorCodeAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorCodeAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorCodeAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
