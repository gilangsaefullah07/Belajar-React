import axios from "axios";

const getProducts = (callback) => {
  axios
    .get("http://localhost:4000/products")
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default getProducts;
