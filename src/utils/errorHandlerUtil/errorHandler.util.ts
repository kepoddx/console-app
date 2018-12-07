import * as prettyjson from 'prettyjson';
/**
 * @summary https://rclayton.silvrback.com/custom-errors-in-node-js
 */


export class ApplicationError extends Error {
    error: any;
    details: any;
    funcName = this.name;
    constructor(error, details) { 
        super(error);

        this.name = this.constructor.name;
        this.details = details;
   // This clips the constructor invocation from the stack trace.
   // It's not absolutely essential, but it does make the stack trace a little nicer.
   // @see https://nodejs.org/api/errors.html#errors_error_capturestacktrace_targetobject_constructoropt  
        // Error.captureStackTrace(this, this.constructor);     
    }

}

