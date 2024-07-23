function play(str) {
    const display = document.getElementById('display');
  
    if (str === "Q") {
      display.innerText = "Heater 1";
    } else if (str === "W") {
      display.innerText = "Heater 2";
    } else if (str === "E") {
      display.innerText = "Heater 3";
    } else if (str === "A") {
      display.innerText = "Heater 4";
    } else if (str === "S") {
      display.innerText = "Clap";
    } else if (str === "D") {
      display.innerText = "Open-HH";
    } else if (str === "Z") {
      display.innerText = "Kick-n'-Hat";
    } else if (str === "X") {
      display.innerText = "Kick";
    } else if (str === "C") {
      display.innerText = "Closed-HH";
    }
    
    const audio = document.getElementById(str);
    audio.currentTime = 0;
    audio.play();
  }
  
  function addActiveClass(key) {
    const pad = document.querySelector(`#${key.toUpperCase()}`).parentElement;
    pad.classList.add('drum-pad-active');
    setTimeout(() => pad.classList.remove('drum-pad-active'), 100);
  }
  
  window.document.onkeyup = function(event) {
    const keystroke = event.key.toUpperCase();
    if (["Q", "W", "E", "A", "S", "D", "Z", "X", "C"].includes(keystroke)) {
      play(keystroke);
      addActiveClass(keystroke);
    }
  }
  