const apiURL = "https://api.ecommerce.com/products";

const axios = require("axios");

let products = [];

async function scrapProducts(minPrice, maxPrice) {
  try {
    const result = axios.get(
      `${apiURL}?minPrice=${minPrice}&maxPrice=${maxPrice}`
    );
    products = [...products, ...result.products];
  } catch (error) {
    console.log("error: ", error);
  }
}

async () => {
  let minRange = 0,
    maxRange = 10000;

  while (maxRange < 100000) {
    await scrapProducts(minRange, maxRange);
    minRange = maxRange + 1;
    maxRange = maxRange + 10000;
  }
};
