function OnOff(){
    var x = document.getElementById("input-font");
    if(x.value == "Off") {
        x.value = "";
    }
    else {
        x.value = "Off";
    }
}
function show(ch) {
    var x = document.getElementById("input-font");
    if (x.value=="Off"){
        alert("Please turn on calculator");
    }
    else {
        x.value +=ch;
    }
}
function solve() {
    var x = document.getElementById("input-font");
    if (x.value=="Off"){
        alert("Please turn on calculator");
    }
    else {
        let x = document.getElementById("input-font").value;
        let y = eval(x);
        document.getElementById("input-font").value = y;
    }
}
function clr() {
    var x = document.getElementById("input-font");
    if (x.value=="Off"){
        alert("Please turn on calculator");
    }
    else {
        document.getElementById("input-font").value = "";
    }
}
function del(){
    var x = document.getElementById("input-font");
    if (x.value=="Off"){
        alert("Please turn on calculator");
    }
    else {
        let x = document.getElementById("input-font").value;
        let y = x.slice(0,-1);
        document.getElementById("input-font").value = y;
    }
}
