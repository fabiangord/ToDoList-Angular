import { Component } from '@angular/core';
import { FormService } from 'src/app/services/form.service';
import { Work } from 'src/app/models/work.model';

@Component({
  selector: 'app-card-no-complete',
  templateUrl: './card-no-complete.component.html',
  styleUrls: ['./card-no-complete.component.css']
})
export class CardNoCompleteComponent {


  constructor(public WorkService:FormService){
    
  }

  

}
