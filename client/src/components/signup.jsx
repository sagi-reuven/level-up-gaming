import Form from "./common/form";
import Joi from "joi";
import "../css/signup.css";
import userService from "../services/usersService";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import vectorLogo from "../images/newlogo/file.png";
class SignUp extends Form {
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
  // create schema for signup component (validate in form component)

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
  // take a copy of the user data and add "biz" parameter as "false" (Regular user signup) (biz required by backend schema)
  // failure -> response the errors from the joi validate

  async doSubmit() {
    const { form } = this.state;
    const body = { ...form, biz: false };
    try {
      await userService.createUser(body);
      this.props.history.replace("/signin");
      toast.dark("A new account is created 👻", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    } catch ({ response }) {
      if (response && response.status === 400) {
        this.setState({ errors: { email: response.data } });
      }
    }
  }

  render() {

    return (
      <>
        <div className="container-fluid bg-image img-fluid min-vh-85  signup-container">
          <div className="container text-start ">
            <div className="row">
              <div className="col-12 logo-wrap">
                <img
                  src={vectorLogo}
                  alt="logo"
                  className="vectorLogo"
                  data-aos="fade-up"
                  data-aos-easing="ease-in"
                  data-aos-duration="2500"
                />
              </div>
            </div>
          </div>
          <div className="container d-flex justify-content-start">
            <div className="row ">
              <div className="col-12 mt-5  ">
                <h4
                  className="text-white "
                  data-aos="fade-down"
                  data-aos-easing="ease-in"
                  data-aos-duration="2000">
                  Sign up for free
                </h4>
                <form className="gy-5 mt-3  align-items-center" onSubmit={this.handleSubmit}>
                  {this.renderInput("firstName", "First Name", "text", true)}
                  {this.renderInput("lastName", "Last Name", "text", true)}
                  {this.renderInput("email", "Email", "text", true)}
                  {this.renderInput("password", "Password", "password", true)}
                    <br /><br />
                  <div className="m-3 px-4 ">
                    {this.renderButton("Sign Up")}
                    <span className="m-4 ">
                      <Link to="/signin" className="btn btn-outline-danger btn-lg ">
                        Sign In
                      </Link>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <br />
        </div>

      </>
    );
  }
}

export default SignUp;
