/** 
 * @author Yilei
 * @description: parse Json to class, use annotation field to do the col mapping
*/
import { AttrInfoOptions } from "./AttrInfoOptions";

export interface AttrInfo{
    entityAttr:string;
    tableCol:string;
    dataType:any;
    options:AttrInfoOptions;
}