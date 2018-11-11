var http = require('http')
var fs = require('fs')
var url = require('url')

http.createServer(function(req,res){
    if(req.url == '/favicon.ico'){
        return false
    }else{
        var pathObj = url.parse(req.url,true)
        switch(pathObj.pathname){
            case '/getWeather':
                var ret
                if(pathObj.query.city == 'beijing'){
                    ret = {
                        city:'北京',
                        weather:'sum'
                    }
                }else{
                    ret = {
                        city:pathObj.query.city ,
                        weather:'不知道'
                    }
                }
                res.end(JSON.stringify(ret))
                break
            case '/user/123':
                res.end(fs.readFileSync(__dirname+'/img/1.jpg'))
                break
            default:
                res.write(fs.readFileSync(__dirname+pathObj.pathname))
                res.end()
        }
    }
}).listen(8080)
console.log('visit localhost:8080')