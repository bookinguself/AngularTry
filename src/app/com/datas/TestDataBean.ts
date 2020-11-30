
// import {ODSVCcolumnMap} from '../Constants'
// let ODSVCcolumnMap=(colName:string):any=>{
//     return (target,key:string)=>{
//         console.dir(key);
//     }
// }

import { COLUMN_MAP, ENTITY_CLASS } from '../ODSVCcolMapper';
import { TestDataMapSec } from './TestDataMapSec';




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