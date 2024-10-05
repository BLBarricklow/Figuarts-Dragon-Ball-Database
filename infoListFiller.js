let itemNum = document.getElementById("itemNum").innerText;
let salesType = database[itemNum].releaseType;
let releaseDate = database[itemNum].releaseDate;
let price = database[itemNum].price;

document.querySelector('#info-list').innerHTML += "<li>" + salesType + "</li>";
document.querySelector('#info-list').innerHTML += "<li>" + releaseDate + "</li>";
document.querySelector('#info-list').innerHTML += "<li>" + price + "</li>";

console.log(salesType)