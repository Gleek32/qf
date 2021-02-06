const steps = Array.from(document.querySelectorAll('form .step'));
const backBtn = document.querySelectorAll('form .backBtn');
const form = document.querySelector('form');


form.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputs = [];
  form.querySelectorAll('input').forEach(input=>{
    const {name, value} = input;
    inputs.push({name, value})
  })
  console.log(inputs)
})
console.log(backBtn)
console.log(steps)





// const lastName = document.getElementById("lName");
// const email = document.getElementById("email");
// const phone = document.getElementById("phone");
// const form = document.getElementById("form");
// const error = document.getElementById("error");
//
// form.addEventListener('submit', (e) => {
//   const messages = []
//   if (fName.value === '' || fName.value == null) {
//     messages.push('First Name Required')
//   }
//
//   if(messages.length > 0) {
//     e.preventDefault()
//     error.innerText = messages.join(', ')
//   }
// })
//
// prompt("hello world");
