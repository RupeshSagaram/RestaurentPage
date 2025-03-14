export function aboutUs() {

    const contentDiv = document.getElementById("content");

    const pic = document.createElement("img");
    pic.src = "https://i.pinimg.com/736x/7b/7d/bc/7b7dbc0348e0da61c4d18aae27ff5710.jpg";
    pic.alt = "Fine Bar restaurant";
    // // appending the image to the contentDiv
    contentDiv.appendChild(pic);
    const heading = document.createElement('h1');
    heading.textContent = 'About Us';
    contentDiv.appendChild(heading);

    const paragraph = document.createElement('p');
    paragraph.textContent = 'Fine Bar is a premier dining establishment offering a unique blend of exquisite cuisine and a sophisticated atmosphere. Our mission is to provide an unforgettable dining experience with exceptional service and a menu that features the finest ingredients. Whether you are looking for a place to celebrate a special occasion or simply enjoy a night out, Fine Bar is the perfect destination.';
    contentDiv.appendChild(paragraph);

}