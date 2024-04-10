// setTimeout(()=>{console.log('Timeout 1...')},20000)
// console.log("start");
// setTimeout(()=>{console.log('Timeout 2...')},10000)
// console.log("intermediate");
//     console.log("end");
// function createorder(x, fn){
//     console.log(x);
//    fn('lik123');
// }
// function makepayment(orderID){
//     console.log(orderID);
// }
// createorder('soap',makepayment);



// const  pr=new Promise((resolve,reject)=>{
// if(true)
// {
//     setTimeout(()=>{
//         resolve();
//     },10000)};
//}

// }
// else {
//     reject();
// }

// });
// console.log(pr);

// setTimeout(()=>{
//     console.log('first comment'),0});

// const pr=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("some error");},0);

    
// });


// setTimeout(()=>{
//     console.log('first comment'),0});
// console.log(pr);
// pr.then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{console.log(err)});





setTimeout(()=>{
    console.log('first comment'),0});

const pr=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("some error");},0);

    
});


setTimeout(()=>{
    console.log('first comment'),0});
console.log(pr);
pr.then((res)=>{
    console.log(res);
})
.catch((err)=>{console.log(err)});




