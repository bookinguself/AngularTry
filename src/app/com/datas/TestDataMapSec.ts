import { COLUMN_MAP, ENTITY_CLASS } from "../ODSVCcolMapper";

@ENTITY_CLASS()
export class TestDataMapSec{
    @COLUMN_MAP("sec1")
    sectest1:string;
    @COLUMN_MAP("sec2")
    sectest2:number;
}