const express = require('express');
const bodyParser = require('body-parser')
const staticFolder = require('serve-static')
const fs = require('fs')


function run() {
    let server = express()
    server.use(bodyParser.json())
    server.use(bodyParser.urlencoded({ extended: true }))
    server.use(staticFolder(__dirname+"/../../"));

    

    console.log('hh:',__dirname)

    server.use("/test1",function(req:any,res:any,next:any){
                    fs.createReadStream('./test_page/test1.html').pipe(res)
                })

    server.listen('8088')

}

run();