import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstpageComponent } from './components/firstpage/firstpage.component';
import { PropertybingingComponent } from './components/propertybinging/propertybinging.component';
import { EventbindingComponent } from './components/eventbinding/eventbinding.component';
import { TwowaybindingComponent } from './components/twowaybinding/twowaybinding.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FirstpageComponent,
    PropertybingingComponent,
    EventbindingComponent,
    TwowaybindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
