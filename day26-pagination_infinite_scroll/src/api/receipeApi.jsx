import axios from "axios";

const getAllProducts = async () => {
  try {
    let res = await axios.get("https://dummyjson.com/products");
  } catch (error) {
    console.log("error in api", error);
  }
};
