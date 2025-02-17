export function loadContent() {
    const contentDiv = document.getElementById("content");

    // creating a heading
    const headingOne = document.createElement("h1");
    headingOne.textContent = "Welcome to Fine Bar, Where Elegance Meets Flavor";

    //creating a paragraph 1
    const paraOne = document.createElement("p");
    paraOne.textContent = `Step into Fine Bar, a haven of sophistication and indulgence. 
    Nestled in the heart of the city, we offer an exquisite selection of handcrafted cocktails,
    premium wines, and gourmet cuisine designed to tantalize your taste buds.Our ambiance blends 
    modern luxury with a cozy charm, creating the perfect setting for intimate gatherings, lively celebrations, 
    or a quiet evening of relaxation. Whether you're savoring our signature drinks, enjoying world-class dining, 
    or unwinding with smooth live music, Fine Bar promises an unforgettable experience.`

    //creating paragraph 2
    const paraTwo = document.createElement("p");
    paraTwo.textContent = "Join us and elevate your nights with fine drinks, fine food, and a truly fine atmosphere."
    
    contentDiv.appendChild(headingOne);
    contentDiv.appendChild(paraOne);
    contentDiv.appendChild(paraTwo);

    
}