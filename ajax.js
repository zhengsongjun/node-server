var xhr = new XMLHttpRequest()
xhr.open('GET','/getWeather',true)
xhr.send()
xhr.onload = function(){
    console.log(JSON.parse(xhr.responseText))
}
