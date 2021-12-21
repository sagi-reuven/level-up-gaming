import { SiNintendoswitch } from "react-icons/si";
import { FaPlaystation } from "react-icons/fa";
import { SiXbox } from "react-icons/si";
import { RiComputerLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "../css/ConsoleButtons.css";
/* a section that display 4 console buttons in home component */
const ConsoleButtons = () => {
  return (
    <div className="container  ">
      <div className="row p-3  ">
        <div className="text-center ">
          <Link
            to="/store/playstation"
            className="item-1 btn btn-primary  col-lg-2 col-md-4 col-sm-12 col-9 mb-3 p-2 miniNav ">
            <FaPlaystation className="me-2 " /> PlayStation
          </Link>
          <Link
            to="/store/nintendo"
            className="item-2 btn btn-danger col-lg-2 col-md-4 col-sm-12 col-9 mb-3 p-2  miniNav">
            <SiNintendoswitch className="me-2 " /> Nintendo
          </Link>
          <Link
            to="/store/xbox"
            className="item-3 btn btn-success col-lg-2 col-md-4 col-sm-12 col-9 mb-3 p-2  miniNav">
            <SiXbox className="me-2" /> Xbox
          </Link>
          <Link
            to="/store/pc"
            className="item-4 btn btn-dark  col-lg-2 col-md-4 col-sm-12 col-9 mb-3 p-2  miniNav">
            <RiComputerLine className="me-2" /> Pc
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConsoleButtons;
