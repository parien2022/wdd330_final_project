import {creatHeaderAndFooter, setLocalStorage} from './Functions.mjs';

const header = '/wdd330_final_project/snippets/header.html';
const footer = '/wdd330_final_project/snippets/footer.html';

creatHeaderAndFooter(header, footer);


const foromButton = document.querySelector(".formButton");
foromButton.addEventListener('click', getFormValues);

function getFormValues(){

    const firstName = document.querySelector("#userFirstname").value;
    console.log(firstName);
    const lastName = document.querySelector("#userLastname").value;
    const email = document.querySelector("#userEmail").value;

    let userInfo = {}

    userInfo["fname"] = firstName;
    userInfo["lname"] = lastName;
    userInfo["email"] = email;

    setLocalStorage("userInfo", userInfo);

}