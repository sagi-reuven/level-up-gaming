import { Link } from "react-router-dom";
import "../css/registerSection.css";

/* -  premium signup / regular signup section displayed in home component 
   -   were passing user in props to check if user is logged and redirect accordingly
*/
const RegisterSection = ({ user }) => {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <div className="col-12 col-xl-6 col-md-6 col-lg-6 col-sm-6 ">
          <div className="card mb-4 rounded-3 shadow-sm border-secondary bg-image img-fluid premium_box ">
            <div className="card-header py-3 border-danger">
              <h4 className="my-0 fw-normal text-light main-font ">Premium User</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title text-light">
                $9.99<small className="text-light fw-light main-font">/mo</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4 text-light">
                <li>Free Events !</li>
                <li>Free Shipping</li>
                <li>Phone and email support 24/7</li>
              </ul>

              {user && !user?.biz ? (
                <Link to="/signupPremium" className="w-100 btn btn-lg btn-outline-danger">
                  Get started
                </Link>
              ) : (
                <Link to="/events" className="w-100 btn btn-lg btn-outline-danger">
                  Get started
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-6 col-md-6 col-lg-6 col-sm-6">
          <div className="card mb-4 rounded-3 shadow-sm border-secondary">
            <div className="card-header py-3 text-white bg-secondary ">
              <h4 className="my-0 fw-normal main-font text-white">Regular User</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">Free</h1>
              <ul className="list-unstyled mt-3 mb-4 text-dark">
                <li>No Free shipping.</li>
                <li>No Events.</li>
                <li>No Support 😡</li>
              </ul>
              <Link to="/signup" className="w-100 btn btn-lg btn-secondary main-font">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterSection;
