// explore.js

window.addEventListener('DOMContentLoaded', init);
var voices;
const synth = window.speechSynthesis;

function init() {
  populateVoiceList();

  const pressToTalk = (document.getElementById("explore")).querySelector("button");
  const textarea = (document.getElementById("explore")).querySelector("textarea");
  pressToTalk.addEventListener('click', () => {

    // credit: https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
    let inputText = textarea.value;
    let utterThis = new SpeechSynthesisUtterance(inputText);

    let voiceSelect = document.getElementById("voice-select")
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");

    // console.log("selected option is" + selectedOption);
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }

    synth.speak(utterThis);
    updateFace();
  })

}

// credit: https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/getVoices
function populateVoiceList() {
  voices = speechSynthesis.getVoices();
  if (typeof speechSynthesis === "undefined") {
    return;
  }

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += " — DEFAULT";
    }
    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    document.getElementById("voice-select").appendChild(option);
  }
}

function updateFace() {
  // https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speaking
  const face_img = (document.getElementById("explore")).querySelector("img");
  setTimeout(() => {
    if (synth.speaking) {
  
      face_img.setAttribute('src', 'assets/images/smiling-open.png');
      updateFace();
    } else {
      face_img.setAttribute('src', 'assets/images/smiling.png');
    }
  }, 200);
}

populateVoiceList();
if (
  typeof speechSynthesis !== "undefined" &&
  speechSynthesis.onvoiceschanged !== undefined
) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}
