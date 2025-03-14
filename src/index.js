import {loadContent} from "./initial-page-load";
import {aboutUs} from "./aboutUs";
import "./styles.css";
import { menu } from "./menu";
import { contactUs } from "./contactUs";

const contentDiv = document.getElementById("content");

  document.addEventListener("DOMContentLoaded",()=>{
      loadContent();
  });

function switchTab(){
    const homebtn = document.getElementById("home");
    homebtn.addEventListener("click",()=>{
        contentDiv.textContent = "";
        loadContent();
    });

    const aboutbtn = document.getElementById("aboutUs");
    aboutbtn.addEventListener("click",()=>{
        contentDiv.textContent = "";
        aboutUs();
    });

    const menubtn = document.getElementById("menu");
    menubtn.addEventListener("click",()=>{
        contentDiv.textContent = "";
        menu();
    });

    const contactbtn = document.getElementById("contactUs");
    contactbtn.addEventListener("click",()=>{
        contentDiv.textContent = "";
        contactUs();
    })
}

switchTab();

