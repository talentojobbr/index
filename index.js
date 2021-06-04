const venom = require('venom-bot');

venom
  .create()
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  client.onMessage((message) => {
    if (message.body === '2mjGD8!3p0F@' && message.isGroupMsg === false) {
      client
        .sendImageAsSticker(message.from,'https://downloadmemes.com/wp-content/uploads/2021/06/STK-20210421-WA0030.png')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }
    else if (message.body === 'fbbVCpoHM#ch' && message.isGroupMsg === false) {
      client
        .sendImageAsSticker(message.from,'https://downloadmemes.com/wp-content/uploads/2021/06/STK-20210421-WA0033.png')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }
    else if (message.body === '15YT!SO^BAhW' && message.isGroupMsg === false) {
      client
        .sendImageAsSticker(message.from,'https://downloadmemes.com/wp-content/uploads/2021/06/STK-20210421-WA0032.png')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }
    
    else if (message.body === 'zNAjlM^gN$h2' && message.isGroupMsg === false) {
      client
      .sendImageAsStickerGif(message.from,'https://downloadmemes.com/wp-content/uploads/2021/06/STK-20210526-WA0120.gif')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
        
      }
    else if (message.body === 'a5Oy_%F!_14h(HP' && message.isGroupMsg === false) {
        client
          .sendImageAsStickerGif(message.from,'https://downloadmemes.com/wp-content/uploads/2021/06/STK-20210421-WA0043.gif')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          }); }
    else if (message.body === '_I5DeM1(d}FJxY$' && message.isGroupMsg === false) {
            client
              .sendImageAsStickerGif(message.from,'./gif/STK-20210421-WA0042.webp')
              .then((result) => {
                console.log('Result: ', result); //return object success
              })
              .catch((erro) => {
                console.error('Error when sending: ', erro); //return object error
              }); }
    else if (message.body === 'v)z[ic&y;L$nvJz' && message.isGroupMsg === false) {
      client
        
        
        .sendImageAsSticker(message.from,'https://downloadmemes.com/wp-content/uploads/2021/06/STK-20210421-WA0034.png')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }
    else if (message.body === 'IGZZ5pY,cYAnnu1' && message.isGroupMsg === false) {
      client
        
        
        .sendImageAsStickerGif(message.from,'https://downloadmemes.com/wp-content/uploads/2021/06/STK-20210421-WA0000.gif')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }
    else if (message.body === 'ISPqQ6@bE=dCJp' && message.isGroupMsg === false) {
      client
        
        
      .sendImageAsStickerGif(message.from,'./gif/STK-20210326-WA0000.webp')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }
    else if (message.body === 'jse4~K[Z,QI1Pfl' && message.isGroupMsg === false) {
      client
        
        
      .sendImageAsStickerGif(message.from,'https://downloadmemes.com/wp-content/uploads/2021/06/STK-20210315-WA0006.gif')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }
    else if (message.body === '6KEg(02,2=v1#v6' && message.isGroupMsg === false) {
      client
        
        
        .sendImageAsSticker(message.from,'https://downloadmemes.com/wp-content/uploads/2021/06/9f3805c4-36eb-4865-95e7-1cc30029bd3b.png')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }
    else if (message.body === '7{gMYksB^F$CGw,' && message.isGroupMsg === false) {
      client
        
        
        .sendImageAsSticker(message.from,'https://downloadmemes.com/wp-content/uploads/2021/06/7eb0fb91-09fd-4619-917c-8a27aa2528b7.png')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }
    else if (message.body === '+idAQKzNdA}_;2P' && message.isGroupMsg === false) {
      client
        
        
        .sendImageAsSticker(message.from,'https://downloadmemes.com/wp-content/uploads/2021/06/5d414b86-c51a-4223-a8d1-4a1e7d2c53ac.png')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }
    else if (message.body === '[xV3L@kQz4dyXS(' && message.isGroupMsg === false) {
      client
        
        
        .sendImageAsSticker(message.from,'https://downloadmemes.com/wp-content/uploads/2021/06/eb3ca849-060f-4605-84dc-142fec2a9c30.png')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }
    else if (message.body === '3c;YYe!]9FJJ}A3' && message.isGroupMsg === false) {
      client
        
        
        .sendImageAsSticker(message.from,'https://downloadmemes.com/wp-content/uploads/2021/06/STK-20210421-WA0028.png')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }
    else if (message.body === 'QKQ90ZXHq9$vUi{' && message.isGroupMsg === false) {
      client
        
        
        .sendImageAsSticker(message.from,'https://downloadmemes.com/wp-content/uploads/2021/06/STK-20210421-WA0029.png')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }
    else if (message.body === '=0Q(#2Hvmgsg$Vq' && message.isGroupMsg === false) {
      client
        
        
        .sendImageAsSticker(message.from,'https://downloadmemes.com/wp-content/uploads/2021/06/STK-20210421-WA0031.png')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }
    else if (message.body === 'mbs1pd={2Z^L;4L' && message.isGroupMsg === false) {
      client
        
        
        .sendImageAsSticker(message.from,'https://downloadmemes.com/wp-content/uploads/2021/06/STK-20210421-WA0070.png')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }
    
  
    });
}

