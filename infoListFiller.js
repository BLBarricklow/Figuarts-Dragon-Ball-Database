let itemNum = document.getElementById("itemNum").innerText;
let salesType = database[itemNum].releaseType;
let releaseMonth = database[itemNum].releaseMonth;
let releaseYear = database[itemNum].releaseYear;
let price = database[itemNum].price;
let regions = database[itemNum].region;

document.querySelector('#info-list').innerHTML += "<li>" + "Release Date: " + releaseMonth + " " + releaseYear + "</li>";
document.querySelector('#info-list').innerHTML += "<li>" + "Price: (USA) " + price + "</li>";
document.querySelector('#info-list').innerHTML += "<li>" + "Release Type: " + salesType + "</li>";
document.querySelector('#info-list').innerHTML += "<li>" + "Regions: " + regions.join(", ");