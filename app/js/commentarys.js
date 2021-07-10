/*document.getElementById("button1").onclick = () => {
    alert("alert");
};*/

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function myFunction(e) {
    var opinion = document.getElementById("opinion").value;
    var author = document.getElementById("name").value;
    var birthday = document.getElementById("birthday").value;
    var selectionGender = document.getElementById("gender");
    var genderOption = selectionGender.options[selectionGender.selectedIndex].text;
    var age;
    if (birthday === undefined || birthday === null || birthday == "") {
        age = "N/a";
    }
    else {
        age = getAge(birthday);
    }

    if (author === undefined || author === null || author == "") {
        author = "Anónimo";
    }

    console.log("Nome: " + author + "\nData Nascimento: " + birthday + "\nIdade: " + age + "\nGenero: " + genderOption + "\nComentário: " + opinion);

    //document.getElementById("comentarios").innerHTML += '<div class="commentary-box"><h3>' + author + '</h3><hr><p class="commentary-text">' + opinion + '</p></div>';

    var text = '<div class="commentary-box"><h3>' + author + '</h3><hr><pre class="commentary-text">' + opinion + '</pre></div>';
    document.getElementById("commentarys-zone").insertAdjacentHTML('afterBegin', text);
    document.getElementById("data-form").reset();

};