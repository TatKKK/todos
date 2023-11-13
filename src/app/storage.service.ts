import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private storageKey='tasks';

  setTasks(tasks:any[]):void{
    localStorage.setItem(this.storageKey, JSON.stringify(tasks));
  }

  getTasks():any[]{
    const tasksJSON=localStorage.getItem(this.storageKey);
    if(tasksJSON){
      return JSON.parse(tasksJSON);
    }
    return[];
  }
  constructor() { }
}
