import { Injectable } from '@angular/core';
import { WebServiceService } from './web-service.service';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor(private webService:WebServiceService) { }

  addTask(title:any){
    return this.webService.post('task',title)
  }

  getTask(){
    return this.webService.get('task');
  }

  deleteTask(id:any){
    return this.webService.delete('task',id)
  }

  updateTask(id:any, body:any){
    return this.webService.patch('task',body,id)
  }
}
