const input = document.querySelector(".input");
const p = document.querySelector("P");
input.addEventListener("change", () => {
  var value = input.value;
  console.log(value);
  if (value == "") {
    p.innerHTML = "";
  } else {
    if (value % 2 == 0) {
      p.innerHTML = "Even";
    } else p.innerHTML = "Odd";
  }
});
