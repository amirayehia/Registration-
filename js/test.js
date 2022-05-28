var signUpName = document.getElementById("nameS");
var signUpEmail = document.getElementById("emailS");
var signUpPassword = document.getElementById("passwordS");
var warningMail = document.querySelector(".warningMail");
var warning= document.querySelector(".warning");
var signUpSubmit = document.getElementById("signUpSubmit");
var loginLink = document.querySelector('.loginLink');
var signUpLink = document.querySelector(".signUpLink")
var signIn = document.querySelector(".signIn");
var signUp = document.querySelector(".signUp");
// ************************sign up*******************
function checkName (name){
    var regex = /^[A-Z][a-z]{0,10}$/;
    if (regex.test(name)){
        console.log(true);
        return true
    }
    else {
        console.log(false);

        return false ;
    }
}
function checkMail (mail){
    var regex = /^[A-Za-z_]{3,10}[0-9]{1,3}@gmail.com$/;
    var savedValue = localStorage.getItem(JSON.stringify(mail));
    console.log(savedValue);
    if (regex.test(mail)&&savedValue === null){
        console.log(true);
        return true
    }
    else {
        warningMail.innerHTML = "you already have an account"
        console.log(false);

        return false ;
    }

    
}
function checkPassword (password){
    var regex = /^[A-Za-z0-9_]{5,10}$/
    if (regex.test(password)){
        console.log(true);
        return true
    }
    else {
        console.log(false);

        return false ;
    }
    
}
function SignUp (){

   if (checkName(signUpName.value)&&checkMail(signUpEmail.value)&& checkPassword(signUpPassword.value)) {
       console.log("submit");

       localStorage.setItem(JSON.stringify(signUpEmail.value),JSON.stringify(signUpPassword.value))
       console.log(localStorage. getItem(JSON.stringify(signUpEmail.value)));
       signUp.style.display= "none"
       signIn.style.display = "block";


   } else {
    console.log("something wrong");
    warning.innerHTML= "something wrong please check your inputs.."
   }
   clearSignUp()

}

signUpSubmit.addEventListener("click",SignUp);

loginLink.addEventListener("click" , function(){
    signUp.style.display = "none";
    signIn.style.display = "block"
});
signUpLink.addEventListener("click",function(){
    signUp.style.display = "block";
    signIn.style.display = "none"
});
// ********************LOGIN**********************
var logInEmail = document.getElementById('emailL');
var logInpassword = document.getElementById('passwordL');
var logInSubmit = document.getElementById('logInSubmit');
var home = document.querySelector(".home");
var welcome = document.querySelector(".welcome")
// console.log(logInSubmit);
function LogIn (){
    var  errorValidation = localStorage.getItem(JSON.stringify(logInEmail.value));
    console.log(errorValidation);
    if (errorValidation ==JSON.stringify(logInpassword.value )){
        signIn.style.display = "none";
        home.style.display = "flex";
        console.log("hello from home");
    }else {
        console.log("hello from hell");
        warning.innerHTML = "something wrong";
    }
    clearLogin()
}
logInSubmit.addEventListener("click",LogIn);
/*****************************LOGOUT ************************ */
var logOut = document.getElementById('logOut');
logOut.addEventListener("click" , function(){
        home.style.display = "none";
        signIn.style.display = "block";


});
function clearSignUp(){
    signUpName.value = "";
    signUpEmail.value = "";
    signUpPassword.value = ""

}
function clearLogin(){
    logInEmail.value = "";
    logInpassword.value = "";

}



