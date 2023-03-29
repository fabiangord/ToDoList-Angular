import { Component } from '@angular/core';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-card-cancel',
  templateUrl: './card-cancel.component.html',
  styleUrls: ['./card-cancel.component.css']
})
export class CardCancelComponent {

  constructor(public WorkService:FormService){
    
  }

}
