import "../css/store.css";
import { connect } from "react-redux";
import Product from "./product";
import { addToCart } from "../redux/cart/cart.actions";
import { SRLWrapper } from "simple-react-lightbox";
import StoreSidenav from "./store-sidenav";
const Playstation = ({ items, addToCart }) => {
  // display only items thats "playstation" brand (in line 36)

  let filtered = items.filter((item) => item.brand === "playstation");
  const handleClick = (id) => {
    addToCart(id);
  };
  return (
    <>
      <div className="d-flex">
        <StoreSidenav />
        <div className="container">
          <div className="row text-center">
            <div className="text-danger display-1 mt-5 store-header">
              <div className="smokey-title fw-bold header-fix ">P</div>
              <div className="smokey-title fw-bold header-fix">l</div>
              <div className="smokey-title fw-bold header-fix">a</div>
              <div className="smokey-title fw-bold header-fix">y</div>
              <div className="smokey-title fw-bold header-fix">s</div>
              <div className="smokey-title fw-bold header-fix">t</div>
              <div className="smokey-title fw-bold header-fix">a</div>
              <div className="smokey-title fw-bold header-fix">t</div>
              <div className="smokey-title fw-bold header-fix">i</div>
              <div className="smokey-title fw-bold header-fix">o</div>
              <div className="smokey-title fw-bold header-fix">n</div>
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

export default converter(Playstation);
