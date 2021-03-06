import React from "react";
import ved_office_bw from "../img/ved_office_bw.jpg";
import { About, Description, Image, Hide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals on staff wiith amazing skills.{" "}
        </motion.p>
        <motion.button
          variants={fade}
          onClick={() => {
            window.location.href = "/contact";
          }}
        >
          Contact Us
        </motion.button>
      </Description>
      <Image>
        <motion.img
          variants={photoAnim}
          src={ved_office_bw}
          alt="Vedran Office"
        />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
