import axios from "axios";

export const getAllRecipes = async (limit, pageParam = 1) => {
  try {
    console.log(pageParam);

    let res = await axios.get(
      `https://dummyjson.com/recipes?limit=${limit}&skip=${pageParam}`,
    );
    return res.data;
  } catch (error) {
    console.log("error in api", error);
  }
};
