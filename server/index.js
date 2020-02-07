console.log('aaaaaa');
const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    console.log('url: ', req.url);

    const filename = req.url === '/' ? req.url + 'index.html' : req.url;


    fs.readFile(`public${filename}`, (err, body) => {

        if (err) {
            console.log('Error:', err);
            res.write('404');
            res.end();
            return;
        }

        console.log('bbb', body);
        res.write(body);
        /*setTimeout(() => {
            res.write('hello again');
            res.end();
        }, 2000);*/
        res.end();
    });

    const body = fs.readFileSync(`public${filename}`);

    console.log('aaa');

});

server.listen(3000);