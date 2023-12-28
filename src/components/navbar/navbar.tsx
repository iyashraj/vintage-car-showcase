import React from "react";
import Logo from "../../assets/motor_logo.png";

const nav_link = [
  {
    id: 1,
    link_title: "Home",
    navigate: "/",
  },
  {
    id: 2,
    link_title: "Contact",
    navigate: "/contact",
  },
  {
    id: 3,
    link_title: "Blog",
    navigate: "/blog",
  },
  {
    id: 4,
    link_title: "Store",
    navigate: "/store",
  },
];

const Navbar: React.FC = () => {
  return (
    <div className="nav-main">
      <div className="nav-left">
        <img className="logo_img" src={Logo} />
      </div>
      <div className="nav-right">
        <ul>
          {nav_link?.map((item) => {
            return <li key={item?.id}>{item?.link_title}</li>;
          })}
        </ul>
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default Navbar;
