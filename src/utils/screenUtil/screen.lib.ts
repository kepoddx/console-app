import * as prettyjson from 'prettyjson';
import * as colors from 'colors';
import { ENV } from '../config';


export class Screen {
    clear() {
        process.stdout.write('\\033c');
    }

    log(data: any, mode?: any) {
        let output;

        switch (mode) {
            case 'string':
                output = JSON.stringify(data);
                console.log('called')
                break;
            case 'pretty':
                let ops = {
                    keysColor: 'cyan',
                    dashColor: 'magenta',
                    stringColor: 'white',
                    numberColor: 'yellow'
                };
                output = prettyjson.render(data, ops);
                break;
            case 'error':
                let ops2 = {
                    stringColor: 'red'
                };
                output = prettyjson.render(data, ops2);
                break;
            default:
                 output = data;

        }
        console.log(output)        
    }

    static notify(from: string, message: any){
        if(ENV != 'dev') return;
        let output;
        let ops = {
            keysColor: 'cyan',
            dashColor: 'magenta',
            stringColor: 'white',
            numberColor: 'yellow'
        };        
        output = prettyjson.render(`[${from}() -- File: ${__filename}]:\n[MESSAGE]: ${JSON.stringify(message)}`, ops);
        console.log(colors.cyan(output))
    }
}