let formValidate=() =>{
    let name =document.querySelector("#name").value.trim();
    let num =document.querySelector("#num").value.trim();
    let email =document.querySelector("#email").value.trim();
    let pass =document.querySelector("#pass").value.trim();
    let cpass =document.querySelector("#cpass").value.trim();

    let ErrName =document.querySelector("#errname");
    let ErrNum =document.querySelector("#errnum");
    let ErrEmail =document.querySelector("#erremail");
    let ErrPass =document.querySelector("#errpass");
    let ErrCpass =document.querySelector("#errcpass");





    if(name == ""){
        ErrName.innerHTML="please Enter your Name"
        return false;
    } 
      else
        ErrName.innerHTML="";

    if(num == ""){
        ErrNum.innerHTML="please Enter your Number";
        return false;
    }

    if(num.length !== 10){
        ErrNum.innerHTML="please Enter 10 digit number";
        return false;
    }
   
    if(isNaN(num)){
        ErrNum.innerHTML="please Enter valid number";
        return false;
    }
    else
        ErrNum.innerHTML="";

    if(email == ""){
        ErrEmail.innerHTML="please Enter your Email";
        return false;
    }
    if(!(email.includes("@") && email.includes(".com"))){
        ErrEmail.innerHTML="please Enter your Valid email";
        return false;
    }
      else
        ErrEmail.innerHTML="";

    if(pass == ""){
        ErrPass.innerHTML="please Enter your password";
        return false;
    }
    if(!(pass.match(/[1234567890]/) && pass.match(/[@#$%&*!]/) && pass.match(/[A-Z]/) && pass(/[a-z]/))){
        ErrPass.innerHTML="please Enter your valid password";
        return false;
    }
     else
        ErrPass.innerHTML="";

    if(cpass !== pass){
        ErrCpass.innerHTML="please Enter same password";
        return false;
    } 
    // else
    //     ErrPass.innerHTML="";
    //     return false;
}