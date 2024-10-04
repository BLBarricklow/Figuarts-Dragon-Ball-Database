let itemNum = document.getElementById("itemNum").innerText;
let salesType = database[itemNum].releaseType;

document.querySelector('#info-list').innerHTML += salesType;

console.log(salesType)