import { Component } from "react";
import userService from "../services/usersService";
class Logout extends Component {
  /*  when user clicks logout 
    1 the token is removed from local storage
    2 the "cartItems" is removed from local storage
    3 the "total" is removed from local storage
    4 the page is refreshed and redirects the user to signin


  */
  componentDidMount() {
    userService.logout();
    localStorage.removeItem("cartItems");
    localStorage.removeItem("total");
    window.location = "/";
  }
  render() {
    return null;
  }
}

export default Logout;
