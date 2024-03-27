const data = [
  {
    id: 0,
    name: "Nike Air Max Plus Drift",
    img: "./img/air.png",
    price: 74,
    cat: "Jordans",
  },
  {
    id: 1,
    name: "Nike Air Force 1 '07 Pro Tech",
    img: "./img/blazer.png",
    price: 74,
    cat: "Jordans",
  },
  {
    id: 2,
    name: "Nike Air Force 1 '07",
    img: "./img/blazer2.png",
    price: 40,
    cat: "Jordans",
  },
  {
    id: 3,
    name: "Nike Air Force 1 '07",
    img: "./img/air2.png",
    price: 200,
    cat: "Jordans",
  },
  {
    id: 4,
    name: "Air Jordan 1 Mid",
    img: "./img/crater2.png",
    price: 16,
    cat: "Jordans",
  },
  {
    id: 5,
    name: "Jordan Spizike Low",
    img: "./img/crater.png",
    price: 74,
    cat: "Sport",
  },
  {
    id: 6,
    name: "Jumpman MVP",
    img: "./img/hippie.png",
    price: 74,
    cat: "Sport",
  },
  {
    id: 7,
    name: "Jordan Stay Loyal 3",
    img: "./img/hippie2.png",
    price: 74,
    cat: "Sport",
  },
  {
    id: 8,
    name: "Nike Metcon 9 EasyOn",
    img: "./img/jordan.png",
    price: 74,
    cat: "Sport",
  },
  {
    id: 9,
    name: "Nike Air More Uptempo",
    img: "./img/jordan2.png",
    price: 74,
    cat: "Sport",
  },
  {
    id: 11,
    name: "Air Jordan 5 Retro Lucky Green",
    img: "./img/jordan.png",
    price: 74,
    cat: "Casual",
  },
  {
    id: 12,
    name: "Nike G.T. Hustle 2 ASW EP",
    img: "./img/air.png",
    price: 74,
    cat: "Casual",
  },
  {
    id: 13,
    name: "Nike Alphafly 3",
    img: "./img/air2.png",
    price: 74,
    cat: "Casual",
  },
  {
    id: 14,
    name: "Air Jordan 1 Mid SE",
    img: "./img/jordan2.png",
    price: 74,
    cat: "Casual",
  },
  

];
const productsContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search");
const categoriesContainer = document.querySelector(".cats");


const displayProducts = (filteredProducts) => {
  productsContainer.innerHTML = filteredProducts
    .map(
      (product) =>
        `
       <div class="product">
          <img src=${product.img} />
          <span class="name">${product.name}</span>
          <span class="priceText">$${product.price}</span>
        </div>
    `
    )
    .join("");
};

displayProducts(data);


/* 
The displayProducts function takes an array of product objects (filteredProducts). It transforms each product into HTML markup using the map function, creating a <div> for each product with its image, name, and price. Finally, it sets this generated HTML as the content of a container element on the webpage, displaying the products visually.     
*/



searchInput.addEventListener("keyup", (e) => {
  const value = e.target.value.toLowerCase();

  if (value) {
    displayProducts(
      data.filter((item) => item.name.toLowerCase().includes(value))
    );
  } else {
    displayProducts(data);
  }
});





// setCategories();

const setCategories = () => {
  const categories = ["All", ...new Set(data.map(item => item.cat))];
  categoriesContainer.innerHTML = categories.map(cat => `<span class="cat">${cat}</span>`).join("");

  categoriesContainer.addEventListener("click", (e) => {
    const selectedCat = e.target.textContent;
    const filteredData = selectedCat === "All" ? data : data.filter(item => item.cat === selectedCat);
    displayProducts(filteredData);
  });
};


setCategories();
