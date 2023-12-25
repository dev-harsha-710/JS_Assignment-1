document.getElementById("submit").addEventListener("click", showResult);

const SEAT_NUMBER = document.getElementById("roll");
const NAME = document.getElementById("name");
const JAVA = document.getElementById("java");
const SOFTWARE_ENGINEERING = document.getElementById("softwareEngg");
const EMBEDDED_SYSTEM = document.getElementById("embeddedSys");
const COMPUTER_GRAPHICS = document.getElementById("computerGraphics");
const RESULT = document.getElementById("result");
const TABLE = document.getElementById("studResult");

function showResult() {
  let roll = Number(document.getElementById("getRoll").value);
  reset();
  for (let stud of resultList) {
    if (stud.roll === roll) {
      SEAT_NUMBER.innerHTML = stud.roll;
      NAME.innerHTML = stud.name;
      JAVA.innerHTML = stud.java;
      SOFTWARE_ENGINEERING.innerHTML = stud.softEngg;
      EMBEDDED_SYSTEM.innerHTML = stud.embeddedSys;
      COMPUTER_GRAPHICS.innerHTML = stud.computerGraphics;
      RESULT.innerHTML = stud.result;
      if (stud.result === "Passed") RESULT.style.backgroundColor = `green`;
      else RESULT.style.backgroundColor = `red`;
      RESULT.style.color = `white`;
    }
  }

  if (SEAT_NUMBER.innerHTML == "" || SEAT_NUMBER.innerHTML == "0") {
    TABLE.style.display = "none";
    alert("Roll numbers can be between 100 and 103");
  } else {
    TABLE.style.display = "inline";
  }
}

function reset() {
  debugger;
  SEAT_NUMBER.innerHTML = "";
  NAME.innerHTML = "";
  JAVA.innerHTML = "";
  SOFTWARE_ENGINEERING.innerHTML = "";
  EMBEDDED_SYSTEM.innerHTML = "";
  COMPUTER_GRAPHICS.innerHTML = "";
  RESULT.innerHTML = "";
}

let resultList = [
  {
    roll: 100,
    name: "Harsha Gawade",
    java: 100,
    softEngg: 95,
    embeddedSys: 88,
    computerGraphics: 93,
    result: "Passed",
  },
  {
    roll: 101,
    name: "Gayatri Pawar",
    java: 88,
    softEngg: 73,
    embeddedSys: 80,
    computerGraphics: 76,
    result: "Passed",
  },
  {
    roll: 102,
    name: "Saisha Pawar",
    java: 90,
    softEngg: 85,
    embeddedSys: 78,
    computerGraphics: 73,
    result: "Passed",
  },
  {
    roll: 103,
    name: "Ashwini Gupta",
    java: 54,
    softEngg: 48,
    embeddedSys: 33,
    computerGraphics: 29,
    result: "Failed",
  },
];
