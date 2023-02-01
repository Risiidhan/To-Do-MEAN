import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tasks:any[]=[];

  constructor(private taskService:TaskServiceService) { }


  ngOnInit(): void {
    this.getTask()
    
  }


  getTask(){
    this.tasks=[];
    this.taskService.getTask()
      .subscribe((data:any)=>{
        this.tasks=data;
      })
  }
  updateTask(form:any){
    let taskName = form.form.value.name;
    let taskId = form.form.value.id;
    
    this.taskService.updateTask(
      taskId,
      {title:taskName}
      )
      .subscribe((data:any)=>{
          alert(`updated successfully`)
          this.getTask();        
      })
  }


  insertTask(form:any){
    let taskName = form.form.value.name;
    let taskId = form.form.value.id;
    
    this.taskService.addTask(
      {title:taskName}
      )
      .subscribe((data:any)=>{
          let name = data.title;
          alert(`inserted ${name} successfully`)
          this.getTask();        
      })
  }

  deleteTask(id:any){
    this.taskService.deleteTask(id)  
      .subscribe((data:any)=>{
        this.getTask();        
      alert(`deleted successfully`)
    })

  }

}
