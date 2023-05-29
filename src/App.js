import { Routes, Route } from "react-router-dom";
import MealList from "./components/MenuList";
import MealDetail from "./components/MealDetail";
import Header from "./components/Header";
import { Fragment } from "react";
import ShippingInfo from "./components/ShippingInfo";
import OrderConfirmation from "./components/OrderConfirmation";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<MealList />} />
        <Route path="/meal/:mealId" element={<MealDetail />} />
        <Route path="/shippinginfo" element={<ShippingInfo />} />
        <Route path="/orderconfirmation" element={<OrderConfirmation />} />
      </Routes>
    </Fragment>
  );
};

export default App;
