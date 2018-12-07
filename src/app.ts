import { isFile, mkPath, isDir, mkDir, rnameDir, saveJson, saveCsv } from './utils';
import * as fs from 'fs';
import * as colors from 'colors';


let file = mkPath('src', 'app.ts');
let dir = mkPath('src', 'utils');
let newDir = mkPath('testing');
let chgDir = mkPath(newDir, 'f1');
let saveFile = mkPath('jsonTes');
let csvFile = mkPath('testFIle.csv');
(async () => {
    // let r = await isFile(file);
    // let d = await isDir(dir);
    // let nd = await mkDir(newDir)
    // let cd = await rnameDir(newDir, `${newDir}f1`);
    // console.log(r)
    // console.log(d)
    // console.log(nd)
    // console.log(cd)
    // let data = [
    //     { "name": "Keith", "id": "Test"},
    //     { "name": "Rea", "id": "Test"},
    //     { "name": "Ptolemy", "id": "Test"},
    // ]
    // let js = await saveJson(saveFile, data)
    // try {
    //     let sc = await saveCsv(csvFile, [
    //         {"id": "name", "title": "One title"},
    //         {"id": "type", "title": "Two Title"},
    //      ], 
    //         [
    //             {name: "keiht", type: "father"},
    //             {name: "ptole", type: "son"},
    //          ]
    //      )
    //     console.log(sc)       
    // } catch (error) {
    //     console.log(colors.red(error.details))
    // }
})();