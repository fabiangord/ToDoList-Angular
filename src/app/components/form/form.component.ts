import { Component } from '@angular/core';
import { Work } from 'src/app/models/work.model';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  public work!:string
  public date!:Date
  public show:boolean = false

  constructor(public WorkService:FormService){

  }
  
  add(){
    const work:Work = new Work(this.work, this.date)
    this.WorkService.add(work)
  }

}
