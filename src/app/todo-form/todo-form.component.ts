import { Component, Output, EventEmitter } from '@angular/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  taskName = '';
  taskDeadline='';
  tasks=[];
  @Output() taskAdded = new EventEmitter<{name:string, deadline:string}>();
  isDateValid=true;

  constructor(private storageService:StorageService){ }

  addTask() {
    if (this.taskName.trim()&&this.taskDeadline) {
      const currentDate=new Date().toISOString().split('T')[0];
      if(new Date(this.taskDeadline)>=new Date(currentDate)){
        this.taskAdded.emit({name:this.taskName.trim(), deadline:this.taskDeadline});
          console.log(`task added ${this.taskName}`);
      }     else{
       this.isDateValid=false;
       console.log('Date not valid');
      }
     

      this.taskName = '';
      this.taskDeadline='';
    }
  }
  deleteTask(taskId:number){
    this.tasks=this.tasks.filter(task=>task.id!==taskId);
    this.storageService.setTasks(this.tasks);
  }
}
