import { Component } from '@angular/core';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-card-complete',
  templateUrl: './card-complete.component.html',
  styleUrls: ['./card-complete.component.css']
})
export class CardCompleteComponent {

  constructor(public WorkService:FormService){
    
  }

}
