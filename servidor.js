// importar las librerias necesarias

const moment = require('moment');
const http = require('http');
const fs = require('fs');
const process = require('process');
const nodemailer = require('nodemailer');


// Definir las constantes 

const host = "localhost";
const port = 8080;



// crear el servidor

const server = http.createServer( (request, response) => {
    
    
    
    if (request.url === "/") {

        // Http Headers
        response.writeHead(200, {
          'Content-Type' : 'text/html'
        });

        // Http Body
        response.write('<h1>Ya se Node!!!</h1>');

        // Send http message
        response.end();
    }
    else

    if (request.url === "/hw") {

        // Http Headers
        response.writeHead(200, {
          'Content-Type' : 'text/html'
        });

        // Http Body
        response.write('<p style="color: orange">Happy Halloween!</p>');

        // Send http message
        response.end();
    }

    else

    if (request.url === "/myjson") {

        // Http Headers
        response.writeHead(200, {
          'Content-Type' : 'application/json'
        });

        // Http Body
        response.write(JSON.stringify({ "nombre": "Espagueti", "apellido": "Volador" }));

        // Send http message
        response.end();
    }

    else


    if (request.url === "/timenow") {

        // Http Headers
        response.writeHead(200, {
          'Content-Type' : 'text/html'
        });

        const ahora = moment().format("LTS");

        // Http Body
        response.write(ahora);

        // Send http message
        response.end();
    }

    else

    if (request.url === "/web") {
        fs.readFile('front/index.html', (error, data) => {

            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(data);
            response.end();

        });
    }

    else 

    if (request.url === "/styles") {
        fs.readFile('front/css/styles.css', (error, data) => {

            response.writeHead(200, { 'Content-Type': 'text/css' });
            response.write(data);
            response.end();
        

        });
    }

    else

    if (request.url === "/img") {
        fs.readFile('front/img/img.jpg', (error, data) => {

            response.writeHead(200, { 'Content-Type': 'text/img' });
            response.write(data);
            response.end();
        

        });
    }
    

    if (request.url === "/correo") {

        // Http Headers
        response.writeHead(200, {
          'Content-Type' : 'text/text'
        });

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'girosintornillo0@gmail.com',
              pass: 'zkzxwaedglwlqypf'
            }
          });

         

        let mailOptions = {
        from: 'girosintornillo0@gmail.com',
        to: 'juan75amieva@gmail.com',
        subject: 'Correo enviado desde el servidor',
        text: 'Hola Profe, soy  Juan Amieva, del curso Node-Express. Medio tarde pero sigo avanzando. Un saludo!!!'
      };


      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

        

       

        // Send http message
        response.end();
    }

    else
    
    
      
     
      
      

    

             // Http Headers
        {response.writeHead(401, {
            'Content-Type' : 'text/html'
        });

        // Http Body
        response.write('<p style="font-size:100px;color:red">Estos androides no son los que buscas</p>');

        // Send http message
        response.end();
    }

    

});

// ----- Start server -----

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});