import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularSplitModule } from 'angular-split';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EditorComponent } from './editor/editor.component';
import { DiagramDisplayComponent } from './diagram-display/diagram-display.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {ClassComponentComponent} from './class-diagram-components/class-component/class-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    EditorComponent,
    DiagramDisplayComponent,
    ToolbarComponent,
    ClassComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularSplitModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
