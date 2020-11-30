import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestDataBean, TestDataObj2 } from './com/datas';
import { ObjSec } from './com/datas/ObjSec';

const EntityObjs:any[]=[TestDataBean,TestDataObj2,ObjSec];
// const initEntitys = ()=>{
//   console.dir("----------------------------");
//   EntityObjs.forEach(element => {
//     //console.dir(element.name)
//     window[element.name]=element;
//   });
// }
// initEntitys();
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports:[
    
  ],
  providers: [
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
