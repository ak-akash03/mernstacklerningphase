# library v/s framework

## library
- A library is a collection of pre-written code that can be used to perform specific tasks.

eg. Axios

## framework
- a framework is a set of pre-written code that provides a structure for doveloping software applications.

eg. Express

# Express
a node.js web application framework that helps us to make web applications it is used for server side programming.


1) listen for incomming requst
2) parse Data
3) match response with routes
4) suteble response

# Gettimg started with express

        const express = require("express")
        const app = express()

        <!-- let port = 3000; -->
        let port = 8080;

        app.listen(port, () => {
            console.log(`app listening on port ${port}`);
        })

## ports
### are the logical endpoints of a network connection that is used to exchange information between a web server and a web client.

