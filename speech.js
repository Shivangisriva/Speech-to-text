let st = document.querySelector(".start");
let sp = document.querySelector(".stop");
let text = document.querySelector(".write");
let mic  = document.querySelector("#mic");

const recognition = new webkitSpeechRecognition() || new SpeechRecognition();

recognition.interimResults = true;
recognition.continuous  = true;

st.addEventListener('click',()=>{
 recognition.start();
 st.disabled = true;
 sp.disabled = false;
 st.textContent="Recording";
 mic.style.color ="red";
});

sp.addEventListener('click',()=>{
 recognition.stop();
 sp.disabled = true;
 st.disabled = false;
 sp.textContent="Stop";
 mic.style.color ="inherit";
});

recognition.onresult = event =>{
 const res = event.results[event.results.length -1][0].transcript;
 text.textContent = res;
};
recognition.onend =()=>{
 sp.disabled = true;
 st.disabled = false;
 st.textContent="start";

};