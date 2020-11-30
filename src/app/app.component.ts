import { Component } from '@angular/core';
import { TestDataBean } from './com/datas/TestDataBean';
import { TestDataObj2 } from './com/datas/TestDataObject2';
import { JSONParseSVC } from './com/JSONParseSVC';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent 
{
  title = 'TestDatamap';
 // a:any;
  a={
    "test1": "test1_Value",
    "test2": 12345,
    "secObject": {
      "sec1": "sec1_Value",
      "sec2": 888888
    },
    "secArray": [
      {
        "sec1": "sec1_ArrayValue",
        "sec2": 333333
      },
      {
        "sec1": "sec1_ArrayValue",
        "sec2": 555555
      }
    ]
  };
  b={
    "obj_Attr1":"testobj2_value",
    "obj_Attr2":"",
    "obj_Attr3":[
      {"obj_aaa1":"obj_aaa1_value","obj_aaa2":true},
      {"obj_aaa1":"obj_aaa1_value2","obj_aaa2":false}
    ]
  };
  orgJson=JSON.stringify(this.a);

  classExample="@ENTITY_CLASS()<br>" + 
  "export class TestDataBean{    \r\n" + 
  "    @COLUMN_MAP(\"test1\")\r\n" + 
  "    beanAttr:string;\r\n" + 
  "    @COLUMN_MAP(\"test2\")\r\n" + 
  "    beanAttr2:number;\r\n" + 
  "    @COLUMN_MAP(\"secObject\")\r\n" + 
  "    testsecobj:TestDataMapSec;\r\n" + 
  "    @COLUMN_MAP(\"secArray\",\"TestDataMapSec\")\r\n" + 
  "    testArray:TestDataMapSec[];\r\n" + 
  "}" ;
  constructor(){
   // let t=new TestDataBean();
   // console.dir(window["TestDataBean"]);
    
  }

  ttt():void{
  let t=new TestDataBean();
  // console.dir(window["TestDataBean"]);
  g:TestDataBean;
  let g=JSONParseSVC.parseJsonObject<TestDataBean>(TestDataBean,this.a);
  h:TestDataObj2;
  let h=JSONParseSVC.parseJsonObject<TestDataObj2>(TestDataObj2,this.b);
  console.dir(g);
  console.dir(h);
  }
}

