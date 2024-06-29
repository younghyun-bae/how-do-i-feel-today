"use strict";

// DISPLAY OUTPUT
function displayOutput(type, data) {
  const output = document.getElementById(type);
  output.innerHTML = data;
}

// UPDATE OUTPUT
function updateOutput(type, dataFunction, rate) {
  displayOutput(type, dataFunction());
  setInterval(function () {
    displayOutput(type, dataFunction());
  }, rate);
}

// CALCULATE USER DATA
// date
const timeOfPageLoad = new Date();
const date =
  (timeOfPageLoad.getMonth() + 1) +
  ". " +
  timeOfPageLoad.getDate() +
  ". " +
  timeOfPageLoad.getFullYear();

displayOutput("date", date);

// GET ACCESS TO ELEMENTS
const button1 = document.getElementById('button-1');
const button2 = document.getElementById('button-2');
const button3 = document.getElementById('button-3');
const button4 = document.getElementById('button-4');
const button5 = document.getElementById('button-5');
const button6 = document.getElementById('button-6');
const text1 = document.getElementById('text-1');
const text2 = document.getElementById('text-2');
const clickingCounter = document.getElementById('clickingCounter');

const mood = document.getElementById('mood');


/* 
  BUTTON EVENT 
*/
var back_image, size_string;

var figure = "triangle"; // 'special' = default

var x = 100;
var y = 100;
var size = 1;
var dia_deg = 45;
var tri_deg = 68;


function ChangeView() {
    // STYLE SHAPES
    switch (figure) {
        case "circle": back_image = "radial-gradient( transparent 50%, antiquewhite 0), radial-gradient(transparent 50%, antiquewhite 0)";
            break;
        case "dia":
            if (y == 100) dia_deg = 45;
            else if (y == 75) dia_deg = 35;
            else if (y == 50) dia_deg = 25;

            back_image = "linear-gradient(" + String(dia_deg) + "deg, transparent 70%, antiquewhite 70%),"
            + "linear-gradient(" + String(180 - dia_deg) + "deg, transparent 70%, antiquewhite 70%),"
            + "linear-gradient(" + String(180 + dia_deg) + "deg, transparent 70%, antiquewhite 70%),"
            + "linear-gradient(" + String(360 - dia_deg) + "deg, transparent 70%, antiquewhite 70%)";
            break;
        case "rectangle": back_image = "linear-gradient(0deg, transparent 75%, antiquewhite 75%),"
            + "linear-gradient(90deg, transparent 75%, antiquewhite 75%),"
            + "linear-gradient(180deg, transparent 75%, antiquewhite 75%),"
            + "linear-gradient(270deg, transparent 75%, antiquewhite 75%)";
            break;
        case "triangle":
            if (y == 100) tri_deg = 68;
            else if (y == 75) tri_deg = 55;
            else if (y == 50) tri_deg = 40;

            back_image = "linear-gradient(" + String(tri_deg) + "deg, transparent 65%, antiquewhite 65%),"
            + "linear-gradient(-" + String(tri_deg) + "deg, transparent 65%, antiquewhite 65%),"
            + "linear-gradient(180deg, transparent 70%, antiquewhite 70%)";
            break;
    }
    
    // SET BACKGROUND GRAPHICS TO CSS
    size_string = String(x * size) + "px " + String(y * size) + "px";

    document.body.style.backgroundImage = back_image;
    document.body.style.backgroundSize = size_string;
};


/* 
  CLICK EVENT LISTENER
*/

// To change a shape
button1.addEventListener('click', function() {
    var buttonText = button1.innerHTML;

    if(buttonText === 'happy'){
        button1.innerHTML = 'normal';
        figure = "circle";
    }
    else if (buttonText === 'normal') { 
        button1.innerHTML = 'complicated';
        figure = "dia";
    }
    else if(buttonText === 'complicated'){
        button1.innerHTML = 'boring';
        figure = "rectangle";
    }
    else if(buttonText === 'boring'){
        button1.innerHTML = 'happy';
        figure = "triangle";
    }

    ChangeView()
});

// To change a color
button2.addEventListener('click', function() {
    var buttonText = button2.innerHTML;

    if(buttonText === 'nervous'){
        button2.innerHTML = 'sad';
        document.body.style.backgroundColor = "#0494EC";
    }
    else if(buttonText==='sad'){ 
        button2.innerHTML = 'angry';
        document.body.style.backgroundColor = "#B32408";
    }
    else if(buttonText==='angry'){ 
        button2.innerHTML = 'relieved';
        document.body.style.backgroundColor = "#0E6B0E";
    }
    else if(buttonText==='relieved'){ 
        button2.innerHTML = 'happy';
        document.body.style.backgroundColor = "#FFD700";
    }
    else if(buttonText==='happy'){ 
        button2.innerHTML = 'nervous';
        document.body.style.backgroundColor = "#BC84DC";
    }
});

// To change a size
button3.addEventListener('click', function() {
    var buttonText = button3.innerHTML;

    if(buttonText === 'low'){
        button3.innerHTML = 'high';
        size = 2;
    }
    else if (buttonText === 'high') { 
        button3.innerHTML = 'low';
        size = 1;
    }

    ChangeView()
});

// To adjust a blurry effect
button4.addEventListener('click', function() {
    var buttonText = button4.innerHTML

    if(buttonText === 'slept well'){
        button4.innerHTML = 'did not slept well'
        document.body.classList.add('drop-blur')
    }
    else if (buttonText === 'did not slept well') { 
        button4.innerHTML = 'slept well'
        document.body.classList.remove('drop-blur')
    }
});

// To change a height
button5.addEventListener('click', function() {
    var buttonText = button5.innerHTML;

    if(buttonText === 'not'){
        button5.innerHTML = 'a bit'
        y = 75;
    }
    else if (buttonText === 'a bit') { 
        button5.innerHTML = 'super'
        y = 50;
    }
    else if(buttonText === 'super') { 
        button5.innerHTML = 'not'
        y = 100;
    }

    ChangeView();
});


/*
  MOUSE EVENT
*/

// MOUSEMOVE EVENT LISTENER
const body = document.body;
const circle = document.getElementById('circle');
// TOUCHMOVE EVENT LISTENER
body.addEventListener('mousemove', function(e) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  circle.style.left = mouseX + 'px';
  circle.style.top = mouseY + 'px';
});
body.addEventListener('touchmove', function() {
    const touch = e.touches[0];
    const touchX = e.touch.clientX;
    const touchY = e.touch.clientY;

    circle.style.left = mouseX + 'px';
    circle.style.top = mouseY + 'px';
});
