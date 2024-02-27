import { Component } from '@angular/core';

@Component({
  selector: 'app-f',
 templateUrl: './firstpage.component.html',
 //template:`<h2>Change template</h2>`,

  styleUrl: './firstpage.component.css'
  //styles:`h2{color:blue}`,
})
export class FirstpageComponent {
  title="My second Project!";
  udetails="Enter user details:-";
 /*
  user={
    name:"Aditi",
  age:"22",
  email:"a.kulkarni@23.com",
  }
 */
  name="abc";
  age="19";
  email="xyz@k.com";
}
