import "../css/store.css";
import { connect } from "react-redux";
import Product from "./product";
import { addToCart } from "../redux/cart/cart.actions";
import { SRLWrapper } from "simple-react-lightbox";
import StoreSidenav from "./store-sidenav";
const Xbox = ({ items, addToCart }) => {
  // display only items thats "xbox" brand (in line 29)

  let filtered = items.filter((item) => item.brand === "xbox");
  const handleClick = (id) => {
    addToCart(id);
  };
  return (
    <>
      <div className="d-flex">
        <StoreSidenav />
        <div className="container">
          <div className="row text-center">
            <div className="text-danger display-1 mt-5">
              <div className="smokey-title fw-bold store-header">X</div>
              <div className="smokey-title fw-bold store-header">b</div>
              <div className="smokey-title fw-bold store-header">o</div>
              <div className="smokey-title fw-bold store-header">x</div>
            </div>
          </div>
          <div className="store-container">

          <SRLWrapper>
            <div className="row  justify-content-around">
              {filtered.map((item) => {
                return <Product key={item.id} item={item} addToCart={() => handleClick(item.id)} />;
              })}
            </div>
          </SRLWrapper>
          </div>
        </div>
      </div>
    </>
  );
};

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

export default converter(Xbox);
