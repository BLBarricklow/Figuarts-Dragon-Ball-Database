console.log(database.length)

for (let i = 0; i < database.length; i++) {
    document.querySelector('#autofill-list').innerHTML += "<li>" + database[i].name + "</li>";

}