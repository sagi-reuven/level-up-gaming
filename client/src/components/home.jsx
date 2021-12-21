import PageHeader from "./common/pageHeader";
import Slider from "./slider";
import Footer from "./footer";
import "../css/home.css";
import { Component } from "react";
import returnGallery from "../services/gallery";
import GalleryImage from "./galleryImage";
import { SRLWrapper } from "simple-react-lightbox";
import team from "../services/meetTheTeam";
import MeetTheTeam from "./MeetTheTeam";
import Testimonials from "./testimonial";
import userService from "../services/usersService";
import ConsoleButtons from "./consoleButtons";
import RegisterSection from "./registerSection";
class Home extends Component {
  state = {
    images: [],
    user: null,
  };
  componentDidMount() {
    // returns an object with the gallery images and updates the state
    const updatedImages = returnGallery();
    this.setState({
      images: updatedImages,
      user: userService.isUserLogged(),
    });
  }
  render() {
    const { images, user } = this.state;

    // "returns meet the team object from meet the team - service"
    const theTeam = team();

    return (
      <>
        <div className=" home-container-up">
          {/* image slider and passing the user data as prop */}
          <Slider user={user} />
          {/* 4 buttons (ps,xbox,pc,nintendo) */}
          <ConsoleButtons />
          <br />
          <br />
          <div
            className="headline text-center"
            data-aos="zoom-in-out"
            data-aos-delay="50"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out-cubic">
            <h1 className="headline-h1">
              <span className="headline-span display-1">Level-Up</span>&nbsp;&nbsp;
              <span className="headline-span display-1">Gaming</span>
            </h1>
          </div>

          <br />
          <br />
          <PageHeader title="Become A Part Of Our World " />
          {/* image gallery main section with lightbox - SRLWapper */}
          <div className="container">
            <SRLWrapper>
              <div className="row text-center gy-3 gx-3">
                {images.map(({ id, data, caption, alt }) => (
                  <GalleryImage key={id} data={data} caption={caption} alt={alt} />
                ))}
              </div>
            </SRLWrapper>
          </div>

          <br />
          <br />
          {/* register section premium and regular, pass user data as props */}
          <RegisterSection user={user} />
          <br />
          <br />
          <hr className="text-white fw-bold" />
          <div className="container">
            <div className="row">
              <h1
                className="display-2 text-center  mb-3 home-title-stroke"
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="2000"
                data-aos-easing="ease-out-in">
                Meet The Team
              </h1>
              <h3
                className="text-capitalize text-center  mb-5 home-title-stroke"
                data-aos="fade-right"
                data-aos-delay="70"
                data-aos-duration="3000"
                data-aos-easing="ease-in-out">
                level up gaming creators
              </h3>
              <div className="d-flex justify-content-around row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5 ms-1">
                {/* meet the team section */}
                {theTeam.map((teammate) => {
                  return <MeetTheTeam key={teammate.id} teammate={teammate} />;
                })}
              </div>
            </div>
          </div>
          <br />
          <br />
          {/* testamonials section */}
          <Testimonials />
          <hr />
          <Footer />
        </div>
      </>
    );
  }
}

export default Home;
