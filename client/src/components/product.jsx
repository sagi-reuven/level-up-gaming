import React, { useState } from "react";
import StoreModel from "./storeModel";
import { SRLWrapper } from "simple-react-lightbox";
import "../css/product.css";

const Product = ({ item: { title, price, desc, id, img, details }, addToCart }) => {
  const [model, setModel] = useState(false);

  const [temporaryData, setTemporaryData] = useState([]);

  // a function to run on click INFO on product button
  const showModal = (img, title, description) => {
    let currentItem = [img, title, description];
    // sets the current item data to temporaryData hook to pass to StoreModel component
    setTemporaryData((item) => [1, ...currentItem]);
    // when model from useState hook is true the product info popup shows
    return setModel(true);
  };

  // a function to close the product info popup
  const hideModal = () => {
    //set temporaryData hook to empty array
    setTemporaryData([]);
    // return modal = false (DONT show the info popup)
    return setModel(false);
  };
  return (
    <>
      <div
        className=" col-md-4 mt-5 col-lg-3 col-xl-3 col-12 m-3 text-center   p-3 product-container"
        style={{width:"18em"}}
       >
        <SRLWrapper>
          <img src={img} className="card-img-top" alt={title} />
        </SRLWrapper>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <div className="card-text text-dark mb-1">
            <i className="bi bi-tags  me-2 text-dark"></i>
            Price: {price}
            <span>
              <i className="bi bi-currency-dollar text-dark"></i>
            </span>
          </div>

          <div className="card-text amount mb-3">{desc}</div>

          <div className=" d-flex justify-content-evenly">
            <button className="cart-info" onClick={() => showModal(img, title, details)}>
              <span className=" btn btn-lg span-info-btn ">
                <i className="bi bi-info-lg "></i>
              </span>
            </button>
            <button className="cart-add " onClick={() => addToCart(id)}>
              <span className=" btn btn-lg cart-icon">
            
                <i className=" bi bi-cart4  "></i>
              </span>
            </button>
          </div>
        </div>
      </div>
      {model === true ? (
        // product info popup component will show when true
        <StoreModel
          img={temporaryData[1]}
          title={temporaryData[2]}
          info={temporaryData[3]}
          hideModal={hideModal}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Product;
