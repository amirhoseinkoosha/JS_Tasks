const cards = document.querySelectorAll(".card");
const showcard = document.querySelector(".carts");
const hero = document.querySelector(".hero");
const addtocart = document.querySelectorAll(".addtocart");
const count = document.querySelector(".count");
if (localStorage.length != 0) {
  count.innerHTML = localStorage.length;
}
hero.addEventListener("click", (e) => {
  var target = e.target.innerHTML;

  for (i = 0; i < cards.length; i++) {
    if (target == "All") {
      if (target == "All") {
        cards[i].style = "display:block";
      }
    } else {
      if (target == "Men") {
        if (cards[i].classList.contains("men")) {
          cards[i].style = "display:block";
        } else cards[i].style = "display:none";
      }
      if (target == "Women") {
        if (cards[i].classList.contains("women")) {
          cards[i].style = "display:block";
        } else cards[i].style = "display:none";
      }
      if (target == "Watch") {
        if (cards[i].classList.contains("Watch")) {
          cards[i].style = "display:block";
        } else cards[i].style = "display:none";
      }
    }
  }
});

addtocart.forEach((card) => {
  card.addEventListener("click", (e) => {
    var x = e.target.parentElement;
    localStorage.setItem(`card${localStorage.length + 1}`, x.id);
    count.innerHTML = localStorage.length;
    alert("Added to card");
  });
});
