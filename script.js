// alert
// ---------

// alert("welcome to all")

// console
// --------

// a='helo'
// console.log("welcome to all",a)
// alert(a)

// var
// -------

// var a="hello"
// var a=20
// console.log(a);


// let
// ---------

// let a="hai"
// a=20
// console.log(a);

// const
// ------------

// const a="welcome"
// console.log(a);

// DATA TYPES
// ------------------   

// let a
// a=10 ---> number
// a="abc" ------> string
// a=true ----->boolean
// a=[1,2,3]  ----->array
// a={name:'isa',age:20}  ----->dictionary
// console.log(a);
// console.log(typeof a);


// OPERATORS
// -------------------------

// 1)Arithmetic operators

// console.log(10+5);
// console.log(10-5);
// console.log(10*5);
// let a=10/5
// console.log(a);

// let a=10**2
// console.log(a);

// let a=2
// a++
// ++a
// console.log(a);

// let a=2
// a--
// --a
// console.log(a);

// ......................

// 2)Assignment Operators


// console.log(a=10);

// let a=10
// a+=2
// console.log(a);
// o/p: 12

// let a=10
// a-=2
// console.log(a);
// o/p : 8

// let a=10
// a*=2
// console.log(a);
// o/p : 20

// let a=10
// a/=2
// console.log(a);
// o/p : 5

// let a=10
// a%=2
// console.log(a);
// o/p : 0

// let a=10
// a**=2
// console.log(a);
// o/p : 100

// 3) Comparison operator

// let a=10
// let b='20'
// console.log(a==b);
// o/p : false

// let a=10
// let b='10'
// console.log(a==b);
// o/p : true

// let a=10
// let b='20'
// console.log(a!=b);
// o/p : true

// let a=10
// let b='20'
// console.log(a<b);
// o/p : true

// let a=10
// let b='20'
// console.log(a>b);
// o/p : false

// let a=10
// let b='20'
// console.log(a<=b);
// o/p : true

// let a=10
// let b='20'
// console.log(a>=b);
// o/p : false

// let a=10
// let b='10'
// console.log(a===b);
// o/p : false

// let a=10
// let b=10
// console.log(a==b);
// o/p : true

// let a=10
// let b='20'
// console.log(a!==b);
// o/p : true


// 4) Logical operator

// let a=10
// let b='20'
// console.log(a!=b && a==10);
// o/p : true

// let a=10
// let b='20'
// console.log(a!=b || a==10);
// o/p : true


// .................................................

function sample(){
    // method : 1
    // ....................

    // let result=document.getElementById("name")
    // console.log(result.value);
    // document.getElementById("display").innerHTML=result.value

    // method : 2
    // ...................

    // let result=document.getElementById("name").value
    // console.log(result);
    // let h2=document.getElementById("display")
    // h2.innerHTML=result
    
    // number value
    // ....................

    // let no1=parseInt(document.getElementById("no1").value) 
    // let no2=parseInt(document.getElementById("no2").value)
    // let h2=document.getElementById("display")
    // h2.innerHTML=no1+no2
}

function add(){

    let no1=parseInt(document.getElementById("no1").value) 
    let no2=parseInt(document.getElementById("no2").value)
    let h2=document.getElementById("display")
    h2.innerHTML=no1+no2
}

function sub(){
    let no1=parseInt(document.getElementById("no1").value) 
    let no2=parseInt(document.getElementById("no2").value)
    let h2=document.getElementById("display")
    h2.innerHTML=no1-no2
}

function mul(){
    let no1=parseInt(document.getElementById("no1").value) 
    let no2=parseInt(document.getElementById("no2").value)
    let h2=document.getElementById("display")
    h2.innerHTML=no1*no2
}
function div(){
    let no1=parseInt(document.getElementById("no1").value) 
    let no2=parseInt(document.getElementById("no2").value)
    let h2=document.getElementById("display")
    h2.innerHTML=no1/no2
}
function mod(){
    let no1=parseInt(document.getElementById("no1").value) 
    let no2=parseInt(document.getElementById("no2").value)
    let h2=document.getElementById("display")
    h2.innerHTML=no1%no2
}





















