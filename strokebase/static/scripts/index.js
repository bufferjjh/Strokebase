var facts = [
  "- According to the CDC, someone in the US has a stroke every 40 seconds.",
  "- According to the CDC, 1 in 6 deaths from cardiovascular disease was from stroke.",
  "- Stroke is the leading cause of serious long term disability.",
  "- Strokes can cause memory loss, vision problems, and paralysis."
];
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
function typeSentence(txt) {
  var i = 0;
  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("fact_curr").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, 30);
    }
  }
  typeWriter();
}
var index = 1;
setInterval(function(){
  document.getElementById('fact_curr').innerHTML = "";
  typeSentence(facts[index]);
  index++;
  index %= facts.length;
}, 8000);
