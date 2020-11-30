import { COLUMN_MAP, ENTITY_CLASS } from '../ODSVCcolMapper';

@ENTITY_CLASS()
export class ObjSec{
    @COLUMN_MAP("obj_aaa1")
    objsecAttr:string;
    @COLUMN_MAP("obj_aaa2")
    objSecAttr2:boolean;
}