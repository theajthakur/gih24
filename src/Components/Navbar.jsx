import React, { useState, useEffect } from "react";
import Button from "../UI elements/Button";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-scroll";
import gihImage from "../Assets/Images/gih.png";

const Navbar = () => {
  const controls = useAnimation();

  const [toggleMenu, settoggleMenu] = useState(false);
  const [prevScroll, setprevScroll] = useState(0);

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
    setprevScroll(currentScroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScroll]);
  const menuItems = [
    { id: "01", name: "Intro", to: "about" }, // New item added at the top
    { id: "02", name: "Prize", to: "about" },
    { id: "03", name: "Themes", to: "experience" },
    { id: "04", name: "Sponsors", to: "projects" },
    { id: "05", name: "Judges", to: "contact" },
    { id: "06", name: "Team", to: "contact" },
    { id: "07", name: "FAQ", to: "contact" },
    { id: "08", name: "Guidelines", to: "contact" },
  ];

  return (
    <>
      <div className="flex items-center justify-center ">
        <motion.div
          animate={controls}
          transition={{ duration: 0.3 }}
          className={`hidden md:flex font-mono justify-between gap-10 text-base items-center fixed  p-10 h-16 w-full -mt-2 z-50 glassmorphism ${window.pageYOffset < 100 ? null : "drop-shadow-2xl"
            } duration-1000`}
        >
          <div className="text-base text-primary hover:cursor-pointer hover:text-white">
            <Link
              to="intro"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
              className="flex justify-center items-center gap-3 text-sm text-white"
            >
              <img
                src={gihImage}
                alt="gihImage"
                className=" opacity-100  max-h-[300px] duration-300 gradientScale glassmorphism h-12"
              />
              <div>Galgotias International Hackathon</div>
            </Link>
          </div>

          <div>
            <ul className="flex items-center gap-8 ">
              {menuItems.map((item) => (
                <motion.li
                  key={item.id}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.1 }}
                  className="flex gap-1 hover:text-primary hover:cursor-pointer"
                >
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
                </motion.li>
              ))}
              <a href="ShriyamResume.pdf" target="_blank">
                <motion.li
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.1 }}
                  className="flex gap-1 hover:cursor-pointer"
                >
                  <Button title="Register" className={"py-2"} />
                </motion.li>
              </a>
            </ul>
          </div>
        </motion.div>
      </div>

      <div className="flex items-center justify-center w-full ">
        <motion.div
          animate={controls}
          transition={{ duration: 0.3 }}
          className={`flex md:hidden font-mono justify-between text-base gap-8 fixed bg- px-10 py-2 h-16 w-full -mt-2 z-50 glassmorphism  ${window.pageYOffset < 100 ? null : "drop-shadow-2xl"
            } duration-1000 `}
        >
          <div className="text-base text-white hover:cursor-pointer hover:bg-primary-white">
            <Link
              to="intro"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
              className="flex justify-center items-center gap-3 text-sm "
            >
              <img
                src={gihImage}
                alt="gihImage"
                className=" opacity-100  max-h-[300px] duration-300 gradientScale glassmorphism h-12"
              />
              <div>Galgotias International Hackathon</div>
            </Link>
          </div>

          {toggleMenu ? (
            <motion.div
              animate={{ x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col w-full h-screen -mt-10 -mr-16 gradientColor"
            >
              <IoClose
                className="absolute top-10 text-4xl mr-[50px] text-primary hover:text-off_white self-end"
                onClick={() => {
                  settoggleMenu((prev) => !prev);
                }}
              />

              <ul className="flex flex-col items-center justify-center w-full h-full ">
                <li className=" h-[15%] w-full items-center justify-center flex gap-1 hover:text-primary hover:cursor-pointer">
                  {" "}
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    onClick={(prev) => {
                      settoggleMenu(!prev);
                    }}
                  >
                    <span className=" text-primary">01.</span>
                    <span>About</span>
                  </Link>
                </li>
                <li className=" h-[15%] w-full items-center justify-center flex gap-1 hover:text-primary hover:cursor-pointer">
                  {" "}
                  <Link
                    to="experience"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    onClick={(prev) => {
                      settoggleMenu(!prev);
                    }}
                  >
                    <span className=" text-primary">02.</span>
                    <span>Experience</span>
                  </Link>
                </li>
                <li className=" h-[15%] w-full items-center justify-center flex gap-1 hover:text-primary hover:cursor-pointer">
                  {" "}
                  <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    onClick={(prev) => {
                      settoggleMenu(!prev);
                    }}
                  >
                    <span className=" text-primary">03.</span>
                    <span>Work</span>
                  </Link>
                </li>
                <li className=" h-[15%] w-full  items-center justify-center flex gap-1 hover:text-primary hover:cursor-pointer">
                  {" "}
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    onClick={(prev) => {
                      settoggleMenu(!prev);
                    }}
                  >
                    <span className=" text-primary">04.</span>
                    <span>Contact</span>
                  </Link>
                </li>
                <li className=" h-[15%] w-full items-center justify-center flex gap-1  hover:cursor-pointer">
                  <div>
                    <Button title="Resume" />
                  </div>
                </li>
              </ul>
            </motion.div>
          ) : (
            <>
              <FiMenu
                className={`text-3xl text-primary hover:text-off_white`}
                onClick={() => {
                  settoggleMenu((prev) => !prev);
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
