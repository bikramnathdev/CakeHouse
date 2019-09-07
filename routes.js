const fs = require('fs');

const requestHandler = (request,response) => {
    const url = request.url;
    const method = request.method;
    if (url === '/') {
        // response.setHeader('Content-Type', 'text/html');
        response.write (`<html>
        <head>
            <title>This is my first Node.js File</title>
        </head>
        <body>
            <h1>Fill Up the form</h1>
            <form action='/message' method='POST'>
                <input type="text" name="message">
                <button type="submit"> Submit </button>
            </form>
        </body>
        </html>`);
    return response.end();
    }
    if (url === '/message' && method === 'POST') {
        const body =[];
        request.on('data',(chunk)=> {
            body.push(chunk);
        });
        request.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, err => {
                response.statusCode=302;
                response.setHeader('Location', '/');
                return response.end();
            });
        });
    }
};

module.exports ={
   handler : requestHandler
};