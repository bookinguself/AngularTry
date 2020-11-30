import { COLUMN_MAP, ENTITY_CLASS } from '../ODSVCcolMapper';
import { ObjSec } from './ObjSec';

@ENTITY_CLASS()
export class TestDataObj2{
    @COLUMN_MAP("obj_Attr1")
    objAttr1:string;
    @COLUMN_MAP("obj_Attr2",{"isRequire":false})
    objAttr2:string;
    @COLUMN_MAP("obj_Attr3",{"arrayClassName":"ObjSec"})
    objAttrArray:ObjSec[];
}