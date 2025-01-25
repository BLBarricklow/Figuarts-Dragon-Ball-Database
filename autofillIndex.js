for (let i = 0; i < database.length; i++) {
    document.querySelector('#autofill-list').innerHTML += "<li><a href='" + database[i].pagelink +"'>" + database[i].name + "</a></li>";

}