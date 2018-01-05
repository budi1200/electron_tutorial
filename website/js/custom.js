var id = 1;

var current;

function buttonClick(id)
    {
        current = id.slice(-1);
        var vaja_number = "tutorial" + current + "_length";
        var al = $("#nav_buttons a");
        var tut_length = $("#tutorial" + current + "_wrapper").children().length;
        al.css("color", "");
        al.css("padding-bottom", "");
        al.css("border-bottom", "");
        var el = document.getElementById(id);
        el.style.color = "#20B2AA";
        el.style.paddingBottom = "10px";
        el.style.borderBottom = "2px solid lightseagreen";
        for(var i = 2; i <= tut_length; i++){
            var neki = $("#tutorial" + current + "_" + i);
            neki.css("display", "none");
        }
    }

function next()
    {
        var a = document.getElementById("tutorial" + current + "_" + id);
        a.style.display = "none";
        id++;
        var b = document.getElementById("tutorial" + current + "_" + id);
        var c = id+1;
        if(document.getElementById("tutorial" + current + "_" + c) == null){
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
