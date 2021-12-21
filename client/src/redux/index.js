import { createStore } from "redux";
import cartReducer from "./cart/cartReducer";

// creating a store from the reducer
export const store = createStore(
  cartReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//
store.subscribe(() => {
  // seting "addeditems" array to local storage for cart persistent
  localStorage.setItem("cartItems", JSON.stringify(store.getState().addedItems));
  // seting "total"  to local storage for cart  persistent

  localStorage.setItem("total", JSON.stringify(store.getState().total));
});
export default store;
