import axios from "axios";

const getProducts = (callback) => {
  axios
    .get("https://67394678a3a36b5a62ee47f2.mockapi.io/api/products/products")
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default getProducts;
