import http from 'http';

const port = 8000; 
// const port = process.env.PORT;

const server = http.createServer((req, res) => {

    //to make the written text an html we will specify the header method 
    res.setHeader('Content-Type', 'text/html');

    // now this will out put the content as plain text i.e <h1>Wirtten</h1>
    //res.setHeader('Content-Type', 'text/plain');

    res.statusCode = 200; // status code for success 

    // the above header and status code can be written combined with the following way 
    // res.writeHead(
    //     500,
    //     { 'Content-Type': 'application/json' }
    // )

    // write method is used to write to the response body
    // res.write(JSON.stringify(
    //     {
    //         message: 'Server Error!'
    //     }
    // ));  // this will be written as html in the response body  // to make the written text an html we will specify the header method  res.setHeader('Content-Type', 'text/html');   res.statusCode = 200; // status code for success  res.write('<h1>Hello World!</h1>');  // this will be written as html in the response body   res.end();  // the end method can also be used to write to the server


    res.write("<h1>Hello World!</h1>");
    res.write('Wirtten!!');
    // the end method can also be used to write to the server
    res.end();
})

server.listen(port, () => console.log(`Server is running on port ${port}`));  