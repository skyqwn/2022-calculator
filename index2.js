const btn = document.querySelectorAll(".btn");
const resultDiv = document.querySelector(".result");

let calNum = "";
let calFunc = [];
let showString = [];
let result = 0;

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

      calFunc.forEach((a, i, array) => {
        if (i === 0) {
          if (array[1] === "+") resultNum = array[0] + array[2];
        }
        if (i % 2 === 1 && i != 1) {
          resultNum = resultNum + array[i + 1];
        }
      });
      showString = [];
      paintResult(resultNum);
      return;
    }
    if (calNum) {
      const convertNum = Number(calNum);
      calFunc.push(convertNum);
      calFunc.push(value);
      calNum = "";
      paintResult(value);
    }

    if (!calNum) {
      calFunc.pop();
      calFunc.push(value);
      showString.pop();
      paintResult(value);
    }
  }
};

const paintResult = (value) => {
  showString.push(value);
  resultDiv.innerHTML = showString.join("");
};

const init = () => {
  btn.forEach((data) => {
    data.addEventListener("click", handleClick);
  });
};

init();
