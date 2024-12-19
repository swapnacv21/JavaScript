// OOPs 
// ..................


// class std{
//     constructor(name){
//         this.name = name
//         console.log('demo data');
//     }
//     display(age){
//         console.log('display',this.name,age);
//     }
// }
// let std1 = new std('Jibin')
// std1.display(21)


// output:
// demo data
// display Jibin 21


// Inheritance
// .................

class School{
    constructor(){
        console.log('School class');
    }
    classroom(){
        console.log('Class room');
    }
}

class std extends School{
    constructor(name){
        super()
        this.name = name
        console.log('demo data');
    }
    display(age){
        console.log('display',this.name,age);
    }
}
let std1 = new std('Jibin')
std1.display(21)
std1.classroom()


// output:
// School class
// demo data
// display Jibin 21
// Class room