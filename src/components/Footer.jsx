import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import React from "react";

const Footer = () => {
  return (
    <div className="w-75 py-4 bg-dark m-auto text-light flex-column d-flex align-items-center">
      <Typography variant="body1" color="inherit">
        &copy; 2024 Your Company | All rights reserved
      </Typography>
      <div>
        <IconButton
          color="inherit"
          aria-label="facebook"
          onClick={() => window.open("https://www.facebook.com/")}
        >
          <Facebook />
        </IconButton>
        <IconButton
          color="inherit"
          aria-label="instagram"
          onClick={() => window.open("https://www.instagram.com/")}
        >
          <Instagram />
        </IconButton>
        <IconButton
          color="inherit"
          aria-label="linkedin"
          onClick={() => window.open("https://www.linkedin.com/")}
        >
          <LinkedIn />
        </IconButton>
      </div>
    </div>
  );
};

export default Footer;
