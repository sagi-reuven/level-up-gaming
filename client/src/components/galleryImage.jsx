import { SRLWrapper } from "simple-react-lightbox";
import "../css/galleryImages.css";
const GalleryImage = ({ data, caption, alt }) => {
  return (
    <figure
      className="figure col-md-6 mt-5 col-lg-6 col-xl-4 col-12"
      data-aos="zoom-in-up"
      data-aos-delay="50"
      data-aos-duration="2000"
      data-aos-easing="ease-in-out-cubic">
      <SRLWrapper>
        {/* takes images from public folder */}
        <img src={`/galleryImages/${data}`} className="gallery" alt={alt} />
      </SRLWrapper>
      <figcaption className="figure-caption fw-bold text-light paragraph-font">
        {caption}
      </figcaption>
    </figure>
  );
};

export default GalleryImage;
