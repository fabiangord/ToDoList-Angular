import { Injectable } from '@angular/core';
import { Work } from '../models/work.model';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  public work!:string
  public date!:Date
  public worksNoComplete:Work[] = []
  public worksComplete:Work[] = []
  public worksCanceled:Work[] = []
  public showTable1:boolean = false
  public showTable2:boolean = false
  public showTable3:boolean = false
  


  constructor() { }

  add(work:Work){
    this.showTable1 = true
    this.worksNoComplete.push(work)
  }

  check(index:number){
    this.showTable2 = true
    const work:Work = this.worksNoComplete[index]
    this.worksComplete.push(work)
    this.worksNoComplete.splice(index, 1)
  }

  cancel(index:number){
    this.showTable3 = true
    const work:Work = this.worksNoComplete[index]
    this.worksCanceled.push(work)
    this.worksNoComplete.splice(index, 1)
  }
}
