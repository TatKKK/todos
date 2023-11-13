import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.css']
})
export class TodoTableComponent {
  taskName='';
  @Input() tasks: any[] =[];
  @Output() taskDeleted = new EventEmitter<number>();


  getTimeLeft(taskDeadline:string):string{
    const currentDate=new Date().toISOString().split('T')[0];

    const currentTime=new Date(currentDate).getTime();
    const deadlineTime=new Date(taskDeadline).getTime();
    const timeLeft=deadlineTime-currentTime;

    const oneDay=24*60*1000;
    const threeDays=3*oneDay;
    const sevenDays=7*oneDay;

    if(timeLeft<=oneDay){
     return 'danger';
    }else if(timeLeft<=threeDays){
      return "warning";
    } else {
      return 'primary';
    }

  }



  toggleTask(task:any){
    task.completed=!task.completed;
    console.log('toggled');
  }

  deleteTask(taskId: number) {
    this.taskDeleted.emit(taskId);
  }

}
