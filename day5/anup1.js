// let arr=[2,10,28,11];
// function printpretty(elem){
//     console.log(':',elem);
// }
// function printArray(arr){
//     for(let i=0;i<arr.length;i++){
//     printpretty(arr[i]);
// }
// arr.forEach(printpretty);
// }
// printArray(arr);


// arr.forEach((a) =>) {
//     console.log(':',a,b,c,d);

// }
// arr.forEach((a,b,c)) =>{
//     console.log(':',a,b,c);

// }
// printArray(arr);
// console.log('GEC Start');
// function printpretty(elem)
// {
//     console.log('prettystart');
//     let ans=2+3;
//     console.log(ans);

//     console.log('prettyfool');
// }
//     setTimeout(printpretty, 10000);
//     console.log('GEC End');
console.log('start');
const req=fetch ("https://dummyjson.com/products/1");
console.log(req);
req.then(()=>console.log('fetched'));
console.log('end');





