//query selector


// const para = document.querySelector('body > div > p:nth-child(2)');
// console.log(para);


// const paras = document.querySelectorAll('p');

// paras.forEach(para =>{
//     console.log(para);
// })

const error = document.querySelectorAll('.error');

error.forEach(erro => {
    console.log(erro);
})

// console.log(errors);



//get element by Id
const title = document.getElementById('page-title');
  console.log(title);


  //get elements by their class name
  const errors = document.getElementsByClassName('error');
  console.log(errors);
  console.log(errors[0]);
  
  //get elements by their tag name
  const paras = document.getElementsByTagName('p');
  console.log(paras);
  console.log(paras[1]);
  
  