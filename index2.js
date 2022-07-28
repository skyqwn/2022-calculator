const btn = document.querySelectorAll(".btn");
const resultDiv = document.querySelector(".result");

let calNum = "";
let calFunc = [];
let showString = [];
let result = 0;

const paintResult = (value) => {
  showString.push(value);
  resultDiv.innerText = showString.join("");
};

const checkNumber = (value) => {
  if (value === "0") return true;
  return Boolean(Number(value));
};

const handleClick = (e) => {
  const value = e.target.innerText;
  const isNumber = checkNumber(value);

  if (isNumber) {
    calNum += value;
    paintResult(value);
  }
  if (!isNumber) {
    if (value === "=") {
      if (calNum) {
        const convertNum = Number(calNum);
        calFunc.push(convertNum);
      }
    }
  }
};

const init = () => {
  btn.forEach((data) => {
    data.addEventListener("click", handleClick);
  });
};

init();
