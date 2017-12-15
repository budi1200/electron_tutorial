function buttonClick(id) {
    var al = $("#nav_buttons a");
    al.css("color", '#74B1BE');
    al.css("border-bottom", "");
    var el = document.getElementById(id);
    el.style.color = "#20B2AA";
    el.style.borderBottom = "2px solid lightseagreen";
}

function next(id){
    var a = document.getElementById("tutorial1_" + id);
    a.style.display = "none";
    id++;
    var b = document.getElementById("tutorial1_" + id);
    b.style.display = "block";
}
