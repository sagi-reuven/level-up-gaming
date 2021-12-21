import Form from "./common/form";
import Joi from "joi";
import "../css/signin.css";
import { Link, Redirect } from "react-router-dom";
import userService from "../services/usersService";
class Signin extends Form {
  state = {
    form: {
      email: "",
      password: "",
    },
    user: null,
  };

  componentDidMount() {
    this.setState({
      user: userService.isUserLogged(),
    });
  }
// create schema for signin component (validate in form component)
  schema = {
    email: Joi.string()
      .required()
      .email({ tlds: { allow: false } }),
    password: Joi.string().required().min(5).max(1024),
  };

  // Do submit take place when the form is submitted by user
  // takes the email and password of the user and try to match the data .
  // success -> login the user and redirect to home page
  // failure -> response the errors from the joi validate
  async doSubmit() {
    const { email, password } = this.state.form;
    try {
      await userService.login(email, password);
      window.location = "/";
    } catch ({ response }) {
      if (response && response.status === 400) {
        this.setState({ errors: response.data });
      }
    }
  }

  render() {
    const { user } = this.state;
    if (user) {
      return <Redirect to="/store" />;
    }
    return (
      <>
        <div className="container-fluid bg-image img-fluid min-vh-100 signin-container">
          <div className="container text-start pt-5">
            <div className="row">
              <div className="col-12">
                <h1
                  className="text-white my-5"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500">
                  Level Up Gaming
                </h1>
              </div>
            </div>
          </div>
          <div className="container d-flex justify-content-start">
            <div className="row ">
              <div className="col-12 mt-5  ">
                <h3
                  className="text-white text-underline"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1500">
                  Sign In 
                </h3>
                <form className="gy-5 mt-5  align-items-center" onSubmit={this.handleSubmit}>
                  {this.renderInput("email", "Email", "text", true)}
                  {this.renderInput("password", "Password", "password", true)}
<br /><br />
                  <div className="m-2 px-4">
                    <span className="me-2">{this.renderButton("Sign In")}</span>
                    <span className="ms-2">
                      <Link className="btn btn-outline-light btn-lg" to="/signup">
                        Sign Up
                      </Link>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Signin;
