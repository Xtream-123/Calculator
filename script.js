let input = document.getElementById("input");

let output = document.getElementById("output");

let calculation = document.getElementById("calculation");


function btnBack_event(){
    if(input.innerText.length > 1){
        if(input.innerText.at(-1) == "."){
            is_dot_there = false;
        }
    input.innerText = input.innerText.slice(0, -1);
    }   
    else{   
        input.innerText = "0";
    }
}
let btnBack = document.getElementById("btnBack");
btnBack.addEventListener("click", btnBack_event);


function btnC_event(){
    input.innerText = 0;
    calculation.innerText = 0;
    operator.innerText = "";
    is_dot_there = false;
}

let btnC = document.getElementById("btnC");
btnC.addEventListener("click", btnC_event);




function btn0_event(){
    input.innerText = parseFloat(input.innerText+ 0);
}

let btn0 = document.getElementById("btn0");
btn0.addEventListener("click", btn0_event);




function btn1_event(){
    input.innerText = parseFloat(input.innerText+ 1);
}

let btn1 = document.getElementById("btn1");

btn1.addEventListener("click", btn1_event);




function btn2_event(){
    input.innerText = parseFloat(input.innerText + 2);
}

let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", btn2_event);




function btn3_event(){
    input.innerText = parseFloat(input.innerText + 3);
}

let btn3 = document.getElementById("btn3");
btn3.addEventListener("click", btn3_event);




function btn4_event(){
    input.innerText =parseFloat(input.innerText + 4);
}

let btn4 = document.getElementById("btn4");
btn4.addEventListener("click", btn4_event);




function btn5_event(){
    input.innerText =parseFloat(input.innerText + 5);
}

let btn5 = document.getElementById("btn5");
btn5.addEventListener("click", btn5_event);




function btn6_event(){
    input.innerText = parseFloat(input.innerText + 6);
}

let btn6 = document.getElementById("btn6");
btn6.addEventListener("click", btn6_event);




function btn7_event(){
    input.innerText =parseFloat(input.innerText + 7);
}

let btn7 = document.getElementById("btn7");
btn7.addEventListener("click", btn7_event);




function btn8_event(){
    input.innerText =parseFloat(input.innerText + 8);
}

let btn8 = document.getElementById("btn8");
btn8.addEventListener("click", btn8_event);




function btn9_event(){
    input.innerText =parseFloat(input.innerText + 9);
}

let btn9 = document.getElementById("btn9");
btn9.addEventListener("click", btn9_event);




function btnPlus_event(){
    calculation.innerText = input.innerText;
    input.innerText = 0;
    operator.innerText = "+";
    is_dot_there = false;
}

let btnPlus = document.getElementById("btnPlus");
btnPlus.addEventListener("click", btnPlus_event);




function btnMinus_event(){
    calculation.innerText = input.innerText;
    input.innerText = 0;
    operator.innerText = "-";
    is_dot_there = false;
}

let btnMinus = document.getElementById("btnMinus");
btnMinus.addEventListener("click", btnMinus_event);




function btnMultiplication_event(){
    calculation.innerText = input.innerText;
    input.innerText = 0;
    operator.innerText = "×";
    is_dot_there = false;
}

let btnMultiplication = document.getElementById("btnMultiplication");
btnMultiplication.addEventListener("click", btnMultiplication_event);




function btnDivision_event(){
    calculation.innerText = input.innerText;
    input.innerText = 0;
    operator.innerText = "÷";
    is_dot_there = false;
}

let btnDivision = document.getElementById("btnDivision");
btnDivision.addEventListener("click", btnDivision_event);



let is_dot_there = false;

function btnPoint_event(){
    if(is_dot_there == false){
      input.innerText = input.innerText + ".";  
      is_dot_there = true
    }

    
}

let btnPoint = document.getElementById("btnPoint");
btnPoint.addEventListener("click", btnPoint_event);




function btnEqual_event(){
    if(operator.innerText =="+"){
    input.innerText = parseFloat(calculation.innerText ) + parseFloat(input.innerText) ;
    }

    if(operator.innerText =="-"){
    input.innerText = parseFloat(calculation.innerText ) - parseFloat(input.innerText) ;
    }

    if(operator.innerText =="×"){
    input.innerText = parseFloat(calculation.innerText ) * parseFloat(input.innerText) ;
    }

    if(operator.innerText =="÷"){
    input.innerText = parseFloat(calculation.innerText ) / parseFloat(input.innerText) ;
    }
}

let btnEqual = document.getElementById("btnEqual");
btnEqual.addEventListener("click", btnEqual_event)


// Keyboard access

document.addEventListener("keydown", function(event) {

    let key = event.key;

    if (key == "0") {
        btn0.click();
    }
    else if (key == "1") {
        btn1.click();
    }
    else if (key == "2") {
        btn2.click();
    }
    else if (key == "3") {
        btn3.click();
    }
    else if (key == "4") {
        btn4.click();
    }
    else if (key == "5") {
        btn5.click();
    }
    else if (key == "6") {
        btn6.click();
    }
    else if (key == "7") {
        btn7.click();
    }
    else if (key == "8") {
        btn8.click();
    }
    else if (key == "9") {
        btn9.click();
    }
    else if (key == "+") {
        btnPlus.click();
    }
    else if (key == "-") {
        btnMinus.click();
    }
    else if (key == "*") {
        btnMultiplication.click();
    }
    else if (key == "/") {
        btnDivision.click();
    }
    else if (key == ".") {
        btnPoint.click();
    }
    else if (key == "Enter" || key == "=") {
        btnEqual.click();
    }
    else if (key == "Backspace") {
        event.preventDefault();
        btnBack.click();
    }
    else if (key == "Escape") {
        btnC.click();
    }

});
