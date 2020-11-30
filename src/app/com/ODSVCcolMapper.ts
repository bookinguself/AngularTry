/**
 * @author: Yilei
 * @description: create the annotation for col maping in json, below is the Decorators
 * @param
 */
import "reflect-metadata";
import { AttrInfo } from './datas/AttrInfo';



export function COLUMN_MAP(colName,...option){
    return function(target,key){
       
        let objectArray=Reflect.getOwnMetadata("key:beanData", target) ||{};
        let object=<AttrInfo>{};
        object.entityAttr=key;
        object.tableCol=colName;
        object.dataType=Reflect.getMetadata("design:type", target, key);
       
        if(option.length>0){
            object.options=option[0];
        };
        objectArray[colName]=object;
        Reflect.defineMetadata("key:beanData", objectArray, target);
    }
};
export function ENTITY_CLASS():any{
    return function(target,key){
        window[target.name]=target;
    }
}
