export function loadContent() {
    const contentDiv = document.getElementById("content");


    // // creating an image element
    const pic = document.createElement("img");
    pic.src = "https://i.pinimg.com/736x/22/6c/3d/226c3dc873298e27ff3e91166808a499.jpg";
    pic.setAttribute("height","65%");
    pic.setAttribute("width","60%");
    pic.alt = "Fine Bar";
    // // appending the image to the contentDiv
    contentDiv.appendChild(pic);
    // creating a heading
    const headingOne = document.createElement("h2");
    headingOne.textContent = "Welcome to Fine Bar, Where Elegance Meets Flavor";

    //creating a paragraph 1
    const paraOne = document.createElement("p");
    paraOne.textContent = `Step into Fine Bar, a haven of sophistication and indulgence. 
    Nestled in the heart of the city, we offer an exquisite selection of handcrafted cocktails,
    premium wines, and gourmet cuisine designed to tantalize your taste buds. Fine Bar promises an unforgettable experience.`

    //creating paragraph 2
    const paraTwo = document.createElement("p");
    paraTwo.textContent = "Join us and elevate your nights with fine drinks, fine food, and a truly fine atmosphere."
    
    contentDiv.appendChild(headingOne);
    contentDiv.appendChild(paraOne);
    contentDiv.appendChild(paraTwo);

    
}