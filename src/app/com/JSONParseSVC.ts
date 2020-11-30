/** 
 * @author Yilei
 * @description: parse Json to class, use annotation field to do the col mapping
*/

import { analyzeAndValidateNgModules } from '@angular/compiler';
import { throwError } from 'rxjs';
import { AttrInfo } from './datas/AttrInfo';
import { AttrInfoOptions } from './datas/AttrInfoOptions';

export class JSONParseSVC{
    /**
     *
     * @description parse Json Array to class
     * @static
     * @template T
     * @param {string} clazzName
     * @param {any[]} jsonArray
     * @returns {T[]}
     * @memberof JSONParseSVC
     */
    static parseJsonArray<T>(clazzName:string,jsonArray:any[]):T[]{
        let clazz=window[clazzName];
        let t=<T[]>[];
        jsonArray.forEach(json=>{
            t.push(this.parseJsonObject(clazz,json));
        });
        return t;
    }
    /**
     *
     * @description parse json object
     * @static
     * @template T
     * @param {*} clazz
     * @param {*} json
     * @returns {T}
     * @memberof JSONParseSVC
     */
    static parseJsonObject<T>(clazz:any,json:any):T{
        let c:any;
        c=new clazz();
        //get the value from metadata
        let obj=Reflect.getMetadata("key:beanData",c);
        for(let a in json)
        {
            let jsonValue=json[a];
            let attrInfo=obj[a];           
            if(jsonValue!="undefined" && attrInfo!="undefined"&&jsonValue!=null&&attrInfo!=null )
            {
                let d=<AttrInfo>attrInfo;
                //check the value is null or not, 
                if(jsonValue=="undefined"||jsonValue==null||jsonValue==="")
                {
                    if(d.options!=null){
                        if(d.options.isRequire)
                        {
                            console.error("error in parse json attr "+a +"jsonValue:"+jsonValue+" attrInfo:"+attrInfo);
                            throwError;
                            return;
                        }
                    }                
                    c[d.entityAttr]=null;
                    continue;
                  
                }
                let v=this.dataTyteConvert(jsonValue,d.dataType,d.options);
                if(v!==null)
                {
                    c[d.entityAttr]=v;
                }              
                else
                {
                    if(window[d.dataType.name])
                    {
                        let cl=window[d.dataType.name];
                        c[d.entityAttr]=this.parseJsonObject(cl,jsonValue);
                    }
                    else{
                        console.error("error in parse child object, window can not find the instance");
                        throwError(new Error("error in parse child object, window can not find the instance"));
                        return;
                    }
                }
            }
            else
            {

                console.error("error in parse json attr "+a +"jsonValue:"+jsonValue+" attrInfo:"+attrInfo);
                throwError(new Error("error in parse json attr "+a +"jsonValue:"+jsonValue+" attrInfo:"+attrInfo));
                return;
            }
        }
        return c;
    }

     private static dataTyteConvert(value:any,type:any,attrInfoOptions:AttrInfoOptions):any{
        switch(type.name){
            case "String":
                if(typeof value === "string"){
                    return value;
                }
                else{
                    //cast to string
                    return String(value);
                }
             //   break;
            case "Number":
                if(typeof value ==="number"){
                    return value;
                }
                else{
                    //cast to Number
                    let rvalue=Number(value);
                    if(isNaN(rvalue)){
                        console.error("error in "+ value+" convert to number!");
                        throwError(new Error("error in "+ value+" convert to number!"));
                        return;
                    }               
                    else
                    return rvalue;
                }
              //  break;
            case "Boolean":
                if(typeof value==="boolean"){
                    return value;
                }
                else{
                    console.error("error in "+ value+" is not the boolean!");
                    throwError(new Error("error in "+ value+" is not the boolean!"));
                    return;
                }
               // break;
            case "Array":
                if(attrInfoOptions!=null&&attrInfoOptions.arrayClassName!=null)
                {
                    if(window[attrInfoOptions.arrayClassName])
                    {
                        return this.parseJsonArray(attrInfoOptions.arrayClassName,value);
                    }
                }
                else{
                    console.error("error in "+ value+", the type is array, but cannot get class name");
                    throwError(new Error("error in "+ value+", the type is array, but cannot get class name"));
                    return;
                }
            default:
                return null;
        }
        // if(type.name==="String")
        // {
        //     if(typeof value === "string"){
        //         return value;
        //     }
        //     else{
        //         //cast to string
        //         return String(value);
        //     }
        // }
        // else if(type.name==="Number"){
        //     if(typeof value ==="number"){
        //         return value;
        //     }
        //     else{
        //         //cast to Number
        //         let rvalue=Number(value);
        //         if(isNaN(rvalue)){
        //             console.error("error in "+ value+" convert to number!");
        //             throwError(new Error("error in "+ value+" convert to number!"));
        //             return;
        //         }               
        //         else
        //         return rvalue;
        //     }
        // }
        // else if(type.name==="Boolean"){
        //     if(typeof value==="boolean"){
        //         return value;
        //     }
        //     else{
        //         console.error("error in "+ value+" is not the boolean!");
        //         throwError(new Error("error in "+ value+" is not the boolean!"));
        //         return;
        //     }
        // }
        // else if(type.name==="Array")
        // {
        //     if(attrInfoOptions!=null&&attrInfoOptions.arrayClassName!=null)
        //     {
        //         if(window[attrInfoOptions.arrayClassName])
        //         {
        //             return this.parseJsonArray(attrInfoOptions.arrayClassName,value);
        //         }
        //     }
        //     else{
        //         console.error("error in "+ value+", the type is array, but cannot get class name");
        //         throwError(new Error("error in "+ value+", the type is array, but cannot get class name"));
        //         return;
        //     }
          
        // }
        // else{
        //     return null;
        // }
    }
}