const firstName = document.getElementById("fName");
const lastName = document.getElementById("lName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const form = document.getElementById("form");
const error = document.getElementById("error");
const slidePage = document.querySelector(".slidepage");
const firtNextBtn = document.querySelector(".nextBtn");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");


let max = 4;
let current = 1;

firtNextBtn.addEventListener("click", function() {
  slidePage.style.marginLeft = "-25%";
  bullet[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  current += 1;
});
nextBtnSec.addEventListener("click", function() {
  slidePage.style.marginLeft = "-50%";
  bullet[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  current += 1;
});
nextBtnThird.addEventListener("click", function() {
  slidePage.style.marginLeft = "-75%";
  bullet[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  current += 1;
});

submitBtn.addEventListener("click", function() {
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  current += 1;
  setTimeout(function(){

    alert("thank you for your submission");
    location.reload();
  }, 800);
});

prevBtnSec.addEventListener("click", function() {
  slidePage.style.marginLeft = "0%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnThird.addEventListener("click", function() {
  slidePage.style.marginLeft = "-25%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnFourth.addEventListener("click", function() {
  slidePage.style.marginLeft = "-50%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  current -= 1;
});

$('form').on('submit', (e) => {
  e.preventDefault();

  
  const firstName = $('#firstName').val().trim();
  const lastName = $('#lastName').val().trim();
  const email = $('#email').val().trim();
  const callback = $('#callback').val().trim();

  const data = {
    loan,
    refi,
    purchase,
    cash,

  };
  $.post('/email', data, function() {
    console.log('Server received data');
  });

  const data1 = {
    single,
    multi,
    condo,
    town,
  };
  $.post('/email1', data1, function() {
    console.log('Server received data');
});
    const data2 = {
      primary,
      second,
      invest,
    };
    $.post('/email2', data2, function() {
      console.log('Server received data');
});
      const data3 = {
        firstName,
        lastName,
        email,
        callback
      };
      $.post('/email3', data3, function() {
        console.log('Server received data');
});
});
form.addEventListener('submit', (e) => {
  const messages = []
  if (fName.value === '' || fName.value == null) {
    messages.push('First Name Required')
  }

  if(messages.length > 0) {
    e.preventDefault()
    error.innerText = messages.join(', ')
  }
});

