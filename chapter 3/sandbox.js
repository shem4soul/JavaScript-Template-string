//for loops

// for (let index = 0; index < 5; index++) {
//     console.log('in loop:', index);
    
// }

// console.log('Loop Finished');


// const names = ['shaun', 'mario', 'luigi', 'toad'];  

// // for (let index = 0; index < names.length; index++) {
// //     // console.log(names[index]);
// //     let html = `<div>${names[index]}</div>`
// //     console.log(html);
    
// // }

// let index = 0;
// while (index < names.length) {
//     console.log(names[index]);
//     index++;
// }


// do {
    
// } while (condition);


// if condition

// const age = 36;

// if (age > 35) {
//     console.log('you are over 30 years old');
    
// }

// const ninjas = ['shaun', 'mario', 'luigi', 'toad'];

// if (ninjas.length > 2){
//     console.log("that's a lot of ninjas");
    
// }

const password = 'sddh';

if (password.length >= 12 && password.includes('@')) {
    console.log('password is mighty enough');
    } else if (password.length >= 8 || password.includes('@') && password.length>= 5) {
        console.log('That password is Strong enough !');
}  else {
    console.log('Password is not strong enough');
    
}