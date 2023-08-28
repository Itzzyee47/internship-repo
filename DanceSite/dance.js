let n = document.getElementById('dropdown');
function drop(){
    let op = n.style.display;
    if(op != "block"){
        n.style.display = "block";
    }else{
        n.style.display = "none";
    }
}