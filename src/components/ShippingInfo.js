import { Form, Input, Button, Col, Row, Card } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveShipingInfo } from "../action";

const ShippingInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const handleSubmit = (values) => {
    dispatch(saveShipingInfo(values));
    navigate("/orderconfirmation");
  };

  return (
    <div className="shipping-container">
      <h2>Shipping Information</h2>
      <Card>
        <Form form={form} onFinish={handleSubmit} style={{ padding: "10px" }}>
          <Row gutter={16}>
            <Col xs={24} sm={12} md={8} lg={8}>
              <Form.Item name="name" rules={[{ required: true }]}>
                <Input placeholder="Name" autoFocus />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8} lg={8}>
              <Form.Item name="phone" rules={[{ required: true }]}>
                <Input placeholder="Phone" type="number"/>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8} lg={8}>
              <Form.Item name="pincode" rules={[{ required: true }]}>
                <Input placeholder="Pin Code" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8} lg={8}>
              <Form.Item name="address" rules={[{ required: true }]}>
                <Input.TextArea
                  autoSize={{ minRows: 3, maxRows: 6 }}
                  placeholder="Address"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Form.Item>
              <Button type="primary" size="large" htmlType="submit">
                Purchase order
              </Button>
            </Form.Item>
          </Row>
        </Form>
      </Card>
    </div>
  );
};

export default ShippingInfo;
