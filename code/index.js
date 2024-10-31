// Calculator Program

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    /* start easter eggs */
    if((display.value == '80085')||(display.value == '8008135')){
        display.value = "( * ) ( * )"
    }
    else if(display.value == '8008'){
        display.value = "Josh Peck";
    }
    else if(display.value == '404'){
        display.value = "error tyshi";
    }
    else if(display.value == '361/)/4/26'){
        display.value = "Edward :)";
    }
    else{
    /* end easter eggs */
        try{ /* error catcher */
            display.value = eval(display.value);
        }
        catch(error){
            display.value = "prolly like 2";
        }
    }
}
/* GitHub test */