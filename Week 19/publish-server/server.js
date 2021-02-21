let http = require('http');
let https = require('https');
let unzipper = require("unzipper");
let querystring = require("querystring");

//2. auth路由： 接受code,用code + client_id + client_secret 换token

function auth(request,response) {
    let query = querystring.parse(request.url.match(/^\/auth\?([\s\S]+)$/)[1]);
    console.log(query);
    getToken(query.code,function(info) {
        console.log(info);
        //response.write(JSON.stringify(info));
        response.write(`<a href='http://localhost:8083/?token=${info.access_token}'>publish</a>`);
        response.end();
    });
}

function getToken(code,callback) {
    let request = https.request({
        hostname: "github.com",
        path:`/login/oauth/access_token?code=${code}&client_id=Iv1.4a40fbe3e45ed237&client_secret=cb2a3f026c6d515c7b3fc12c428360c32d5d6b53`,
        port: 443,
        method: "POST"
    },function(response) {
        let body = "";
        response.on("data",chunk => {
            body += (chunk.toString());
        })
        response.on("end",() => {
            callback(querystring.parse(body));
        })
    })
    request.end();
}

//4. publish路由： 用token获取用户信息，检查权限，接受发布
function publish(request,response) {
    let query = querystring.parse(request.url.match(/^\/auth\?([\s\S]+)$/)[1]);
    getUser(query.token,info => {
        if(info.login === "ouyang017"){
          request.pipe(unzipper.Extract({ path: '../server/public/' }));
          request.on('end',function() {
              response.end('success!');
          })
        }
    });
}

function getUser(token,callback) {
    let request = https.request({
        hostname: "api.github.com",
        path:`/user`,
        port: 443,
        method: "GET",
        headers:{
            Authorization: `token ${token}`,

        }
    },function(response) {
        let body = "";
        response.on("data",chunk => {
            body += (chunk.toString());
        })
        response.on("end",() => {
            callback(JSON.parse(body));
        })
    })
    request.end();
}

http.createServer(function(request,response) {
    if(request.url.match(/^\/auth\?/))
        return auth(request,response);
    if(request.url.match(/^\/publish\?/))
        return publish(request,response);

    // request.pipe(unzipper.Extract({ path: '../server/public/' }));

    // console.log(request.headers);
    // let outfile = fs.createWriteStream("../server/public/tmp.zip");
    // request.pipe(outfile);
    
    // request.on("data",chunk => {
    //     console.log(chunk.toString());
    //     outfile.write(chunk);
    // })
    // request.on("end",() => {
    //     outfile.end();
    //     response.end("Success!");
    // })
}).listen(8080);