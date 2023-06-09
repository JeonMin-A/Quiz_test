const express = require('express');
const path = require('path');
const app = express();

app.listen(5000, function(){
    console.log("서버 정상 열림 5000")
})

// app.use(express.static(path.join(__dirname, 'waterworks/dist')));
// app.get('/', function(req, res){
//     res.sendFile(path.join(__dirname, 'waterworks/dist/index.html'))
// })

app.use(express.static(path.join(__dirname, 'dist')));
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'dist/index.html'))
})

// app.get('/', function(req, res){
//     res.sendFile(__dirname +'/index.html');
//     // sendFile - 파일을 보낼 수 있는 함수
//     // __direname - 현재 파일의 경로
// })
// app.get('/about', function(req, res){
//     res.sendFile(__dirname +'/about.html');
// })
// app.get('/about/list', function(req, res){
//     res.sendFile(__dirname +'/aboutList.html');
// })
// app.get('/detail', function(req, res){
//     res.sendFile(__dirname +'/detail.html');
// })


app.get('*', function(req, res){  //라우터안되는거 작동시키게 해줌
    res.sendFile(path.join(__dirname, 'dist/index.html'))
})

module.exports = app;
