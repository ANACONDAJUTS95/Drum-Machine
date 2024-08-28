function play(str) {
  const display = document.getElementById('display');

  // Display the sound name
  const sounds = {
    "Q": "Heater 1",
    "W": "Heater 2",
    "E": "Heater 3",
    "A": "Heater 4",
    "S": "Clap",
    "D": "Open-HH",
    "Z": "Kick-n'-Hat",
    "X": "Kick",
    "C": "Closed-HH"
  };
  display.innerText = sounds[str];

  // Play the sound
  const audio = document.getElementById(str);
  audio.currentTime = 0;
  audio.play();
}

function addActiveClass(key) {
  const pad = document.getElementById(key);
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
