var ans = [];
var currSlide = -1;
for (var i = 0; i < 10; i++) {
  ans.push(-1);
}
ans[2] = 0;
ans[3] = 0;
ans[4] = 1;
ans[9] = 0;
//-1 -> unanswered
var currIndex = 0;
var contentArea = document.getElementById("container");

const slide1Content = (
  <React.Fragment>
    <select id="gender_dropdown">
      <option value="select" id="s-1">Select</option>
      <option value="male" id="s-2">Male</option>
      <option value="female" id="s-3">Female</option>
      <option value="other" id="s-4">Other</option>
    </select>
    <h1 id="slideTitle">Select Gender</h1>
    <p id="slide1Exp">
      <a className='bullet'>• &nbsp;</a><strong>"It is well-documented that the incidence of stroke is higher in men than in women in all age classes."</strong>
    - (Wyller, 1999)
    </p>
  </React.Fragment>
);

function q1() {
  currSlide = 0;
  ReactDOM.render(
    slide1Content
    ,contentArea);
  if(ans[0] != -1) {
    //restore previous answer
    if(ans[0] == 0) {
      document.getElementById("s-2").selected = "selected";
    }
    else if(ans[0] == 1) {
      document.getElementById("s-3").selected = "selected";
    }
    else if(ans[0] == 2) {
      document.getElementById("s-4").selected = "selected";
    }
  }
  document.getElementById("gender_dropdown").addEventListener('click', function(event) {
    var gender = document.getElementById("gender_dropdown").value;
    if(gender != "select") {
      document.getElementById("d0").style.backgroundColor = "green";
      if(gender == 'male') {
        ans[0] = 0;
      }
      else if(gender == "female") {
        ans[0] = 1;
      }
      else {
        ans[0] = 2;
      }
    }
    else {
      document.getElementById("d0").style.backgroundColor = "gray";
      ans[0] = -1;
    }
  });
}
const numSet = new Set();
for (var i = 0; i < 10; i++) {
  numSet.add(i.toString());
}
numSet.add('.')
function checkNum(str) {
  if(str.length == 0) {
    return false;
  }
  for (var i = 0; i < str.length; i++) {
    if(!numSet.has(str.charAt(i))) {
      return false;
    }
  }
  return true;
}
const slide2Content = (
  <React.Fragment>
    <h1 id="slideTitle">Enter age</h1>
    <input id="text_input2" placeholder="Age">
    </input>
    <p id="integerDes">*Number like 49 or 23</p>
    <p id="slide2Exp">
      <a className='bullet'>• &nbsp;</a><strong>"The (stroke) risk increases with age, the incidence doubling with each decade after the age of 45 years and over 70% of all strokes occur above the age of 65."</strong>
    - (Kelly-Hayes, 2010)
    </p>
  </React.Fragment>

);

function checkQ2() {
  var age = document.getElementById("text_input2").value;
  if(checkNum(age)) {
    //register in array
    //change dot color to green
    ans[1] = age;
    document.getElementById("d1").style.backgroundColor = "green";
  }
  else {
    //change dot color to gray
    //change array cell back to -1
    ans[1] = -1;
    document.getElementById("d1").style.backgroundColor = "gray";
  }
}

function q2() {
  //getting age
  currSlide = 1;
  ReactDOM.render(<h1></h1>,contentArea);
  ReactDOM.render(slide2Content, contentArea);
  if(ans[1] != -1) {
    document.getElementById('text_input2').value = ans[1];
  }
  document.getElementById("text_input2").setAttribute("onkeyup","checkQ2()");
}

const slide3Content = (
  <React.Fragment>
    <h1 id="slideTitle">Hypertension?</h1>

    <div class="button r" id="button-1">
      <input type="checkbox" class="checkbox" id="box1"></input>
      <div class="knobs"></div>
      <div class="layer"></div>
    </div>
    <p id="hyperdef">
      The American Heart Association (AHA) defines hypertension as systolic pressure at or above 130 (mm Hg) or diastolic pressure at or above 80 (mm Hg).
      The AHA labels high blood pressure as the leading cause of stroke.
    </p>
  </React.Fragment>
);
function handleClick3() {
  const checkbox = document.getElementById("box1");
  if(checkbox.checked) {
    ans[2] = 1;
    //user has hypertension
  }
  else {
    ans[2] = 0;
    //does not have hypertension
  }
}
function q3() {
  currSlide = 2;
  ReactDOM.render(slide3Content, contentArea);
  const checkbox = document.getElementById("box1");
  if(ans[2] == 1) {
    checkbox.checked = true;
  }
  else {
    checkbox.checked = false;
  }
  document.getElementById("d2").style.backgroundColor = "green";
  //true = yes, false = no
  checkbox.setAttribute("onclick","handleClick3()");
}

const slide4Content = (
  <React.Fragment>
    <h1 id="slideTitle">Married?</h1>
    <div class="button2 r" id="button-2">
      <input type="checkbox" class="checkbox2" id="box2"></input>
      <div class="knobs2"></div>
      <div class="layer2"></div>
    </div>
    <p id="hyperdef">
      Research shows that people who are married may have a smaller risk of dying from stroke.
    </p>
  </React.Fragment>
);
function handleClick4() {
  const checkbox2 = document.getElementById("box2");
  if(checkbox2.checked) {
    ans[3] = 1;
    //user has hypertension
  }
  else {
    ans[3] = 0;
    //does not have hypertension
  }
}
function q4() {
  currSlide = 3;
  ReactDOM.render(slide4Content, contentArea);
  const checkbox2 = document.getElementById("box2");

  document.getElementById("d3").style.backgroundColor = "green";
  if(ans[3] == 1) {
    checkbox2.checked = true;
  }
  else {
    checkbox2.checked = false;
  }
  checkbox2.setAttribute("onclick","handleClick4()");
}


const slide5Content = (
  <React.Fragment>
    <h1 id="slideTitle">Rural Residence?</h1>
    <div class="button r" id="button-1">
      <input type="checkbox" class="checkbox" id="box3"></input>
      <div class="knobs"></div>
      <div class="layer"></div>
    </div>
    <p id="hyperdef">
      "Rural residence is associated with stroke incidence and mortality (Kapral et al., 2019)."
    </p>
  </React.Fragment>
);
function handleClick5() {
  const checkbox3 = document.getElementById("box3");
  if(checkbox3.checked) {
    ans[4] = 0;
    //rural
  }
  else {
    ans[4] = 1;
    //not rural
  }
}
function q5() {
  currSlide = 4;
  ReactDOM.render(slide5Content, contentArea);
  const checkbox3 = document.getElementById("box3");
  //checkbox3.replaceWith(checkbox3.cloneNode(true));
  document.getElementById("d4").style.backgroundColor = "green";

  if(ans[4] == 0) {
    checkbox3.checked = true;
  }
  else {
    checkbox3.checked = false;
  }

  checkbox3.setAttribute("onclick","handleClick5()");
}

const slide6Content = (
  <React.Fragment>
  <h1 id="slideTitle">Average Glucose Level</h1>
    <input id="text_input3" placeholder="mg/dL">
    </input>
    <p id="integerDes">*Number like 49 or 23</p>
    <p id="slide6Text">Having too much sugar in your blood damages blood vessels, increasing stroke risk. Too much glucose can also cause fatty deposits. (Stroke.org UK)</p>
  </React.Fragment>
);

function checkQ6() {
  var gLevel = document.getElementById("text_input3").value;
  if(checkNum(gLevel)) {
    //register in array
    //change dot color to green
    ans[5] = gLevel;
    document.getElementById("d5").style.backgroundColor = "green";
  }
  else {
    //change dot color to gray
    //change array cell back to -1
    ans[5] = -1;
    document.getElementById("d5").style.backgroundColor = "gray";
  }
}
function q6() {
  currSlide = 5;
  ReactDOM.render(<h1></h1>,contentArea);
  ReactDOM.render(slide6Content, contentArea);
  if(ans[5] != -1) {
    document.getElementById('text_input3').value = ans[5];
  }
  document.getElementById("text_input3").setAttribute("onkeyup","checkQ6()");
}

const slide7Content = (
  <React.Fragment>
  <h1 id="slideTitle">Body Mass Index</h1>
    <input id="text_input3" placeholder="BMI">
    </input>
    <p id="integerDes">*Number like 49 or 23</p>
    <p id="bmi_link">Calculate your BMI <a target="_blank" and rel="noopener noreferrer" href="https://www.nhlbi.nih.gov/health/educational/lose_wt/BMI/bmicalc.htm">here</a></p>
    <p id="slide7Des">According to the World Stroke Organization, "Being
categorised as overweight increases your risk of stroke by
22% and if you are obese that risk increases by 64%." </p>
  </React.Fragment>
);
function checkQ7() {
  var bmi = document.getElementById("text_input3").value;
  if(checkNum(bmi)) {
    //register in array
    //change dot color to green
    ans[6] = bmi;
    document.getElementById("d6").style.backgroundColor = "green";
  }
  else {
    //change dot color to gray
    //change array cell back to -1
    ans[6] = -1;
    document.getElementById("d6").style.backgroundColor = "gray";
  }
}
function q7() {
  currSlide = 6;
  ReactDOM.render(<h1></h1>,contentArea);
  ReactDOM.render(slide7Content, contentArea);
  if(ans[6] != -1) {
    document.getElementById('text_input3').value = ans[6];
  }
  document.getElementById("text_input3").setAttribute("onkeyup","checkQ7()");
}

const slide8Content = (
  <React.Fragment>
    <select id="smoking_dropdown">
      <option value="select" id="s-1">Select</option>
      <option value="Never Smoked" id="s-2">Never Smoked</option>
      <option value="Formerly Smoked" id="s-3">Formerly Smoked</option>
      <option value="Smokes" id="s-4">Smokes</option>
    </select>
    <h1 id="slideTitle">Smoking Status</h1>
    <p id="slide8Des">According to Stroke Association UK, "If you smoke
20 cigarettes a day, you are six times more
likely to have a stroke compared to a nonsmoker."</p>
  </React.Fragment>
);

function q8() {
  currSlide = 7;
  ReactDOM.render(<h1></h1>,contentArea);
  ReactDOM.render(slide8Content, contentArea);
  if(ans[7] != -1) {
    //restore previous answer
    if(ans[7] == 0) {
      document.getElementById("s-2").selected = "selected";
    }
    else if(ans[7] == 1) {
      document.getElementById("s-3").selected = "selected";
    }
    else if(ans[7] == 2) {
      document.getElementById("s-4").selected = "selected";
    }
  }
  document.getElementById("smoking_dropdown").addEventListener('click', function(event) {
    var status = document.getElementById("smoking_dropdown").value;
    if(status != "select") {
      document.getElementById("d7").style.backgroundColor = "green";
      if(status == 'Never Smoked') {
        ans[7] = 0;
      }
      else if(status == "Formerly Smoked") {
        ans[7] = 1;
      }
      else {
        ans[7] = 2;
      }
    }
    else {
      document.getElementById("d7").style.backgroundColor = "gray";
      ans[7] = -1;
    }
  });
}
const slide9Content = (
  <React.Fragment>
    <select id="work_dropdown">
      <option value="select" id="s-1">Select</option>
      <option value="Government" id="s-2">Government</option>
      <option value="Private" id="s-3">Private</option>
      <option value="Self-employed" id="s-4">Self-employed</option>
      <option value="Children" id="s-5">Children</option>
      <option value="Never worked" id="s-6">Never worked</option>
    </select>
    <h1 id="slideTitle">Work Type</h1>
    <p id="slide8Des">"Researchers found that people who had high-stress jobs were 22 percent more likely to experience a stroke than those who had low-stress jobs" (Boxe, 2015).</p>
  </React.Fragment>
);
function q9() {
  currSlide = 8;
  ReactDOM.render(<h1></h1>,contentArea);
  ReactDOM.render(slide9Content, contentArea);
  var el = document.getElementById("work_dropdown");
  if(ans[8] != -1) {
    //2 - 6 inclusive
    document.getElementById("s-" + ans[8]).selected = "selected";
  }
  el.addEventListener('click', function(event) {
    var status = el.value;
    if(status != "select") {
      document.getElementById("d8").style.backgroundColor = "green";
      if(status == 'Government') {
        ans[8] = 2;
      }
      else if(status == "Private") {
        ans[8] = 3;
      }
      else if(status == "Self-employed") {
        ans[8] = 4;
      }
      else if(status == "Children") {
        ans[8] = 5;
      }
      else if(status == "Never worked") {
        ans[8] = 6;
      }
    }
    else {
      document.getElementById("d8").style.backgroundColor = "gray";
      ans[8] = -1;
    }
  });
}
const slide10Content = (
  <React.Fragment>
    <h1 id="slideTitle">Heart Disease?</h1>
    <div class="button r" id="button-1">
      <input type="checkbox" class="checkbox" id="box3"></input>
      <div class="knobs"></div>
      <div class="layer"></div>
    </div>
    <p id="hyperdef">
        According to the CDC, "Common heart disorders can increase your risk for stroke."
    </p>
  </React.Fragment>
);

function handleClick6() {
  const checkbox3 = document.getElementById("box3");
  if(checkbox3.checked) {
    ans[9] = 1;
    //heart disease
  }
  else {
    ans[9] = 0;
    //no heart disease
  }
}
function q10() {
  currSlide = 9;
  ReactDOM.render(<h1></h1>, contentArea);
  ReactDOM.render(slide10Content, contentArea);
  const checkbox = document.getElementById("box3");
  if(ans[9] == 1) {
    checkbox.checked = true;
  }
  else {
    checkbox.checked = false;
  }
  document.getElementById("d9").style.backgroundColor = "green";
  //true = yes, false = no
  checkbox.setAttribute("onclick","handleClick6()");
}

const submitSlideContent = (
  <React.Fragment>
    <center><h1>Submit</h1></center>
    <p id="submitSlideDes">The model will return <b>stroke</b> or <b>no stroke</b> along with the confidence of its prediction. Please make sure all questions are answered.</p>
    <form method="POST">
      <input name="arrayContent" id="arrayForm"></input>
      <input id="submitBtn" type="button" value="Predict"></input>
    </form>
    <span class="dots-cont"> <span class="dot dot-1"></span> <span class="dot dot-2"></span> <span class="dot dot-3"></span> </span>
  </React.Fragment>
);
function isDone() {
  for (var i = 0; i < 10; i++) {
    if(ans[i] == -1) {
      return false;
    }
  }
  return true;
}
function submitSlide() {
  currSlide = 10;
  ReactDOM.render(<h1></h1>,contentArea);
  ReactDOM.render(submitSlideContent, contentArea);
  if(isDone()) {
    var el = document.getElementById("submitBtn");
    el.style.cursor = "pointer";
    el.style.color = "white";
    el.style.backgroundColor = "#1a8cff";
    el.setAttribute("type", "submit");
    document.getElementById("arrayForm").value = ans.toString();
    localStorage.setItem("user_res",ans.toString());
  }
}
//1->10
var pageSlides = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,submitSlide];

function goBack() {
  if(currSlide > 0) {
    currSlide -= 1;
    pageSlides[currSlide]();
  }
  console.log(currSlide);
}
function goFoward() {
  if(currSlide <= 9) {
    currSlide += 1;
    pageSlides[currSlide]();
  }
  console.log(currSlide);
}
