// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');

venom
  .create()
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  client.onMessage((message) => {
    if (message.body === '00' && message.isGroupMsg === false) {
      client
        .sendImageAsStickerGif(message.from,'./gif/STK-20210415-WA0004.webp')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }
    else if (message.body === '01' && message.isGroupMsg === false) {
      client
        .sendImageAsStickerGif(message.from,'./gif/STK-20210315-WA0003.webp')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }
    else if (message.body === '02' && message.isGroupMsg === false) {
      client
        .sendImageAsStickerGif(message.from,'./gif/gagnam-style.gif')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
        
      }
    else if (message.body === '03' && message.isGroupMsg === false) {
        client
          .sendImageAsStickerGif(message.from,'https://pa1.narvii.com/6811/79876a66e2aea5cfe4c058978a1516b1cadc7bb8_hq.gif')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          }); }
  
    });
}
