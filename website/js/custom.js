var id = 1;

function buttonClick(id)
    {
        var al = $("#nav_buttons a");
        al.css("color", "");
        al.css("padding-bottom", "");
        al.css("border-bottom", "");
        var el = document.getElementById(id);
        el.style.color = "#20B2AA";
        el.style.paddingBottom = "10px";
        el.style.borderBottom = "2px solid lightseagreen";
    }

function next()
    {
        var a = document.getElementById("tutorial1_" + id);
        a.style.display = "none";
        id++;
        var b = document.getElementById("tutorial1_" + id);
        var c = id+1;

        if(document.getElementById("tutorial1_" + c) == null){
            $('#button_wrap').css('display', 'none');
            $('#button_naprej').css('display', 'block');
        }

        b.style.display = "block";
    }

function reset_page(){
    id = 1;
    console.log("reset");
    $("#button_naprej").css("display", "none");

}
