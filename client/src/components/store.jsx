import "../css/store.css";
import { connect } from "react-redux";
import Product from "./product";
import { addToCart } from "../redux/cart/cart.actions";
import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import StoreSidenav from "./store-sidenav";
class Store extends React.Component {

  // filter item from the items object by his "brand"
  filtered = this.props.items.filter((item) => item.brand === "store");

  // reducer function that take items by ID and add it as a props by click event
  handleClick = (id) => {
    this.props.addToCart(id);
  };

  render() {
    return (
      <>
        <div className="d-flex">
          <StoreSidenav />
          <div className="container  ">
            <div className="row text-center">
              <div className=" col-12 d-flex justify-content-center text-danger display-1 mt-5 store-header">
                <span className="smokey-title fw-bold">S</span>
                <span className="smokey-title fw-bold">t</span>
                <span className="smokey-title fw-bold">o</span>
                <span className="smokey-title fw-bold">r</span>
                <span className="smokey-title fw-bold">e</span>
              </div>
            </div>

            
            <div className="store-container">
            <SRLWrapper>
              <div className="row  justify-content-around   ">
                {this.filtered.map((item) => {
                  return (
                    <Product
                      key={item.id}
                      addToCart={() => this.handleClick(item.id)}
                      item={item}
                    />
                  );
                })}
              </div>
            </SRLWrapper>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};
const converter = connect(mapStateToProps, mapDispatchToProps);
export default converter(Store);
