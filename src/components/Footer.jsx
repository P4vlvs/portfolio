import React from "react";
import { Instagram, Twitter, Facebook, LinkedIn } from "@mui/icons-material";
import "../styles/Footer.css"
function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Instagram/>
        <Facebook/>
        <Twitter/>
        <LinkedIn/>

      </div>
      <p>&copy; 2024 Josephtech.com</p>
    </div>
  );
}

export default Footer;
