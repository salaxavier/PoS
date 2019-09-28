const express = require('express');
const Blockchain = require('../blockchain/blockchain');
const bodyParser = require('body-parser');
// create a new blockchain instance
const blockchain = new Blockchain();
//get the port from the user or set the default port
const HTTP_PORT = process.env.HTTP_PORT || 3001;

const P2pServer = require('./p2p-server.js');
const p2pserver = new P2pServer(blockchain);                                    // passing blockchain as a dependency

//create a new app
const app  = express();

//using the body parser middleware
app.use(bodyParser.json());


//EXPOSED APIs

//api to get the blocks
app.get('/blocks',(req,res)=>{

    res.json(blockchain.chain);

});

//api to add blocks
app.post('/mine',(req,res)=>{
    const block = blockchain.addBlock(req.body.data);
    console.log(`New block added: ${block.toString()}`);
    //console.log(`Data posted: ${req.body.data}`)
    res.redirect('/blocks');
    p2pserver.syncChain();
});

// app server configurations
app.listen(HTTP_PORT,()=>{
    console.log(`listening on port ${HTTP_PORT}`);
})

p2pserver.listen(); // starts the p2pserver
