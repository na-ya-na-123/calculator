var result = document.getElementById('result');
function btnclick(value){
    result.value+=value
}
function clearscreen(){
    result.value="";
}
function findout(){
    var out=eval(result.value)
result.value=out;
}