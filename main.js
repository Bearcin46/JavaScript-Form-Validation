const formEl=document.getElementById("form")
const usernameEl=document.getElementById("username")
const emailEl=document.getElementById("email")
const passwordEl=document.getElementById("password")
const cpasswordEl=document.getElementById("cpassword")

formEl.addEventListener("submit",(e)=>{
    if(!validateInputs()){
        e.preventDefault();
    }
})

const validateInputs=()=>{
    const usernameVal=usernameEl.value.trim();
    const emailVal=emailEl.value.trim();
    const passwordVal=passwordEl.value.trim();
    const cpasswordVal=cpasswordEl.value.trim();
    let success=true;

    //validating userName

    if(usernameVal===""){
        success=false;
        setError(username,"Username is required")
    }else{
        setSuccess(username)
    }

    //validating email

    if(emailVal===""){
        success=false;
        setError(email,"Email is required")
    }else if(!validateEmail(emailVal)){
        success=false;
        setError(email,"Enter valid email address")
    }else {
        setSuccess(username)
    }

    //Validating password

    if(passwordVal===""){
        success=false;
        setError(password,"Password is required")
    }else if(passwordVal.length<8){
        success=false;
        setError(password,"Password should contain atleast 8 characters")
    }else {
        setSuccess(password)
    }

    //validating confirm password

    if(cpasswordVal===""){
        success=false;
        setError(cpassword,"Enter your password")
    }else if(passwordVal!==cpasswordVal){
        success=false;
        setError(cpassword,"Password doesn't match")
    }else {
        setSuccess(cpassword)
    }
    return success;

}
const setError=(element,message)=>{
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector(".error")
    errorElement.innerText=message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

const setSuccess=(element,message)=>{
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector(".error")
    errorElement.innerText=" ";
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}

const validateEmail=(email)=>{
    return string(email)
    .LowerCase().match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}