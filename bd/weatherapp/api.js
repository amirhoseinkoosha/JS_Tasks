const input = document.querySelector(".input");
const submit = document.querySelector(".submit");
const searchbox = document.querySelector(".searchbox");
const details = document.querySelector(".details");
const background = document.querySelector(".mainphoto");
const apiKey = "6a1228eb66b5a13e1022e6935485d3b1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

submit.addEventListener("click", () => {
  const city = input.value;
  const url = `${apiUrl}?q=${city}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      details.innerHTML = `${data.name} <br />${data.weather[0].description} <br />  ${data.main.temp}`;
    })
    .catch(() => {
      details.innerHTML = "City Not Found";
      details.style.color = "rgb(175, 15, 15)";
      setTimeout(() => {
        details.style.color = "black";
        details.innerHTML = "";
      }, 4000);
    });
});
