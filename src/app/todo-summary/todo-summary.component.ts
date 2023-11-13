import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-summary',
  templateUrl: './todo-summary.component.html',
  styleUrls: ['./todo-summary.component.css']
})
export class TodoSummaryComponent {
  @Input() tasks:any[]=[];

  get pendingTasks(){
    return this.tasks.filter(task=>!task.completed).length;
  }

  get completedTasks(){
    return this.tasks.filter(task=>task.completed).length;
  }

  get totalTasks(){
    return this.tasks.length;
  }

  
}
