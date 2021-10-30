var user_res = localStorage.getItem("user_res");
console.log(user_res);
user_res = user_res.split(",");
for (var i = 0; i < user_res.length; i++) {
  user_res[i] = parseInt(user_res[i]);
}

//suggestions -> hypertension, bmi, smoking status

hypertension = [
  "Reduce the sodium in your diet",
  "Try to manage your stress",
  "Get regular exercise"
];

bmi = [
  "Lower the amount of calories consumed",
  "Try to avoid foods that are high in sugar and calories",
  "Get regular exercise"
];

smoking = [
  "In addition to putting one's health at risk, it can also be a financial burden",
  "Cigarettes are highly addictive",
  "Consult with your doctor for a rehab program or possible medication"
];

dict = {
  "hypertension": hypertension,
  "bmi": bmi,
  "smoking": smoking
}

function createFactor(name, div_color, res, imgSrc) {
  var d = document.createElement("div");
  var title = document.createElement("h2");
  title.innerHTML = name + " → " + res;
  d.appendChild(title);
  d.setAttribute("class","risk_factors");
  d.style.backgroundColor = div_color;
  for (var i = 0; i < 3; i++) {
    var p = document.createElement("p");
    p.innerHTML = dict[name][i];
    d.appendChild(p);
  }
  var backDiv = document.createElement("div");
  backDiv.setAttribute('class','imgDiv');
  var img = document.createElement("img");
  img.setAttribute("src",imgSrc);
  img.setAttribute('class','imgSrc');
  backDiv.appendChild(img);
  d.appendChild(backDiv);
  document.getElementById("bottom_content").appendChild(d);
}

var found = false;
if(user_res[2] == 1) {
  createFactor('hypertension','#81e4eb', 'Yes', '/static/blood-pressure.png');
  found = true;
}
if(user_res[6] >= 25) {
  createFactor('bmi','#ffc44f', user_res[6], '/static/fitness.png');
  found = true;
}
if(user_res[7] == 2) {
  createFactor('smoking','#34eb80', 'Currently smokes','static/noSmoking.png');
  found = true;
}

if(!found) {
  document.getElementById("risk_factor_title").innerHTML = "Looks Good!";
  var check = document.createElement("img");
  check.src="/static/green-checkmark.png";
  check.setAttribute("id", "check");
  document.getElementById("bottom_content").appendChild(check);
}

document.getElementById("bottom_content").appendChild(document.createElement('br'));
