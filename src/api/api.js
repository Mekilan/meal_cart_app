import axios from "axios";
import { EndPoint } from "./apiConfig";

const FetchMealsURL = EndPoint.FETCH_MEAL;
const GetMealById = EndPoint.GET_MEAL_BY_ID;

const fetchMeals = async () => {
  try {
    const response = await axios.get(FetchMealsURL);
    return response.data;
  } catch (error) {
    return error;
  }
};
const fetchMealById = async (mealId) => {
    try {
      const response = await axios.get(`${GetMealById}${mealId}`);
      return response.data;
    } catch (error) {
      return error;
    }
  };

export { fetchMeals,fetchMealById};
