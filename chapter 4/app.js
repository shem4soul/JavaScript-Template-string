//function declaration

// function greet(params) {
//     console.log('Hello there');
//     }

// greet();
// greet();
// greet();


// //function expression
// const speak = function (params) {
//     console.log('good day!');
//     }

// speak();
// speak();
// speak();

// arguments & parameters

const speak = function(name = 'luigi', time = 'night'){
    console.log(`good ${time} ${name}`);
    };

    speak();
    speak('shaun');