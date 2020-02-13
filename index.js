const express = require('express');
const server = express();
const visitorRoutes = require('./routes/visitors-routes.js')
const adminRoutes = require('./routes/admin-routes.js')
server.use(express.json());
server.use("/api/visitors", visitorRoutes)
server.use("/api/admin", adminRoutes)

//Define our port variable
const port = process.env.PORT || 5000;
const base = "localhost:"
//Instruct our server to listen fort connections on that port
server.listen(port, ()=> console.log(`\n Running on port ${base}${port}/\n`))

server.get('/dog', (req, res) => {
  res.send("Woof Woof! We Out the Pound!")
});

server.get('/register', (req, res) => {
    res.send("registering new user")
});
