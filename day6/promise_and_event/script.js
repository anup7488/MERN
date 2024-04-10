// console.log('anup');
// const arr=[14,30,40];
// // const ans=arr.forEach((a)=>{
//     const ans=arr.map((a)=>{
//     console.log(a);
//     return a*2;
// });
// console.log(ans);
// const ans2=arr.map(a=>Math.pow(a,2));
// console.log(ans2);
// const arr2=[15.3,12.5,11.14];
// const ans3=arr2.map(a=>parseInt(a));
//     console.log(ans3);

//     const ans4=arr.filter((a)=>{
//         if (a>16) return true;
//         else return false;
//     });
//     console.log(ans4);
    // const arr=["delhi","mumbai","gujrat","chennai","bihar","Iraq","India"];
    // const ans = arr.filter((s)=>{
    //     if(s.includes('i')||s.includes('I')){
    //         return true;
    //     }
    //     else false
    // })
    // console.log(ans);



    // const arr=['Delhi,India',]



const arr=[2,3,4,6,];
const ans=arr.reduce((total,curr,c,d)=>{
    console.log(total,curr,c,d);
    return total+curr;
});
console.log(ans);

