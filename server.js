var http = require('http')
var url = require('url')
var path = require('path')
var fs = require('fs')

function staticRoot(static,req,res){
    var pathObj = url.parse(req.url,true)
    if(pathObj.pathname === '/'){
        pathObj.pathname = 'index.html'
    }
    var filePath = path.join(static,pathObj.pathname)
    fs.readFile(filePath,function(err,fileContent){
        if(err){
            res.write('404.Not found')
        }else{
            res.write(fileContent)
            res.end()
        }
    })
}

var server = http.createServer(function(req,res){
    if(req.url === '/favicon.ico'){
        return false
    }else{
        res.setHeader('Content-type','charset=utf-8')
        staticRoot(__dirname,req,res)
    }
}).listen(8080)

