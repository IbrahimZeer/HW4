// import axios from "axios";

axios
  .get("https://dummyjson.com/products")
  .then((res) => {
    results(res.data.products);
    sliderSelector(res.data.products);
  })
  .catch(() => "something went wrong");

results = async (data) => {
  const products = await data;
  const result = products
    .map(
      (prod) => `
      <h2>${prod.title}</h2>
      <div>
        <img src="${prod.thumbnail}"/>
      </div>
    `
    )
    .join("");
  console.log(result);
};

sliderSelector = async (data) => {
  const products = await data;
  const result = products
    .map(
      (prod) => `
        <div class="swiper-slide">
          <img src="${prod.thumbnail}"/>
        </div>
      `
    )
    .join("");
  document.querySelector(".swiper-wrapper").innerHTML = result;
};

results();
sliderSelector();

anotherWay = async () => {
  const getData = await axios.get("https://dummyjson.com/products");
  const allData = getData.data.products;
  const res = allData
    .map(
      (prod) => `
    <h2>${prod.title}</h2>
    <div>
      <img src="${prod.thumbnail}"/>
    </div>
  `
    )
    .join("");
  document.querySelector(".data").innerHTML = res;
};

anotherWay();
