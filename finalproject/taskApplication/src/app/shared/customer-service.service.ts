import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

export interface Objects {
  name: any;
  age: any;
}
@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor() { }

  public Subject=new Subject<[Objects[]]>();
  private messageSource:any=new BehaviorSubject<Objects[]>([]);
  
  CurrentMessage=this.messageSource.asObservable();
 
  
 private objects:Objects[]=[];
loadall(){
  this.objects=[];
  this.messageSource.next(this.objects)
}

 ChangeMessage(item:Objects){
    this.objects.push(item);
    this.messageSource.next(Object.assign([],this.objects));
  }

  
  
  

}
