const btn = document.querySelectorAll(".btn");
const result = document.querySelector(".result");

let showString = [];
let calNum = "";
let calFunc = [];
let resultNum = 0;

const checkNumber = (value) => {
  if (value === "0") return true;
  return Boolean(Number(value));
};

const handleClick = (e) => {
  const value = e.target.innerText;
  const isNumber = checkNumber(value); // 숫자인지 아닌지 확인을해야된다 부호를 걸러내야하기때문에
  if (isNumber) {
    // calNum = calNum + value; //calNum += value;
    calNum += value;
    paintResult(value);
  }
  if (!isNumber) {
    // //const lastItemOfCalFunc = calFunc[calFunc.length - 1];//
    if (value === "=") {
      console.log(calFunc);
      if (calNum) {
        const convertNum = Number(calNum);
        calFunc.push(convertNum);
      }

      calFunc.forEach((a, i, array) => {
        if (i === 0) {
          if (array[1] === "+") resultNum = array[0] + array[2];
          if (array[1] === "-") resultNum = array[0] - array[2];
          if (array[1] === "*") resultNum = array[0] * array[2];
          if (array[1] === "/") resultNum = array[0] / array[2];
          console.log(resultNum);
        }
        if (i % 2 === 1 && i !== 1) {
          resultNum = resultNum + array[i + 1];
        }

        //0 번째 2번째 4번째 숫자를 Result에 넣어서 더해라
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
  result.innerText = showString.join("");
};

const init = () => {
  btn.forEach((data) => {
    data.addEventListener("click", handleClick);
  });
};

init();
