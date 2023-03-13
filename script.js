const password=document.querySelector("#txtpassword");
const checkbox=document.querySelector("#show");

checkbox.addEventListener('click',function(){
    const text=password.getAttribute("type")=== "password"?"text":"password";
    password.setAttribute("type",text);
});