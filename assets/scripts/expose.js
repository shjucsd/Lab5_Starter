// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const horns = document.getElementById('horn-select');
  const hornimg = document.querySelector("img");
  const hornaud = document.querySelector("audio");
  const jsConfetti = new JSConfetti()

  horns.addEventListener('change', function() {
    const hornval = horns.value;

    hornimg.src = "assets/images/"+hornval+".svg";

    hornaud.src = "assets/audio/"+hornval+".mp3";
  });

  const volimg = (document.getElementById("volume-controls")).querySelector("img");
  const vol = document.getElementById('volume');
  const btn = document.querySelector("button");

  btn.addEventListener('click', function() {
    hornaud.play();

    if(horns.value == 'party-horn'){
      jsConfetti.addConfetti();
    }
  })

  vol.addEventListener('change', function() {
    const volval = vol.value;
    hornaud.volume = (vol.value / 100).toPrecision(2);
    // console.log(hornaud.volume);

    if(volval == 0){
      volimg.src = "assets/icons/volume-level-0.svg";
    }
    else if(volval >= 1 && volval < 33){
      volimg.src = "assets/icons/volume-level-1.svg";
    }
    else if(volval >= 33 && volval < 67){
      volimg.src = "assets/icons/volume-level-2.svg";
    }
    else{
      volimg.src = "assets/icons/volume-level-3.svg";
    }
  })
}