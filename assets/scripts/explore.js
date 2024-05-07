// explore.js

window.addEventListener('DOMContentLoaded', init);
const synth = window.speechSynthesis;

function init() {
  populateVoiceList();
  updateFace();

}
function populateVoiceList() {
  if (typeof speechSynthesis === "undefined") {
    return;
  }

  const voices = speechSynthesis.getVoices();

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
  const face_img = (document.getElementById("explore")).querySelector("img");
  setTimeout(() => {
    if (synth.speaking) {
      // console.log
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
