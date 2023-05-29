import {
  SAVE_ORDER_DETAILS,
  SHIPPING_INFO,
  CLEAR_INFO,
} from "./types";
const initialState = {
  orderDetails: [],
  shippingInfo: {},
};

const orderReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SAVE_ORDER_DETAILS:
      return {
        ...state,
        orderDetails: payload,
      };
    case SHIPPING_INFO:
      return {
        ...state,
        shippingInfo: payload,
      };
    case CLEAR_INFO:
      return {
        ...state,
        shippingInfo: {},
        orderDetails: [],
      };
    default:
      return state;
  }
};

export { orderReducer };
