(() => {
  let eyeLeft = document.querySelector(".left");
  let eyeRight = document.querySelector(".right");

  document.addEventListener("mousemove", (event) => {
    let rectLeft = eyeLeft.getBoundingClientRect();
    let xLeft = rectLeft.left + eyeLeft.offsetWidth / 2.5;
    let yLeft = rectLeft.top + eyeLeft.offsetHeight / 2.5;
    let radLeft = Math.atan2(event.pageX - xLeft, event.pageY - yLeft);
    let rotLeft = radLeft * (180 / Math.PI) * -1 + 180;
    eyeLeft.setAttribute("style", `transform: rotate(${rotLeft}deg);`);

    let rectRight = eyeRight.getBoundingClientRect();
    let xRight = rectRight.left + eyeRight.offsetWidth / 1.5;
    let yRight = rectRight.top + eyeRight.offsetHeight / 1.5;
    let radRight = Math.atan2(event.pageX - xRight, event.pageY - yRight);
    let rotRight = radRight * (180 / Math.PI) * -1 + 180;
    eyeRight.setAttribute("style", `transform: rotate(${rotRight}deg);`);
  });
})();
