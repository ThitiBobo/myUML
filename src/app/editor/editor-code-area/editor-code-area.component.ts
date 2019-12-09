import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-editor-code-area',
  templateUrl: './editor-code-area.component.html',
  styleUrls: ['./editor-code-area.component.scss']
})
export class EditorCodeAreaComponent implements OnInit {

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
