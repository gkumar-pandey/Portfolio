"use client";

import Container from "../container/container.component";
import Drawer from "../drawer/drawer.component";
import Logo from "../logo/logo.components";
import Navlinks from "../navlinks/navlinks";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillPersonFill } from "react-icons/bs";
import { IoGitPullRequestSharp } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaPenNib } from "react-icons/fa";

const navlinks = [
  { link: "#about", text: "About", icon: <BsFillPersonFill /> },
  { link: "#skill", text: "Skills", icon: <FaTools /> },
  {
    link: "#work-experience",
    text: "Experience",
    icon: <FaLaptopCode />,
  },
  { link: "#projects", text: "Project", icon: <IoGitPullRequestSharp /> },
  { link: "#blog", text: "Blog", icon: <FaPenNib /> },
];

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(true);

  const toggleMenuBar = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <>
      <nav className="p-2 z-10 sticky top-0 bg-opacity-10 backdrop-filter backdrop-blur-md text-[var(--white)] shadow-md  ">
        <Container>
          <div className="flex items-center justify-between">
            <Logo />
            <Navlinks />
            <GiHamburgerMenu
              onClick={toggleMenuBar}
              className="text-xl hidden xs:block "
            />
          </div>
        </Container>
      </nav>
      <Drawer
        toggle={toggleMenuBar}
        open={openDrawer}
        links={navlinks}
        position="bottom"
      />
    </>
  );
};

export default Navbar;
