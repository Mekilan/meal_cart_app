import {
  SAVE_ORDER_DETAILS,
  SHIPPING_INFO,
  CLEAR_INFO,
} from "../reducer/types";

export const saveOrderDetails = (orderDetails) => ({
  type: SAVE_ORDER_DETAILS,
  payload: orderDetails,
});

export const saveShipingInfo = (shipingInfo) => ({
  type: SHIPPING_INFO,
  payload: shipingInfo,
});

export const clearInfo = () => ({
  type: CLEAR_INFO
});
