import slider1 from "../images/back3.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../css/slider.css";
/* bootstrap image slider  displayed in home component
   user is passed for conditions in the links 
*/
const Slider = ({ user }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
      id="carouselExampleFade"
      className="carousel slide carousel-fade mb-3 sliderShadow"
      data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide-to="0"
          className="active"></button>
        <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="2"></button>
      </div>
      <div className="carousel-inner ">
        <div className="carousel-item active">
          <img
            src="https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Battlefield2042GoldEdition_DICE_Editions_S1_2560x1440-98e3508c62e4d57c1ab8c109b49016a2"
            className="d-block "
            style={{ height: "70vh", width: "100vw" }}
            alt="battle-field"
          />
          <div className="carousel-caption  mb-5">
            <h3 className="text-light text-capitalize main-font">join us</h3>
            <h4 className="text-light shadow-lg">make sure you get the latest level-up's news!!</h4>
            <Link to="/signup" className="btn btn-light text-dark w-20  fw-bold">
              Sign Up
            </Link>
          </div>
        </div>
        <div className="carousel-item ">
          <img
            src={slider1}
            className="d-block "
            style={{ height: "70vh", width: "100vw" }}
            alt="gaming events"
          />
          <div className="carousel-caption mb-5">
            <h3 className="text-light text-capitalize">Events</h3>
            <h4 className="text-light">For Premium Users Only</h4>
            {!user?.biz ? (
              <Link to="/signupPremium" className="btn btn-light text-dark w-20  fw-bold">
                Events
              </Link>
            ) : (
              <Link to="/events" className="btn btn-light text-dark w-20  fw-bold">
                Events
              </Link>
            )}
          </div>
        </div>

        <div className="carousel-item">
          <img
            src="https://i.pinimg.com/originals/e0/5b/3e/e05b3eebb928fc0925d77a43f341840f.jpg"
            className="d-block "
            style={{ height: "70vh", width: "100vw" }}
            alt="playstation game"
          />
          <div className="carousel-caption mb-5">
            <h3 className="text-light text-capitalize">games & accessories</h3>
            <h4 className="text-light">check out our latest games and gaming features</h4>
            <Link to="/store" className="btn btn-light text-dark w-20  fw-bold">
              To Store
            </Link>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev">
        <i className="bi bi-caret-left display-3"></i>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next">
        <i className="bi bi-caret-right display-3"></i>
        <span className="visually-hidden">Next</span>
      </button>
    </motion.div>
  );
};

export default Slider;
