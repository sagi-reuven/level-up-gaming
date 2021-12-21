import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Switch, Route } from "react-router-dom";

import Home from "./components/home";
import Navbar from "./components/navbar";
import SignUp from "./components/signup";
import Signin from "./components/signin";
import SignupPremium from "./components/signupPremium";
import Logout from "./components/logout";
import Profile from "./components/profile";
import Cart from "./components/common/cart";
import React from "react";
import userService from "./services/usersService";
import Store from "./components/store";
import EditProfile from "./components/editProfile";
import Checkout from "./components/checkout";
import Playstation from "./components/playstastion";
import xbox from "./components/xbox";
import pc from "./components/pc";
import Nintendo from "./components/nintendo";
import Events from "./components/events";
import ProtectedRoute from "./components/common/protectedRoute";
import About from "./components/about";

class App extends React.Component {
  state = {
    user: null,
  };

  componentDidMount() {
    this.setState({
      user: userService.isUserLogged(),
    });
  }

  render() {
    const { user } = this.state;
    return (
      <div className="App min-vh-100">
        <header>
          <Navbar user={user} />
        </header>
        <ToastContainer />
        <main>
          <Switch>
            <ProtectedRoute path="/profile" biz={true} component={Profile} exact />
            <ProtectedRoute path="/profile/edit/:id" biz={true} component={EditProfile} exact />
            <ProtectedRoute biz={true} path="/store" component={Store} exact />
            <ProtectedRoute biz={true} path="/store/playstation" component={Playstation} exact />
            <ProtectedRoute biz={true} path="/store/xbox" component={xbox} exact />
            <ProtectedRoute biz={true} path="/store/pc" component={pc} exact />
            <ProtectedRoute biz={true} path="/store/nintendo" component={Nintendo} exact />
            <ProtectedRoute biz={true} path="/store/cart" component={Cart} exact />
            <ProtectedRoute biz={true} path="/events" component={Events} exact />
            <Route path="/" component={Home} exact />
            <Route path="/signup" component={SignUp} exact />
            <Route path="/signin" component={Signin} exact />
            <Route path="/about" component={About} exact />
            <Route path="/signupPremium" component={SignupPremium} exact />
            <ProtectedRoute biz={true} path="/checkout" component={Checkout} exact />
            <ProtectedRoute biz={true} path="/logout" component={Logout} exact />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
