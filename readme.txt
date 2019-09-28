PoS JS using Node.js


Tut:
https://medium.com/coinmonks/implementing-proof-of-stake-part-2-748156d5c85e



Start:

Terminal 1
node index

Terminal 2
HTTP_PORT=3002 P2P_PORT=5002 PEERS=ws://localhost:5001 node index

Terminal 3
HTTP_PORT=3003 P2P_PORT=5003 PEERS=ws://localhost:5002,ws://localhost:5001 node index




POSTman (distributed storage)
GET localhost:3001/blocks
POST localhost:3001/mine
Body > RAW > JSON :
{
	"data": "yo"
}


POSTman (wallet and transaction-pool)
POST localhost:3001/mine
Body > RAW > JSON :
{
 “to”:”rand-address”,
 “amount”:10,
 “type”: “TRANSACTION”
}



Modules:

express
npm i express --save

crypto-js
npm i crypto-js --save

bodyparser
npm i body-parser --save

ws (web-socket)
npm i ws --save

elliptic
npm i elliptic --save

uuid
npm i uuid --save
