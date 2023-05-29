import { Col, Row, Card, Button } from "antd";
import { CheckCircleFilled, HomeOutlined } from "@ant-design/icons";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearInfo } from "../action";

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getOrderInformation = useSelector((state) => state.order);
  const orderdetails = getOrderInformation.orderDetails[0];
  const shippinginfo = getOrderInformation.shippingInfo;
  const onBackToHome = () => {
    dispatch(clearInfo());
    navigate("/");
  };
  return (
    <div>
      {orderdetails && shippinginfo ? (
        <Fragment>
          <div className="order-confirm-container">
            <CheckCircleFilled style={{ fontSize: "80px", color: "green" }} />
            <div style={{ marginTop: "10px" }}>
              <h2>Order Confirmation</h2>
              <p>Thank you for your purchase!</p>
            </div>
          </div>
          <Row gutter={16} style={{ padding: "24px" }}>
            <Col span={12}>
              <Card title="Order Information">
                <p>Order ID: {orderdetails.order_id}</p>
                <p>Order Name:{orderdetails.order_name}</p>
                <p>Order Date: {orderdetails.order_date}</p>
              </Card>
            </Col>
            <Col span={12}>
              <Card title="Shipping Details">
                <p>{shippinginfo.name}</p>
                <p>{shippinginfo.phone}</p>
                <p>
                  {shippinginfo.address} {shippinginfo.pincode}
                </p>
              </Card>
            </Col>
          </Row>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "10px",
            }}
          >
            <Button
              type="primary"
              size="large"
              onClick={() => onBackToHome()}
              icon={<HomeOutlined />}
            >
              Back To Home
            </Button>
          </div>
        </Fragment>
      ) : null}
    </div>
  );
};
export default OrderConfirmation;
