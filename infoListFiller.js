let itemNum = document.getElementById("itemNum").innerText;
let salesType = database[itemNum].releaseType;
let releaseDate = database[itemNum].releaseDate;
let price = database[itemNum].price;

document.querySelector('#info-list').innerHTML += "<li>" + "Release Date: " + releaseDate + "</li>";
document.querySelector('#info-list').innerHTML += "<li>" + "Price: (USA) " + price + "</li>";
document.querySelector('#info-list').innerHTML += "<li>" + "Release Type: " + salesType + "</li>";


console.log(salesType)