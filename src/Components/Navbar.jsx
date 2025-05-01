import React, { useState, useEffect } from "react";
import Button from "../UI elements/Button";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-scroll";
import gihImage from "../Assets/Images/gih.png";

const Navbar = () => {
  const controls = useAnimation();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [prevScroll, setPrevScroll] = useState(0);

  useEffect(() => {
    const html = document.querySelector("html");

    if (toggleMenu) {
      html.style.overflow = "hidden";
    } else {
      html.style.overflow = "auto";
    }
  }, [toggleMenu]);

  const handleScroll = () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= prevScroll) {
      controls.start({ opacity: 1 });
    } else {
      controls.start({ opacity: 0 });
    }
    setPrevScroll(currentScroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScroll]);

  const menuItems = [
    { id: "01", name: "Intro", to: "intro" },
    // { id: "02", name: "Patrons", to: "prizes" },
    { id: "02", name: "Themes", to: "themes" },
    { id: "03", name: "Schedule", to: "schedule" },
    { id: "04", name: "Sponsors", to: "sponsors" },
    { id: "05", name: "Judges", to: "judges" },
    { id: "06", name: "Gallery", to: "gallery" },
    { id: "07", name: "FAQ", to: "faq" },
    { id: "08", name: "Guidelines", to: "guidelines" },
  ];

  return (
    <>
      <div className="flex items-center justify-center">
        <motion.div
          animate={controls}
          transition={{ duration: 0.3 }}
          className={`hidden xl:flex font-mono justify-between text-base items-center fixed p-10 pt-16 h-16 w-full -mt-2 z-50 glassmorphism ${window.pageYOffset < 100 ? null : "drop-shadow-2xl"
            } duration-1000`}
        >
          {/* Logo */}
          <div className=" text-primary hover:cursor-pointer hover:text-off_white">
            <Link
              to="introduction"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
              className="flex justify-center items-center gap-3 text-xl text-off_white"
            >
              <img
                src={gihImage}
                alt="GIH Logo"
                className="opacity-100 max-h-[300px] duration-300 gradientScale glassmorphism h-20"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div>
            <ul className="flex items-center gap-8 2xl:text-xl md:text-md">
              {menuItems.map((item) => (
                <motion.li
                  key={item.id}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.1 }}
                  className="flex gap-1 hover:text-primary hover:cursor-pointer"
                >
                  {item.to === "guidelines" ? (
                    <a
                      href="guidelines.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="text-primary">{item.id}.</span>
                      <span>{item.name}</span>
                    </a>
                  ) : (
                    <Link
                      to={item.to}
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-100}
                    >
                      <span className="text-primary">{item.id}.</span>
                      <span className="capitalize">{item.name}</span>
                    </Link>
                  )}
                </motion.li>
              ))}
              {/* Register Button */}
              <a href="https://unstop.com/p/1472431" rel="noopener noreferrer">
                <motion.li
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.1 }}
                  className="flex gap-1 hover:cursor-pointer"
                >
                  <Button title="Register Now" className={"py-2"} />
                </motion.li>
              </a>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <div className="flex items-center justify-center w-full">
        <motion.div
          animate={controls}
          transition={{ duration: 0.3 }}
          className={`flex xl:hidden font-mono justify-between text-base gap-8 fixed bg- px-10 py-2 h-16 w-full -mt-2 z-50 glassmorphism ${window.pageYOffset < 100 ? null : "drop-shadow-2xl"
            } duration-1000 `}
        >
          {/* Mobile Logo */}
          <div className="text-base text-off_white hover:cursor-pointer hover:bg-primary-white">
            <Link
              to="introduction"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
              className="flex justify-center items-center gap-3 text-sm"
            >
              <img
                src={gihImage}
                alt="GIH Logo"
                className="opacity-100 max-h-[300px] duration-300 gradientScale glassmorphism h-12"
              />
              <div>GIH</div>
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          {toggleMenu ? (
            <motion.div
              animate={{ x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col w-full h-screen -mt-10 -mr-16 gradientColor"
            >
              <IoClose
                className="absolute top-10 text-4xl mr-[50px] text-primary hover:text-off_white self-end"
                onClick={() => {
                  setToggleMenu((prev) => !prev);
                }}
              />
              <ul className="flex flex-col items-center justify-center w-full h-full">
                {menuItems.map((item) => (
                  <motion.li
                    key={item.id}
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.1 }}
                    className="h-[8%] w-full items-center justify-center flex gap-1 hover:text-primary hover:cursor-pointer"
                  >
                    {item.to === "guidelines" ? (
                      <a
                        href="guidelines.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="text-primary">{item.id}.</span>
                        <span>{item.name}</span>
                      </a>
                    ) : (
                      <Link
                        to={item.to}
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-100}
                        onClick={() => {
                          setToggleMenu(false);
                        }}
                      >
                        <span className="text-primary">{item.id}.</span>
                        <span>{item.name}</span>
                      </Link>
                    )}
                  </motion.li>
                ))}
               {/* Register Button */}
               <a
                  className="h-[8%]" href="https://unstop.com/p/1472431" >
                  <li className="h-[15%] w-full items-center justify-center flex gap-1 hover:cursor-pointer">
                    <Button title="Register Now" />
                  </li>
                </a>
              </ul>
            </motion.div>
          ) : (
            <>
              <FiMenu
                className="text-3xl text-primary hover:text-off_white"
                onClick={() => {
                  setToggleMenu((prev) => !prev);
                }}
              />
            </>
          )}
        </motion.div>
      </div>
    </>
  );
};

export default Navbar;
