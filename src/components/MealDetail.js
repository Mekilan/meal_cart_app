import { useDispatch } from "react-redux";
import { Button, Card, Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { YoutubeFilled, ShoppingCartOutlined } from "@ant-design/icons";
import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { fetchMealById } from "../api/api";
import { saveOrderDetails } from "../action";
import SkeletonComp from "../common/SkeletonComp";
import EmptyComp from "../common/empty";

const MealDetail = () => {
  const { mealId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [mealDetail, setMealDetail] = useState({});
  const [skeletonloader, setSkeletonLoader] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setSkeletonLoader(true);
        const data = await fetchMealById(mealId);
        if (data.meals !== null) {
          const meal = data.meals[0];
          setMealDetail(meal);
        }
        setSkeletonLoader(false);
      } catch (err) {}
    };
    fetchData();
  }, [mealId]);
  const onCheckOut = () => {
    const date = Date();
    const orderDetails = [
      {
        order_id: mealId,
        order_name: mealDetail.strMeal,
        order_img: mealDetail.strMealThumb,
        order_category: mealDetail.strCategory,
        order_date: date,
      },
    ];
    dispatch(saveOrderDetails(orderDetails));
    navigate("/shippinginfo");
  };
  return (
    <div className="meal-detail-container">
      <Card>
        <Row gutter={[16, 16]}>
          {skeletonloader ? (
            <SkeletonComp />
          ) : Object.keys(mealDetail).length !== 0 ? (
            <Fragment>
              <Col xs={24} sm={12} md={10} lg={8} xl={6}>
                <div className="meal-image-container">
                  <img
                    src={mealDetail.strMealThumb}
                    alt={mealDetail.strMeal}
                    className="meal-image"
                  />
                </div>
                <div className="chkout-btn">
                  <Button
                    type="primary"
                    size="large"
                    icon={<ShoppingCartOutlined />}
                    onClick={() => onCheckOut()}
                    style={{ width: "100%" }}
                  >
                    Check Out
                  </Button>
                </div>
              </Col>
              <Col xs={24} sm={12} md={14} lg={16} xl={18}>
                <div className="meal-info">
                  <h2>{mealDetail.strMeal}</h2>
                  <div className="meal-description">
                    <h3>Description</h3>
                    <p>{mealDetail.strInstructions}</p>
                  </div>
                </div>
                <div className="meal-ingredient">
                  <h2>Ingredients</h2>
                  <p>
                    {mealDetail.strIngredient1}, {mealDetail.strIngredient2},{" "}
                    {mealDetail.strIngredient3}, {mealDetail.strIngredient4},{" "}
                    {mealDetail.strIngredient5}, {mealDetail.strIngredient6},
                    {mealDetail.strIngredient7}, {mealDetail.strIngredient8},{" "}
                    {mealDetail.strIngredient9}, {mealDetail.strIngredient10},{" "}
                    {mealDetail.strIngredient11}
                  </p>
                </div>
                <div className="meal-sociallink">
                  <YoutubeFilled style={{ fontSize: "24px" }} />
                  &nbsp;&nbsp;
                  <a
                    href={mealDetail.strYoutube}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {mealDetail.strYoutube}
                  </a>
                </div>
              </Col>
            </Fragment>
          ) : (
            <div
              style={{
                flex: 1,
              }}
            >
              <EmptyComp />
            </div>
          )}
        </Row>
      </Card>
    </div>
  );
};

export default MealDetail;
