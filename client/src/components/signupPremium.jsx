import Form from "./common/form";
import Joi from "joi";
import "../css/signupPremium.css";
import userService from "../services/usersService";
import { Link, Redirect } from "react-router-dom";
class SignupPremium extends Form {
  state = {
    form: {
      firstName: "",
      lastName: "",
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

  // create schema for signupPremium component (validate in form component)

  schema = {
    firstName: Joi.string().required().min(2).max(1024),
    lastName: Joi.string().required().min(2).max(1024),
    email: Joi.string()
      .required()
      .email({ tlds: { allow: false } }),
    password: Joi.string().required().min(5).max(1024),
  };


  
  // Do submit take place when the form is submitted by user
  // takes the user data from the state
  // take a copy of the user data and add "biz" parameter as "true" (biz user signup) (biz required by backend schema)
  // failure -> response the errors from the joi validate

  async doSubmit() {
    const { form } = this.state;
    const body = { ...form, biz: true };
    try {
      await userService.createUser(body);
      await userService.login(body.email, body.password);
      window.location = "/";
    } catch ({ response }) {
      if (response && response.status === 400) {
        this.setState({ errors: { email: response.data } });
      }
    }
  }

  render() {
    const { user } = this.state;
    if (user?.biz === true) {
      return <Redirect to="/events" />;
    }
    return (
      <>
        <div className="container-fluid bg-image img-fluid  signupPremium-container">
          <div className="container text-start pt-5">
            <div className="row">
              <div className="col-12">
                <h1
                  className="text-white"
                  data-aos="fade-down"
                  data-aos-easing="ease-in"
                  data-aos-duration="2000">
                  Premium Sign Up
                </h1>
              </div>
            </div>
          </div>
          <div className="container d-flex justify-content-start">
            <div className="row ">
              <div className="col-12 mt-5  ">
                <h4
                  className="text-white text-underline"
                  data-aos="fade-up"
                  data-aos-easing="ease-in"
                  data-aos-duration="2000">
                  Sign up for Exclusive Content
                </h4>
                <form className=" mt-5  align-items-center" onSubmit={this.handleSubmit}>
                  {this.renderInput("firstName", "First Name", "text", true)}
                  {this.renderInput("lastName", "Last Name", "text", true)}
                  {this.renderInput("email", "Email", "text", true)}
                  {this.renderInput("password", "Password", "password", true)}

                  <div className="m-3 px-2">
                    <span className="me-3">{this.renderButton("Sign Up")}</span>
                    <span className="ms-3">
                      <Link className="btn btn-outline-light btn-lg" to="/signin">
                        Sign In
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

export default SignupPremium;
