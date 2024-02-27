import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrl: './eventbinding.component.css'
})
export class EventbindingComponent 
{
  show()
  {
    alert("Click on button");
  }
    n1=2;
    n2=5;
    sum=0;

    add()
    {
      this.sum=this.n1+this.n2;
    }
    

    counter=0;
    incCounter()
    {
      this.counter++;
    }
  
    clearInterval()
    {
      this.counter=0;
    }
}
