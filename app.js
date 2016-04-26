// 加载所需模块
var http = require("http");

// 创建Server
var app = http.createServer(function(request, response) {
    response.writeHead(200, {
        "Content-Type": "text/plain"
    });
    response.end("Hello hydddyyy!\n");
});

// 启动Server
app.listen(1984, "localhost");