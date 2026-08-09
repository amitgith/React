import axios from "axios";

export const getAllRecipes = async (limit, page = 1) => {
  try {
    let res = await axios.get(
      `https://dummyjson.com/recipes?limit${limit}&skip=${page * limit}`,
    );
    return res.data;
  } catch (error) {
    console.log("error in api", error);
  }
};
