const API_URL = "https://www.themealdb.com/api/json/v1/1";

const EndPoint = {
  FETCH_MEAL: `${API_URL}/filter.php?c=chicken`,
  GET_MEAL_BY_ID:`${API_URL}/lookup.php?i=`
};

export { EndPoint };
