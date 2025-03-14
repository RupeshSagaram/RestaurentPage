export function aboutUs() {

    const contentDiv = document.getElementById("content");

    const heading = document.createElement('h1');
    heading.textContent = 'About Us';
    contentDiv.appendChild(heading);

    const paragraph = document.createElement('p');
    paragraph.textContent = 'Fine Bar is a premier dining establishment offering a unique blend of exquisite cuisine and a sophisticated atmosphere. Our mission is to provide an unforgettable dining experience with exceptional service and a menu that features the finest ingredients. Whether you are looking for a place to celebrate a special occasion or simply enjoy a night out, Fine Bar is the perfect destination.';
    contentDiv.appendChild(paragraph);

}