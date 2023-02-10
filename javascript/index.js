let i = 0;
let image;
let price;
const saveds = [];
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => randerData(data));

function randerData(item) {
  item.length > 0
    ? item.forEach((e) => {
        const div = createElement(
          "div",
          "card",
          `
        <img class="card-img-top" src='${e.image}' alt="Card image cap">

        <div class="card-body">
    <h5 class="card-title">${e.title}</h5>
    <p id="po" class="card-text">$${e.price}</p>
    <a id="add" class="btn btn-primary">Add to cart</a>
  </div>

        `
        );

        document.body.querySelector(".info__card-wrapper").appendChild(div);
      })
    : "NOT FOUND";
  const im = document.querySelectorAll(".card-img-top");
  const pr = document.querySelectorAll("#po");
  document.querySelectorAll("#add").forEach((e, index) => {
    e.addEventListener("click", () => {
      i++;
      document.querySelector(".cal").innerHTML = i;
      alert("Qo'shildi cardga");
      const newEl = {
        image: im[index],
        price: pr[index],
      };

      saveds.push(newEl);
      console.log(saveds);
    });
  });
}

$(".kor").addEventListener("click", () => {
  saveds.forEach((e) => {
    const fivcha = createElement(
      "div",
      "sss",
      `
        <img class="card-img-top" src='${e.image}' alt="Card image cap">

        <div class="card-body">
    <p id="po" class="card-text">$${e.price}</p>

        `
    );
    document.body.appendChild(fivcha);
  });
});
