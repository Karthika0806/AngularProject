import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerServiceService, Objects } from 'src/app/shared/customer-service.service';

@Component({
  selector: 'app-shown-table',
  templateUrl: './shown-table.component.html',
  styleUrls: ['./shown-table.component.css']
})
export class ShownTableComponent implements OnInit{
  age: any[]=['']
  name: any[]=['']
  CurrentMessage!:Observable<Objects[]>;
  
constructor(private customer:CustomerServiceService){}

  ngOnInit(): void {
    this.CurrentMessage=this.customer.CurrentMessage;
   
    }
  


}
