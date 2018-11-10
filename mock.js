var http = require('http')
var fs = require('fs')

http.createServer(function(req,res){
    if(req.url == '/favicon.ico'){
        return false
    }else{
        switch(req.url){
            case '/getWeather':
                res.end(JSON.stringify({a:1,b:2}))
                break
            case '/user/123':
                res.end(fs.readFileSync(__dirname+'/img/1.jpg'))
                break
            default:
                res.write(fs.readFileSync(__dirname+req.url))
                res.end()
        }
    }
}).listen(8080)
console.log('visit localhost:8080')