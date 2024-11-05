const http = require('http');
const HOSTNAME ='Localhost'
const port=9000

const server = http.createServer((req , res )=>{

})

server.listen(port,HOSTNAME,()=>{
    console.console.log('server running on port ${port}');
    
})