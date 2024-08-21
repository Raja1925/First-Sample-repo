const signIn = document.querySelector('.sign-button');
const signedCom = document.querySelector('.signed-success')

const logIn = () => {

const userName = document.querySelector("#user-name");
const passw = document.querySelector("#password");

const user = userName.value;
const pass = passw.value;


if(user && pass){
    let obj = JSON.parse(localStorage.getItem("userInfo")) || {}
    console.log(obj)
    obj = {
        name : user,
        password: pass
    }
    localStorage.setItem("userInfo", JSON.stringify(obj));
}

console.log("saved!")

signedCom.classList.add('sign-completed')

setTimeout(() => {
    location.href = `index.html`
}, 1000);


}

const clickCloseIcon = document.querySelector('.close-icon-click');

clickCloseIcon.addEventListener('click', () => {
    history.back();
})