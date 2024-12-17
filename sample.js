// Synchronous
// ..................

// console.log('start');
// for(i=0;i<=1000;i++){
//     console.log(i);
// }
// console.log('end');

// Asynchronus
// ..................

// console.log('start');
// setTimeout(()=>{
//     console.log('inside');
// },3000)
// console.log('end');

// Interval
// .........................

// let count = 10
// let data = setInterval(()=>{
//     document.getElementById("time").innerHTML=count
//     console.log(count);
//     count--
//     if (count<0){
//         clearInterval(data)
//     }
// },1000)

// clock
// ............

// let second = 59
// let minute = 2
// let data = setInterval(()=>{
//     document.getElementById("time").innerHTML=minute+':'+second
//     second--
//     if(second<0){
//         minute--
//         second=59
//         if(minute<0){
//             clearInterval(data)
//         }
//     }
// },1000)


// image timer
// ......................

let count = 10
let data = setInterval(()=>{
    document.getElementById("time").innerHTML=count
    console.log(count);
    count--
    if (count<0){
        clearInterval(data)
        if(count<0){
            document.getElementById("image").style.display='none'
        }
    }
},1000)







