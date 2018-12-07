import * as fs from 'fs';
import * as path from 'path';
import * as jsonfile from 'jsonfile';

import { promisify, format } from 'util';
import Csv = require('csv-writer');

import { Screen as scr } from '../screenUtil';
import { ApplicationError } from '../errorHandlerUtil';

/** 
 * Promisify FS methods 
*/
const exists = promisify(fs.stat);
const createdir = promisify(fs.mkdir);
const rename = promisify(fs.rename);
const readdir = promisify(fs.readdir);
const removedir = promisify(fs.rmdir);
const copyfile = promisify(fs.copyFile);
const appendfile = promisify(fs.appendFile);
const deletefile = promisify(fs.unlink);
const createfile = promisify(fs.open);

const saveJsonToFile = promisify(jsonfile.writeFile);
/**
 * 
 * Library Methods
 */


 export type StrBool  = string | fs.PathLike;

export function mkPath(...pathsParts: any): fs.PathLike {
    let result;
    try {
        path.join(process.cwd(), ...pathsParts);
    } catch (error){

        throw new ApplicationError(error, {
            funcName: mkPath,
            message: error.message,
            type: 'FUNCTION_CALL_ERROR',
            file: __filename
        });
        
    }
    return result;
}

export async function isFile(file: fs.PathLike): Promise<boolean> {
    
    let r;
    try {
        let data =  await exists(file);
        scr.notify('FUNCTION isFile', data)
        r = data.isFile();
    } catch (error) {

        throw new ApplicationError(error, {
            funcName: exists,
            message: error.message,
            type: 'FUNCTION_CALL_ERROR',
            file: __filename
        });
        r = false
    }
    return r
}

export async function isDir(dir: fs.PathLike): Promise<boolean> {
    let r;
    try {
        let data =  await exists(dir);
        scr.notify('FUNCTION isDir', data)
        r = data.isDirectory();
    } catch (error) {

        throw new ApplicationError(error, {
            funcName: exists,
            message: error.message,
            type: 'FUNCTION_CALL_ERROR',
            file: __filename
        });

        r = false
    }
    return r
}

export async function mkDir(dir:fs.PathLike): Promise<any> {
    let d; 
    try {
        let newDir = await createdir(dir);
        scr.notify('FUNCTION mkDir', newDir)
        d = true;
    } catch (error) {
        throw new ApplicationError(error, {
            funcName: createdir,
            message: error.message,
            type: 'FUNCTION_CALL_ERROR',
            file: __filename
        });
        d = false;
    }

    return d;

}

export async function rnameDir(olddir:fs.PathLike, newdir: fs.PathLike): Promise<any> {
    let d; 
    try {
        let result = await rename(olddir, newdir);
        scr.notify('FUNCTION rnameDir', result)
        d = true;
    } catch (error) {
        throw new ApplicationError(error, {
            funcName: rename,
            message: error.message,
            type: 'FUNCTION_CALL_ERROR',
            file: __filename
        });

        d = false;
    }
    
    return d;
    
}

export async function saveJson(file:fs.PathLike, data: any) {
    let result;
    try {
        let r = saveJsonToFile(file, data);
        scr.notify('FUNCTION saveJson', r);
        result = true;
    } catch (error) {

        throw new ApplicationError(error, {
            funcName: saveJsonToFile,
            message: error.message,
            type: 'FUNCTION_CALL_ERROR',
            file: __filename
        });
        result = false;
    }
    return result;
}

export async function saveCsv(file: fs.PathLike, headers: Object[], data:any){
    let result;
    try {
        let writer = Csv.createObjectCsvWriter({path: file, header: headers});
         let save = await writer.writeRecords(data);
        result = true;
    } catch (error) {

        throw new ApplicationError(error, {
            funcName: Csv.createObjectCsvWriter,
            message: error.message,
            type: 'FUNCTION_CALL_ERROR',
            file: __filename
        });
        result = false;
    }
    return result;
}

