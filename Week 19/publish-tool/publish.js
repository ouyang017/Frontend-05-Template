let http = require('http');
let fs = require("fs");
let child_process = require("child_process");
let querystring = require("querystring");
const archiver = require('archiver');

// 1. 打开 GET https://github.com/login/oauth/authorize

child_process.exec(`open https://github.com/login/oauth/authorize?client_id=Iv1.4a40fbe3e45ed237`);

// 3. 创建server,接受 token , 后点击发布
http.createServer(function(request,response) {
    let query = querystring.parse(request.url.match(/^\/\?([\s\S]+)$/)[1]);
    publish(query.token);
}).listen(8083);

function publish(token){
    let request = http.request({
        hostname: "127.0.0.1",
        port: 8080,
        path:`/publish?token=${token}`,
        method: "POST",
        headers:{
            'Content-Type': 'application/octet-stream'
        }
    },response => {
        console.log(response);
    });
    
    const archive = archiver('zip', {
        zlib: { level: 9 } // Sets the compression level.
    });
    
    archive.directory('./sample/', false);
    archive.finalize();
    
    archive.pipe(request);
}
/*
let request = http.request({
    hostname: "127.0.0.1",
    port: 8080,
    method: "POST",
    headers:{
        'Content-Type': 'application/octet-stream'
    }
},response => {
    console.log(response);
});

//let file = fs.createReadStream("./sample.html");

const archive = archiver('zip', {
    zlib: { level: 9 } // Sets the compression level.
});

archive.directory('./sample/', false);
archive.finalize();

archive.pipe(request);

//file.pipe(request);

// file.on("end",()=>{
//     request.end();
// })

// file.on("data",chunk => {
//     console.log(chunk.toString());
//     request.write(chunk);
// });

// file.on("end",chunk => {
//     console.log("read finished");
//     request.end(chunk);
// })
*/