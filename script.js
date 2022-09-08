const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");



function showError(input,message) {

const formControl = input.parentElement;

formControl.className = "form-control error";

const small = formControl.querySelector("small");

small.innerText = message;


}

function showSucces(input) {

    const formControl = input.parentElement;

    formControl.className = "form-control success";

}


function  emailCheck() {

   
 const re =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

if(re.test(input.value.trim())) {

  showSucces(input)
}else {

  showError(input,"Lütfen geçerli email giriniz")
}
         
     


}

function checkRequired(inputArr) {

  inputArr.forEach(function(input){

  if (input.value.trim() === '') {

    showError(input,`${getFieldName(input)} lütfen doldurunuz.`);
  }else {

    showSucces(input);
  }

  });
}



function checkLength (input,min,max) {

  if (input.value.length < min) {
   
    showError(input,`${getFieldName(input)}  ${min} karakterden uzun olmalı `);
  }
    else if (input.value.length > max) {
      showError(input,`${getFieldName(input)}  ${max} karakterden kısa olmalı `);
  
    }else {
  
     
    showSucces(input);
  
    }

}


function checkPasswordsMatch (input1,input2) {

if(input1.value !== input2.value) {


  showError(input2,"şifreler eşleşmedi")
}


}
function getFieldName (input) {
 
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);


}



form.addEventListener("submit", function(e) {

 e.preventDefault();


   checkRequired([username,email,password,password2]);
   checkLength(username, 3, 15);
   checkLength(password, 6, 25);
   emailCheck(email);
   checkPasswordsMatch(password,password2)


});


