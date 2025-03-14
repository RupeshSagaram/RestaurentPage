export function contactUs() {
    const contentDiv = document.getElementById("content");

    const locationHeading = document.createElement('h2');
    locationHeading.textContent = 'Our Location';
    contentDiv.appendChild(locationHeading);

    const location = document.createElement('p');
    location.textContent = 'Location: 123 Fine Bar Street, Food City, FC 12345';
    contentDiv.appendChild(location);

    const openHoursHeading = document.createElement('h2');
    openHoursHeading.textContent = 'Open Hours';
    contentDiv.appendChild(openHoursHeading);

    const openHoursMon = document.createElement('p');
    openHoursMon.textContent = 'Mon: 11:00 AM - 11:00 PM';
    contentDiv.appendChild(openHoursMon);

    const openHoursTue = document.createElement('p');
    openHoursTue.textContent = 'Tue: 10:00 AM - 10:00 PM';
    contentDiv.appendChild(openHoursTue);

    const openHoursWed = document.createElement('p');
    openHoursWed.textContent = 'Wed: 12:00 PM - 7:00 PM';
    contentDiv.appendChild(openHoursWed);

    const openHoursThu = document.createElement('p');
    openHoursThu.textContent = 'Thu: 11:00 AM - 11:00 PM';
    contentDiv.appendChild(openHoursThu);

    const openHoursFri = document.createElement('p');
    openHoursFri.textContent = 'Fri: 11:00 AM - 12:00 AM';
    contentDiv.appendChild(openHoursFri);

    const openHoursSat = document.createElement('p');
    openHoursSat.textContent = 'Sat: 11:00 AM - 12:00 AM';
    contentDiv.appendChild(openHoursSat);

    const openHoursSun = document.createElement('p');
    openHoursSun.textContent = 'Sun: 9:00 AM - 11:00 PM';
    contentDiv.appendChild(openHoursSun);

    const phoneNumberHeading = document.createElement('h2');
    phoneNumberHeading.textContent = 'Call for Reservations';
    contentDiv.appendChild(phoneNumberHeading);

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = 'Phone: (123) 456-7890';
    contentDiv.appendChild(phoneNumber);


    
}