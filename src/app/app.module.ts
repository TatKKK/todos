import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoTableComponent } from './todo-table/todo-table.component';
import { TodoSummaryComponent } from './todo-summary/todo-summary.component';



@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    TodoTableComponent,
    TodoSummaryComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
