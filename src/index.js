import {loadContent} from "./initial-page-load";
import "./styles.css";

const contentDiv = document.getElementById("content");

// document.addEventListener("DOMContentLoaded",()=>{
//     loadContent();
// });

function switchTab(){
    const homebtn = document.getElementById("home");
    homebtn.addEventListener("click",()=>{
        contentDiv.textContent = "";
        loadContent();
    });
}

switchTab();

