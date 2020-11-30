# AngularTry
#project name 
# TestDatamap
Some time we need to change the json field, but we do not want to change the class field, because the class use in more page already.
So Create class for json, use annotation field to map to json col name

#
npm install

#
ng serve

#
npm run start

#
ng build

#
npm run build

#
example:
let a={
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
  
  
  
  ##
  @ENTITY_CLASS()
	export class TestDataBean{    
		@COLUMN_MAP("test1")
		beanAttr:string;
		@COLUMN_MAP("test2")
		beanAttr2:number;
		@COLUMN_MAP("secObject")
		testsecobj:TestDataMapSec;
		@COLUMN_MAP("secArray",{"arrayClassName":"TestDataMapSec"})
		testArray:TestDataMapSec[];
	}
##
@ENTITY_CLASS()
export class TestDataMapSec{
    @COLUMN_MAP("sec1")
    sectest1:string;
    @COLUMN_MAP("sec2")
    sectest2:number;
}

#
  g:TestDataBean;
  let g=JSONParseSVC.parseJsonObject<TestDataBean>(TestDataBean,this.a);
  


