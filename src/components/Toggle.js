import { motion } from "framer-motion";
import React, { useState } from "react";

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div classname="question" onClick={() => setToggle(!toggle)}>
      <motion.h4>{title}</motion.h4>
      {toggle ? children : ""}
      <div fclassName="faq-line"></div>
    </div>
  );
};

export default Toggle;
