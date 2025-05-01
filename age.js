let firstInput = document.getElementById("input");
let btn = document.getElementById("button");
let resultH2 = document.getElementById("result");
btn.addEventListener("click", () => {
  if (firstInput.value === "") {
    alert("Please enter tha your date of birth:");
  } else {
    let oldYear = new Date(firstInput.value);
    let oldSecond = oldYear.getFullYear();
    // current;
    let current = new Date();
    let currentSecond = current.getFullYear();
    let result = currentSecond - oldSecond;
    resultH2.innerHTML = "Your age is :" + result;
  }
});
