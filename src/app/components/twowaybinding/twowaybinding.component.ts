import { Component } from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrl: './twowaybinding.component.css'
})
export class TwowaybindingComponent
{
  name="Aditi";

/*
changeValue(event:Event)
  {
const a=event.target as HTMLInputElement
this.name=a.value;
  }
*/
getChange()
{
  this.name=" sayli";
}

}
