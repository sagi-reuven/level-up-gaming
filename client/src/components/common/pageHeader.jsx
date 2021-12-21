import { motion } from "framer-motion";
const PageHeader = ({ title, para }) => {
  const headerTitleAnimation = {
    hidden: {
      x: -800,
    },
    visible: {
      x: 0,
      transition: {
        duration: 1.2,
        type: "spring",
      },
    },
  };
  const headerParaAnimate = {
    hidden: {
      y: 600,
    },
    visible: {
      y: 0,
      transition: {
        duration: 1.2,
        type: "spring",
      },
    },
  };
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col-12 mt-5">
            <motion.div variants={headerTitleAnimation} initial="hidden" animate="visible">
              <h1 className="fw-bolder text-light">{title}</h1>
            </motion.div>
          </div>
          <div className="col-12">
            <motion.div variants={headerParaAnimate} initial="hidden" animate="visible">
              <h4 className="fw-bolder text-light  ">{para}</h4>
            </motion.div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </>
  );
};

export default PageHeader;
