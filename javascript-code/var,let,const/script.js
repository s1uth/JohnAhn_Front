// var greeting = 'hello';
// console.log(greeting) //hello

// var greeting = 'hi';
// console.log(greeting) //hi

// greeting ='how are you?';
// console.log(greeting) // how are you?

// let greeting = 'hello';
// console.log(greeting);

// let greeting = 'hi'; //중복 선언 불가

// greeting = 'hi';
// console.log(greeting); // hi

// const greeting = 'hello';
// console.log(greeting) // hello

// const greeting = 'hi'; // 중복 선언 불가

// greeting = 'hi'
// console.log(greeting) // 재할당 불가

// function func() {
//     if(true){
//         var a = 'a';
//         console.log(a);
//     }
//     console.log(a)
// }
// console.log(a) //정의 되지 않음

function func() {
    if(true){
        let a = 'a';
        console.log(a);
    }
    console.log(a) //정의 되지 않음
}
console.log(a) //정의되지 않음