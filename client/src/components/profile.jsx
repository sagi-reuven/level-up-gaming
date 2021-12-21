import { Link } from "react-router-dom";
import "../css/profile.css";
import userService from "../services/usersService";
import React from "react";
import Footer from "./footer";
import jwtDecode from "jwt-decode";

const TOKEN_KEY = "token";

class Profile extends React.Component {
  state = {
    user: null,
  };
  

  // takes Token from localstorage and decode it for the id and fetch user details from mongo with id 
  // set data to state
  async componentDidMount() {
    const jwt = localStorage.getItem(TOKEN_KEY);
    const decode = jwtDecode(jwt);
    const id = decode._id;
    const { data } = await userService.getUserInfo(id);
    this.setState({
      user: data,
    });
  }


  // delete a user from the data base remove token from local storage and redirect user with window.location for the page to refresh
  handleDelete = async (id) => {
    await userService.deleteUser(id);
    userService.logout();
    const { user } = this.state;
    this.setState({
      user: user,
    });
    window.location = "/signup";
  };
  render() {
    const { user } = this.state;
    return (
      <>
        <div className="container-fluid profile-container p-5">
          {/* Modal pop up  */}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h3 className="modal-title" id="exampleModalLabel">
                    Delete The Account? 😭
                  </h3>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"></button>
                </div>
                <div className="modal-body">Are You Sure </div>
                <div className="modal-footer">
                  <button className="btn btn-danger" onClick={() => this.handleDelete(user._id)}>
                    Delete
                  </button>
                  <button className="btn btn-primary" data-bs-dismiss="modal">
                    Hell No!
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="inner-container ">
            <h1 className="text-center text-white pt-3 m-5">Personal Information</h1>

            <div className="card-container">
              <div className="card">
                <img
                  src="https://www.w3schools.com/howto/img_avatar.png"
                  alt="Avatar"
                  className="profile-img "
                />
              </div>
            </div>
            <div className="form-container">
              <div className="row">
                <div className="col-12 text-center">
                  <div className="form-wrapper p-2 ">
                    <h4 className="mt-3">
                      <b className="text-center">Welcome </b>
                    </h4>
                    <p className="text-white text-capitalize">First Name: {user?.firstName} </p>
                    <p className="text-white text-capitalize">Last Name: {user?.lastName} </p>
                    <p className="text-white text-capitalize">Email: {user?.email}</p>
                    <p className="text-white text-capitalize ">Password</p>
                    <Link
                      className="btn btn-lg btn-outline-danger me-3"
                      to={`/profile/edit/${user?._id}`}>
                      Edit
                    </Link>
                    {/*   <!-- Button trigger modal --> */}
                    <button
                      className="btn btn-lg btn-outline-danger ms-3"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal">
                      Delete
                    </button>
                    <br /> <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <Footer />
        </div>
      </>
    );
  }
}

export default Profile;
