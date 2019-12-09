import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularSplitModule } from 'angular-split';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AceEditorModule } from 'ng2-ace-editor';
import { EditorCodeAreaComponent } from './editor/editor-code-area/editor-code-area.component';
import { EditorDisplayComponent } from './editor/editor-display/editor-display.component';
import { EditorToolbarComponent } from './editor/editor-toolbar/editor-toolbar.component';
import { EditorContainerComponent } from './editor/editor-container/editor-container.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    EditorCodeAreaComponent,
    EditorDisplayComponent,
    EditorToolbarComponent,
    EditorContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularSplitModule.forRoot(),
    AceEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
