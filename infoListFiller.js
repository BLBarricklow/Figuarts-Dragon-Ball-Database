let itemNum = document.getElementById("itemNum").innerText;
let salesType = database[itemNum].releaseType;
let releaseMonth = database[itemNum].releaseMonth;
let releaseYear = database[itemNum].releaseYear;
let price = database[itemNum].price;

document.querySelector('#info-list').innerHTML += "<li>" + "Release Date: " + releaseMonth + " " + releaseYear + "</li>";
document.querySelector('#info-list').innerHTML += "<li>" + "Price: (USA) " + price + "</li>";
document.querySelector('#info-list').innerHTML += "<li>" + "Release Type: " + salesType + "</li>";


console.log(salesType)