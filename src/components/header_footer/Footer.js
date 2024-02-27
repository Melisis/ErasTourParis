import React from "react";
import { Fade } from "react-awesome-reveal";

const Footer = () => {
  return (
    <footer className="bck_red">
        <Fade triggerOnce delay={500}>
        <div>
            <div className="font_righteous footer_logo_venue">Taylor Swift</div>
            <div className="footer_copyright">Eras Tour Paris 2024</div>

        </div>
        </Fade>
    </footer>
  );
}; 

export default Footer;