import React from "react";
import "../css/testimonial.css";
import firstImage from "../images/vector1.png";
import secondImage from "../images/vector6.png";
import thirdImage from "../images/vector5.png";
const Testimonials = () => {

  /*  testimonial section displa in home component */
  return (
    <>
      <section className="testimonial-section d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 testi-img">
              <div className="img-box">
                <div className="circle" />
                <div className="img-box-inner">
                  <div
                    id="myCarousel"
                    className="carousel slide "
                    data-bs-ride="carousel"
                    data-bs-interval={3000}>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src={firstImage} className="w-75 testSlider ms-5 " alt="..." />
                      </div>
                      <div className="carousel-item">
                        <img src={secondImage} className="w-75 testSlider ms-5" alt="..." />
                      </div>
                      <div className="carousel-item">
                        <img
                          src={thirdImage}
                          className=" w-75 testSlider spiderman ms-5"
                          alt="..."
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                id="myCarousel"
                className="carousel slide"
                data-bs-interval={3000}
                data-bs-ride="carousel">
                <h1 className="testi-header text-capitalized">Testimonials</h1>
                <div className="carousel-inner text-light">
                  <div className="carousel-item testi-item active ">
                    <p className="paragraph">
                      "i really enjoyed the service i got, grest prices with an s"
                    </p>
                    <h3>Khal Drogo</h3>
                  </div>
                  <div className="carousel-item testi-item">
                    <p className="paragraph">
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nobis ratione,
                      harum doloremque aspernatur aliquid quaerat dolores voluptates recusandae qui.
                    </p>
                    <h3>Simon Tanner</h3>
                  </div>
                  <div className="carousel-item testi-item">
                    <p className="paragraph">
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nobis ratione,
                      harum doloremque aspernatur aliquid quaerat dolores voluptates recusandae qui
                      repellat illum, amet ipsa debitis fugiat commodi nemo suscipit ad!"
                    </p>
                    <h3>Tim Swanson</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
