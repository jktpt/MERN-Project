import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";

const proprotiesValue = {
  burgerColor:"#fcba03",
    logo,
    logoWidth:"15vmax",
    logoHeight:"15vmax",
    navColor1:"#404040",
    logoHoverSize:"10px",
    logoHoverColor:"white",
    link1Text:"Home",
    link2Text:"Product",
    link3Text:"Contact",
    link4Text:"About",
    link1Url:"/",
    link2Url:"/products",
    link3Url:"/contact",
    link4Url:"/about",
    link1Size:"1.3vmax",
    link1Color:"#f5e1e1",
    nav1justifyContent:"flex-end",
    nav2justifyContent:"flex-end",
    nav3justifyContent:"flex-start",
    nav4justifyContent:"flex-start",
    link1ColorHover:"#eb4034",
    link1Margin:"1vmax",
    profileIconColor:"rgba(255,255,255,1)",
    searchIconColor:"rgba(255,255,255,1)",
    cartIconColor:"rgba(255,255,255,1)",
    profileIconColorHover:"#eb4034",
    searchIconColorHover:"#eb4034",
    cartIconColorHover:"#eb4034",
    cartIconMargin:"1vmax"
};

const Header = () => {
  return <ReactNavbar {...proprotiesValue} />;
};

export default Header;
