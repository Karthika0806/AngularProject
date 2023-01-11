import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomerServiceService, Objects } from 'src/app/shared/customer-service.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  form!:FormGroup
  submitted:boolean=false
  CurrentMessage!:Observable<Objects[]>
  
constructor(private builder:FormBuilder ,private customerservice:CustomerServiceService,private route:Router){
  this.form=this.builder.group({
    name:['',Validators.required],
    age:['',Validators.required]
  } )
}

  ngOnInit() {
      this.CurrentMessage=this.customerservice.CurrentMessage;
    
  }

  Submit(){
    this.customerservice.ChangeMessage(this.form.value);
   this.form.get('value')?.setValue('');
    this.route.navigate(['/showtable']);
    
   }
   
  
 
 

}
