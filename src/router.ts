

function router(req:any,res:any,next:()=>{}) {
    
    console.log('req.path:::',req.path);

    try{
            let script:string = __dirname + "/restful" + req.path;
        let module:(res:any)=>{} ;
        module = require(script).api
        module(res);
    } catch(err) {
        console.log(err);
        next();
    }

    


}

function test() {
    console.log('export test')
}

//module.exports = router;
export {router,test}