const onInputChange = () =>{
    //get UserWelcome element
    // get userName element
    const userWelcomeEl= document.getElementById("userWelcome");
    const userNameEl= document.getElementById("userName");
    userWelcomeEl.textContent=`Welcome ${userNameEl.value}`;
}

const onLogOut =()=>{
    const userWelcomeEl = document.getElementById("userWelcome");
    userWelcomeEl.textContent="Welcome anon";

}

const onElementMouseOver= () => {
    const userNameEl=document.getElementById("userWelcome");
    userWelcomeEl.classList.add("over");
}
const onElementMouseOver= () => {
    const userNameEl=document.getElementById("userWelcome");
    userWelcomeEl.classList.remove("over");
}
 
const logOutBtnEl =() => {
const logOutBtnEl=document.getElementById("logOutBtnEl");
logOutBtnEl.addEventListener("click", onLogOut);
}
