// const fs =require('node:fs');
// const data=fs.readFileSync('./intro.txt');
// console.log(data);
// console.log(data.toString());

// buffer 


// const b=new  Buffer.from('BIHAR');
// console.log(b.toString());                  
// const fs = require('fs');

// FileSystem.writeFileSync('./log.txt',"10th april today");


// const fs = require('fs');
// console.log("start");
// const data=fs.readFileSync('./intro.txt',{encoding:'utf8'});
// console.log(data);
// console.log('end');

// const { readFile } = require('fs');
// const fspromises=require('fs/promises');
// console.log("start");
// const pr = fspromises.readFile('./intro.txt',{encoding:'utf8'});
// pr.then((res)=>{
//     console.log(res);
// });
// console.log("end");



// const fs=require('fs');
// fs.readFile('./intro.txt',{encoding:"utf8"},(err,data)=>{
//     console.log(data);
// });


// const fs=require('fs/promises');
// const pr=fs.readFile('./intro.txt');
// console.log(pr);


// const http=require('http');
// const app=http.createServer((req,res)=>{
//     console.log('request recived');
//     console.log(req.url);
//     res.end("hello!");
// });

//  app.listen(1400);
//  // http://localhost:1400/5 


 //mini project 

 
// const http=require('http');

// const htmlTemplate=
// const page=
// const app=http.createServer((req,res)=>{
//     console.log('request recived');
//     console.log(req.url);
//     res.end("hello!");
// });

//  app.listen(1400);
 



// const http=require('http');

// let page;

// const htmlTemplate=`
// <!DOCTYPE 
// <HTML>
//    <HEAD> 
   
//    </HEAD> 
//    <BODY>
//         _PRODUCTS_CARD_ 
//    </BODY>
   
//    </HTML>`

//    const cardTemplate=`
//    <div class="product-card">
//    <h4>title</h4>
//    </div>
//    `
//    page =htmlTemplate.replace('_PRODUCTS_CARD_',cardTemplate);
            
// const server=http.createServer((req,res)=>{
//     //console.log("received");
//     console.log(req.url);
//     res.writeHead(200,{
//         'content-type': 'text/html'
//     })
//     res.end(page);
// });
// server.listen(1400,()=>{
//     console.log("response is clear Mr.Anup yadav*");
// })






const http=require('http');
const htmlTemplate=`
<!DOCTYPE 
<HTML>
   <HEAD> 
   
   </HEAD> 
   <BODY>
      products_card
   </BODY>`

   const cardTemplate=`
   <div class='products_card'>
   <h4>title</h4>
   <p>INFO</p>
   </div>
   `
   const card1=cardTemplate 
                  .replace('title','Xiomi')
                  .replace('INFO','this is a china mobile')
    
    const card2=cardTemplate
                  .replace('title','samsung') 
                  .replace('INFO','this is also a chinese mobile')
        
    const allCards= card1+card2;
   const page =htmlTemplate.replace('products_card',allCards);
            
const server=http.createServer((req,res)=>{
    //console.log("received");
    console.log(req.url);
    res.writeHead(200,{
        'content-type': 'text/html'
    })
    res.end(page);
});

server.listen(1400);

