import { Component } from '@angular/core';

@Component({
  selector: 'app-propertybinging',
  templateUrl: './propertybinging.component.html',
  styleUrl: './propertybinging.component.css'
})
export class PropertybingingComponent {
  action=false;
  title="this is property binding";

  imagePath="https://picsum.photos/200/300";
  
  color="green";
}
