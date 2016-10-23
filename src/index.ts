const express = require('express');
const bodyParser = require('body-parser')
const staticFolder = require('serve-static')
const fs = require('fs')


const rout = require('./router').router


function run() {
    let server = express()
    server.use(bodyParser.json())
    server.use(bodyParser.urlencoded({ extended: true }))
    server.use(staticFolder(__dirname+"/../../"));

    

    console.log('hh:',__dirname)
    //server.use(rout);

    server.use("/test1",function(req:any,res:any,next:any){
                    fs.createReadStream(__dirname + '/test_page/test1.html').pipe(res);
                })
    server.use(function(req:any,res:any,next:any){
                fs.createReadStream(__dirname + '/test_page/index.html').pipe(res);
            })

    server.listen('8088')

}

run();