const display=document.getElementById("display");
function empty(){
    display.value="";
}
function addtodisplay(value){
    display.value+=value;
}
function calculate(){
    try{
        display.value=eval(display.value);
    }catch(error){
        display.value="Error";
    }
}
function clearLast(){
    display.value=display.value.slice(0,-1);
}