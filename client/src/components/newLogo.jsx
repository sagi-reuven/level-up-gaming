import Image1 from "../images/newlogo/file.png";
import "../css/newlogo.css";
import { Link } from "react-router-dom";
const NewLogo = () => {
  return (
    <div className="">
      <Link to="/">
        <img src={Image1} className="newlogo" alt="levelup logo" />
      </Link>
    </div>
  );
};

export default NewLogo;
