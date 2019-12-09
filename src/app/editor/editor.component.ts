import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  @ViewChild('editor', {static: true}) editor; // check le param static
  @Output() content = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.editor.getEditor().setOptions({
      autoScrollEditorIntoView: true,
      copyWithEmptySelection: true,
    });

    // this.editor.getEditor().setTheme('monokai');
    this.editor.getEditor().on('change', (delta) => {
      console.log('tt:', this.editor.getEditor().getValue());
      this.content.emit(this.editor.getEditor().getValue());
    });

  }
}
