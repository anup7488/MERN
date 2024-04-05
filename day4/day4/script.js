// // // console.log("hello world!");
// // //  let str1 = new String("ankkit");
// // //  let str2 = "ankkit";
// // //  console.log(str1==str2); // i.e. both are equal


// // //    const obj={
// // //     name: "anmol",
// // //     lastname:"kumar"
// // //    }
// // //    console.log(obj);
// // //    obj.age=20;
// // //    console.log(obj);
// // //    //cannot reassign object
// // //    obj={
// // //     name:"anup",
// // //     lastname:"yadav"
   
// // //    }
// // //    console.log(obj);
// //    let arr=[,4,8,9,5];
// //    console.log(arr);
// //    arr=[2,4,6];
// //    console.log(arr);
// //    arr[2]=10;
// //    console.log(arr);
// //    arr[10]=41;
// //    console.log(arr);
// //    arr.push (10);//in last 10 will be added
// //    console.log(arr);


// //    console.log(typeof(arr));//array is object type of data 
// //    console.log(typeof(arr));
// //    console.log(typeof(obj));
// //    console.log(Array.isArray(obj));
// //    console.log(Array.isArray(arr));
// // //    arr.push(10);




// //     function checkifArray(arr,obj){
// //     if(Array.isArray(obj)==true){
// //        console.log("array");
// //     }
// //     else console.log("object");
// //    }
// //    let arr=[5,6,7,8];
// //    checkifArray(arr,obj);
// // //-----------------

// // const arr2=["name",2];
// // const obj ={
// //     "name":"anup",
// //     age:22
// // };
// // for(let i=0;i<2;i++){
// //     console.log(Object[i]); 
// // }
// // for(let i of arr2){
// //     console.log(i);
// // }

// // // for (let i of object){
// // //console.log(i);
// // //   }


// // for(let i in arr2){
// //     console.log(i);
// // }
// // for(let i of Object){
// //     console.log(i);
// // }       


// console.log(window);
// console.log(window.innerHeight);
// console.log(window.innerWidth);
// console.log(console);
// console.log(window);
// console.log(window.document);
// const s=document.getElementsByTagName('h2');
//  console.log(s); 

// //
// document.querySelectorAll("div>h2");
// console.log(t);
// document.getElementById("ht1");
// t["innerHTML"]="hello world";                                                   
 
const ne=document.createElement("h2");
console.log(ne);
ne.innerText="hii i am here";
console.log(ne);
const firstdiv=document.getElementsByTagName('h2');
firstdiv[0].appendChild(ne); 
firstdiv[0].removeChild[ne];

