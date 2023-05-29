import { useState, useEffect, Fragment } from "react";
import { Card, Col, Row, Input, Tooltip } from "antd";
import { fetchMeals } from "../api/api";
import { Link } from "react-router-dom";
import Loader from "../common/loader";
import EmptyComp from "../common/empty";

const MealList = () => {
  const { Search } = Input;
  const { Meta } = Card;
  const [meals, setMeals] = useState([]);
  const [loader, setLoader] = useState(false);
  const [filteredMeals, setFilteredMeals] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoader(true);
        const data = await fetchMeals();
        setMeals(data.meals);
        setFilteredMeals(data.meals);
        console.log(data.meals);
        setLoader(false);
      } catch (err) {}
    };
    fetchData();
  }, []);
  const onSearch = (value) => {
    const filteredValue = meals.filter((item) =>
      item.strMeal.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredMeals(filteredValue);
  };
  return (
    <Fragment>
      {loader ? <Loader /> : null}
      <div className="meal-container">
        <div className="search-bar">
          <Search
            placeholder="Search meals by name"
            enterButton="Search"
            onSearch={onSearch}
          />
        </div>
        {filteredMeals.length !== 0 ? (
          <Row gutter={[20, 20]} style={{ padding: "20px" }}>
            {filteredMeals?.map((meal) => (
              <Col key={meal.idMeal} xs={12} sm={6} md={4} lg={3}>
                <Link to={`/meal/${meal.idMeal}`}>
                  <Card
                    cover={<img src={meal.strMealThumb} alt={meal.strMeal} />}
                    hoverable
                    style={{ height: "100%" }}
                  >
                    <Meta
                      title={
                        <Tooltip title={meal.strMeal}>
                          <span>{meal.strMeal}</span>
                        </Tooltip>
                      }
                    />
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <EmptyComp />
          </div>
        )}
      </div>
    </Fragment>
  );
};
export default MealList;
