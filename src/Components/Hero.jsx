import React, { useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";
import "../Assets/css/hero.css"
import Logo from "../Assets/Images/logo.png";
import HeroLight from "../Assets/Images/herolight.jpg";

import { BiWorld } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";

const Hero = () => {
  const theme = useContext(ThemeContext);
  return (
    <div className="heroSection ">
      {theme.lightMode === true ? (
        <img src={HeroLight} className="heroBg " />
      ) : (
        <img src={Hero} className="heroBg " />
      )}

      <div className="heroBgGrad ">
        <div className="nav">
          <img
            src={Logo}
            className="netflixLogo py-2 mt-3 mr-auto ml-5 flex-row-reverse "
            onClick={() => theme.setLightMode(!theme.lightMode)}
          />

          <div className="inline-flex ml-5 ">
            <button className="langButton flex justify-center items-center py-0.5 m-5 ">
              <BiWorld className="flex self-center m-0.5" />
              <span className="">English</span>
              <RiArrowDropDownLine className=" dropIcon flex self-center " />
            </button>
            <button className="signButton  flex justify-center m-5 p-1 px-3 self-center">
              <span>Sign In</span>
            </button>
          </div>
        </div>
        <div className="heroTextContainer  z-2 w-full mt-11 flex flex-col justify-center self-center items-center">
          <br />
          <br />
          <p className="text-3xl md:text-6xl  sm:text-4xl  ">
            Unlimited movies, TV <br /> shows and more.
          </p>
          <br />
          <p className="text-2xl md:text-4xl sm:text-3xl ">
            Watch anywhere. Cancel anytime.
          </p>
          <br />
          <p className="text-xl md:text-2xl sm:text-2xl ">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
        </div>
        <br />
        <div className="emailContainer flex justify-center ">
          <input placeholder="Email Address" className="  emailInput p-3" />
          <button className=" getButton flex justify-center  p-3 self-center">
            <span className="  sm:text-base md:text-xl text-white font-semibold">
              Get Started &gt;{" "}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
