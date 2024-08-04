const count = document.querySelector(".count");
const carts = document.querySelector(".carts");
const Emptycart = document.querySelector(".Emptycart");

Emptycart
if (!(localStorage.length == 0)) {
  count.innerHTML = localStorage.length;
  for (i = 1; i <= localStorage.length; i++) {
    var x = localStorage.getItem(`card${i}`);
    console.log(x);
    Movetocart(x);
  }
}
else{
  count.innerHTML = 0;
  Emptycart.style="display:block"

}

async function Movetocart(id) {
  createcard();
  var mg = document.querySelector(".mg");
  var title = document.querySelector(".title");
  var price = document.querySelector(".price");
  var rate = document.querySelector(".rate");
  var card = document.querySelector(".card");
  card.setAttribute("id", id);
  fetch("http://localhost:3000/products")
    .then((response) => response.json())
    .then((res) => {
      res.forEach((product) => {
        if (product.id == id) {
          console.log(product.category, "   ", id, "  ", title);
          title.innerHTML = product.name;
          price.innerHTML = product.price;
          rate.innerHTML = product.rate;
          mg.src = product.image;
        }
      });
    });
}
function createcard() {
  const article = `
      <article class="card" id="1">
        <img src="" alt="load failed" class="mg" />

        <h1 class="title"></h1>
        <div class="info">
          <p class="price"> $</p>
          <div class="rating">
            <span class="rate">()</span>
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white color"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
              />
            </svg>
          </div>
        </div>
        <button class="addtocart"> Payment </button>
      </article >
    `;
  carts.insertAdjacentHTML("afterbegin", article);
}
