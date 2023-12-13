class ApiErrorHandler extends Error {
    constructor(
        statusCode,
        message= "something wents wrong",
        error=[],
        stack=""
    ){
       super(message);
       this.statusCode=statusCode;
       this.message=message;
       this.errors=error;
    //    this.stack=stack;
       this.data=null;
       this.success=false

       if(stack){
        this.stack=stack
       }else{
        Error.captureStackTrace(this, this.constructor)
       }
    }
}