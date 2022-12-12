// LOGGING
console.log('hi');

// VARIABLES: CONST / LET
const message = 'hello';
// console.log(message);

let counter = 0;
// console.log(counter);

// counter = counter + 1;
// console.log(counter);
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
  timeOfPageLoad.getFullYear() +
  "/" +
  (timeOfPageLoad.getMonth() + 1) +
  "/" +
  timeOfPageLoad.getDate();
displayOutput("date", date);

// DATA TYPES
const number = 1;
const string = '1';
const boolean = false;
let undefinedVariable;
// console.log(number);
// console.log(typeof(number));

// GET ELEMENT BY ID
const button1 = document.getElementById('button-1');
const button2 = document.getElementById('button-2');
const button3 = document.getElementById('button-3');
const button4 = document.getElementById('button-4');
const button5 = document.getElementById('button-5');
const button6 = document.getElementById('button-6');
const text1 = document.getElementById('text-1');
const text2 = document.getElementById('text-2');
const clickingCounter = document.getElementById('clickingCounter');
// console.log(button1);

const mood = document.getElementById('mood');


// CHANGE CSS / CLASS WITH JS
// text1.style.color = 'red';
// text1.classList.add('hidden');

// CLICK EVENT LISTENER
// when you click on button-1
button1.addEventListener('click', function () {
  var buttonText = button1.innerHTML
  if(buttonText === 'special'){
    button1.innerHTML = 'normal'

   //mood.style.backgroundColor = 'blue'

    mood.classList.remove('special')
    mood.classList.add('normal')

  } else if(buttonText === 'normal') { 
    button1.innerHTML = 'excited'

  }
  else if(buttonText === 'excited'){
    button1.innerHTML = 'boring'
  }
  else if(buttonText === 'boring'){
    button1.innerHTML = 'special'
  }
});

// when you click on button-2
button2.addEventListener('click', function () {
  // toggle class that hides text-1

  var buttonText = button2.innerHTML

  if(buttonText === 'nervous'){
    button2.innerHTML = 'sad'

   //mood.style.backgroundColor = 'blue'

    mood.classList.remove('nervous')
    mood.classList.add('sad')
  }
    else if(buttonText==='sad'){ 
      button2.innerHTML = 'angry'

    }
    else if(buttonText==='angry'){ 
      button2.innerHTML = 'relieved'

    }
    else if(buttonText==='relieved'){ 
      button2.innerHTML = 'happy'

    }
    else if(buttonText==='happy'){ 
      button2.innerHTML = 'nervous'

    }
    

  // increment counter and output new value
  /*counter += 1;
  clickingCounter.innerHTML = counter;*/
});

// when you click on button-3
button3.addEventListener('click', function () {
 
    var buttonText = button3.innerHTML
    if(buttonText === 'low'){
      button3.innerHTML = 'high'

      mood.classList.remove('special')
      mood.classList.add('normal')
  
    } else if(buttonText === 'high') { 
      button3.innerHTML = 'low'
  
}});

button4.addEventListener('click', function () {
 
  var buttonText = button4.innerHTML
  if(buttonText === 'slept well'){
    button4.innerHTML = 'did not slept well'

    mood.classList.remove('special')
    mood.classList.add('normal')

  } else if(buttonText === 'did not slept well') { 
    button4.innerHTML = 'slept well'

}});

button5.addEventListener('click', function () {
 
  var buttonText = button5.innerHTML
  if(buttonText === 'not'){
    button5.innerHTML = 'bit'

    mood.classList.remove('special')
    mood.classList.add('normal')

  } else if(buttonText === 'bit') { 
    button5.innerHTML = 'really'
  }
    else if(buttonText === 'really') { 
      button5.innerHTML = 'not'

}});

button6.addEventListener('click', function () {
 
  var buttonText = button6.innerHTML
  if(buttonText === 'fast'){
    button6.innerHTML = 'slow'

    mood.classList.remove('special')
    mood.classList.add('normal')

  } else if(buttonText === 'slow') { 
    button6.innerHTML = 'fast'
  }
  });

// MOUSEMOVE EVENT LISTENER
const body = document.body;
const circle = document.getElementById('circle');

body.addEventListener('mousemove', function (e) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  // console.log(mouseX, mouseY);

  circle.style.left = mouseX + 'px';
  circle.style.top = mouseY + 'px';
});

// TOUCHMOVE EVENT LISTENER
body.addEventListener('touchmove', function () {
  const touch = e.touches[0];
  const touchX = e.touch.clientX;
  const touchY = e.touch.clientY;
  // console.log(touchX, touchY);

  circle.style.left = mouseX + 'px';
  circle.style.top = mouseY + 'px';
}



);
