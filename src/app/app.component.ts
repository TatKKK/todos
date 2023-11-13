import { Component } from '@angular/core';
import { StorageService } from './storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'TODO APP';

  tasks=[];
  private lastTaskId = 0;

  constructor(private storageService:StorageService){
    this.loadTasks();
  }

  loadTasks(){
    this.tasks=this.storageService.getTasks();
  }

  addTask(task:{id:number,name:string, deadline:String}){
    this.tasks.push({id:++this.lastTaskId ,name:task.name, completed:false, deadline:task.deadline});
    this.storageService.setTasks(this.tasks);
  }

  deleteTask(taskId: number) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
    this.storageService.setTasks(this.tasks);
  }
}
