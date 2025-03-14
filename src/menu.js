export function menu() {
    const contentDiv = document.getElementById("content");

    const pic = document.createElement("img");
    pic.src = "https://i.pinimg.com/736x/b9/aa/6d/b9aa6d112c2f5df551f0ae1d3d0e9116.jpg";
    pic.setAttribute("height","400px");
    pic.setAttribute("width","450px");
    pic.alt = "Fine Bar restaurant";
    // // appending the image to the contentDiv
    contentDiv.appendChild(pic);

    const foodItems = [
        { name: 'Pizza', description: 'A delicious cheese and tomato pizza.' },
        { name: 'Burger', description: 'A juicy beef burger with lettuce and tomato.' },
        { name: 'Pasta', description: 'Pasta with a rich and creamy Alfredo sauce.' },
        { name: 'Salad', description: 'A fresh garden salad with a variety of vegetables.' },
        { name: 'Sushi', description: 'Fresh sushi rolls with fish and vegetables.' }
    ];

    const drinkItems = [
        { name: 'Coke', description: 'A refreshing cold Coca-Cola.' },
        { name: 'Lemonade', description: 'A tangy and sweet lemonade.' },
        { name: 'Iced Tea', description: 'A chilled glass of iced tea.' },
        { name: 'Coffee', description: 'A hot cup of freshly brewed coffee.' },
        { name: 'Smoothie', description: 'A healthy fruit smoothie.' }
    ];

    foodItems.forEach(item => {
        const foodDiv = document.createElement('div');
        foodDiv.innerHTML = `<strong>${item.name}</strong>: ${item.description}`;
        contentDiv.appendChild(foodDiv);
    });
    

    drinkItems.forEach(item => {
        const drinkDiv = document.createElement('div');
        drinkDiv.innerHTML = `<strong>${item.name}</strong>: ${item.description}`;
        contentDiv.appendChild(drinkDiv);
    });

    const styleElements = () => {
        const allDivs = contentDiv.querySelectorAll('div');
        allDivs.forEach(div => {
            div.style.fontSize = '20px';
            div.style.marginBottom = '7px';
            div.style.textAlign = 'left';
        });
    };

    styleElements();

    contentDiv.style.textAlign = 'left';

}