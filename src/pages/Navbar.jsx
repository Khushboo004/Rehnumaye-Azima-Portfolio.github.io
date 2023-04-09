import React, { useState } from "react";
import { AppBar, IconButton, Menu, MenuItem, Toolbar, Typography, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import "../style/style.css";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../assets/logo.png";


const Navbar = () => {
  const [activeMenuItem, setActiveMenuItem] = useState("home");

  const [click, setClick] = useState(false);
  const handleClick = (event) => setClick(event.currentTarget);
  const closeMenu = () => setClick(false);

  const isSmallScreen = useMediaQuery("(max-width:600px)");

  // State to keep track of the active menu item

  // Function to update the active menu item
  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
    closeMenu();
  };
  const isMenuItemActive = (menuItem) => {
    return activeMenuItem === menuItem;

  }
 // CSS classes for active menu item and hover effect
 const activeMenuItemClass = "active";
 const hoverMenuItemClass = "hover";
  return (
    <div className="">
      <AppBar
        style={{
          backgroundColor: "black",
          boxShadow: "0px 8px 1px -7px rgba(255,255,255,1)",
          position: "fixed",
          top: 0,
        }}
      >
        <Toolbar >
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src={Logo} width={"100"} height={"100"} alt="" />
          </Typography>
          {isSmallScreen ? (
           <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleClick}>
           <MenuIcon style={{ marginRight: '60px' }} />
         </IconButton>
         
          ) : (
            <ul className="nav-menu" style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <li className={`nav-item ${isMenuItemActive("home") ? activeMenuItemClass : ""} ${hoverMenuItemClass}`} style={{ marginRight: "1rem" }}>
            <a href="#intro" onClick={() => handleMenuItemClick("home")} style={{ color: isMenuItemActive("home") ? "maroon" : "", fontWeight: isMenuItemActive("home") ? "bold" : "" }}>
                Home
              </a>
            </li>
            <li className={`nav-item ${isMenuItemActive("about") ? activeMenuItemClass : ""} ${hoverMenuItemClass}`} style={{ marginRight: "1rem" }}>
            <a href="#about" onClick={() => handleMenuItemClick("about")} style={{ color: isMenuItemActive("about") ? "maroon" : "", fontWeight: isMenuItemActive("about") ? "bold" : "" }}>
                About
              </a>
            </li>
            <li className={`nav-item ${isMenuItemActive("skills") ? activeMenuItemClass : ""} ${hoverMenuItemClass}`} style={{ marginRight: "1rem" }}>
            <a href="#skills" onClick={() => handleMenuItemClick("skills")} style={{ color: isMenuItemActive("skills") ? "maroon" : "", fontWeight: isMenuItemActive("skills") ? "bold" : "" }}>
                Skills
              </a>
            </li>
            <li className={`nav-item ${isMenuItemActive("academicProject") ? activeMenuItemClass : ""} ${hoverMenuItemClass}`} style={{ marginRight: "1rem" }}>
            <a href="#academicProject" onClick={() => handleMenuItemClick("academicProject")} style={{ color: isMenuItemActive("academicProject") ? "maroon" : "", fontWeight: isMenuItemActive("academicProject") ? "bold" : "" }}>
              Academic Project
              </a>
            </li>
            <li className={`nav-item ${isMenuItemActive("language") ? activeMenuItemClass : ""} ${hoverMenuItemClass}`} style={{ marginRight: "1rem" }}>
            <a href="#language" onClick={() => handleMenuItemClick("language")} style={{ color: isMenuItemActive("language") ? "maroon" : "", fontWeight: isMenuItemActive("language") ? "bold" : "" }}>
              Language
              </a>
            </li>
            <li className={`nav-item ${isMenuItemActive("contact") ? activeMenuItemClass : ""} ${hoverMenuItemClass}`} style={{ marginRight: "1rem" }}>
      <a href="#contact" onClick={() => handleMenuItemClick("contact")} style={{ color: isMenuItemActive("contact") ? "maroon" : "", fontWeight: isMenuItemActive("contact") ? "bold" : "" }}>
        Contact
      </a>
    </li>
           
             
              
            </ul>
          )}
        </Toolbar>
        {isSmallScreen && ( // Render dropdown menu for small screens
          <Menu
            anchorEl={click}
            keepMounted
            open={Boolean(click)}
            onClose={closeMenu}
          >
            <MenuItem onClick={closeMenu}><a href="#intro">Home</a></MenuItem>
            <MenuItem onClick={closeMenu}><a href="#about">About</a></MenuItem>
            <MenuItem onClick={closeMenu}><a href="#skills">Skills</a></MenuItem>
            <MenuItem onClick={closeMenu}><a href="#academicProject">Academic Project</a></MenuItem>
            <MenuItem onClick={closeMenu}><a href="#skills">Demo</a></MenuItem>
          </Menu>
        )}
      </AppBar>
    
    </div>
  );
};

export default Navbar;
