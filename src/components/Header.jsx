import React from "react";
import { useState } from "react";
import profile from "../assets/profile.png";
import { House, EqualApproximately, Contact, ShoppingCart } from "lucide-react";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const seeMore = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <header className="flex fixed w-full z-1 bg-white items-center h-[60px]  px-8 sm:px-20 justify-between">
        <div>
          <h1 className="text-2xl font-bold text-primary capitalize">Thrift</h1>
        </div>
        <nav className="hidden sm:flex sm:space-x-12">
          <a href="#home" className="link">
            Home
          </a>
          <a href="#latest" className="link">
            Latest
          </a>
          <a href="#contact" className="link">
            Contacts
          </a>
          <select>
            <option value="">Thrifts</option>
            <option value="">Thrifts</option>
            <option value="">Shirts</option>
            <option value="">Caps</option>
            <option value="">Shoes</option>
            <option value="">Bags</option>
          </select>
        </nav>
        <span className="space-x-5">
          <button className=" bg-blue-500 text-white font-bold text-lg px-2  rounded-md">
            in
          </button>

          <button
            className="rotate-90  text-black py-2 px-2 font-bold rounded-md"
            onClick={seeMore}
          >
            lll
          </button>
          <div
            className="w-[200px]  rounded-l-3xl h-[400px] absolute flex flex-col text-white bg-gray-500 top-0 z-10 right-0 "
            style={{ display: toggle ? "block" : "none" }}
          >
            <div className="text-left">
              <button
                className="  font-bold text-2xl m-5 rounded-md "
                onClick={() => setToggle(!toggle)}
              >
                x
              </button>
            </div>
            <nav className="flex flex-col m-5 space-y-7">
              <div className="footer_con">
                <House />
                <a href="*" className="link">
                  Home
                </a>
              </div>
              <div className="footer_con">
                <EqualApproximately />
                <a href="*" className="link">
                  Latest
                </a>
              </div>
              <div className="footer_con">
                <Contact />
                <a href="*" className="link">
                  Contact
                </a>
              </div>
              <div className="footer_con">
                <ShoppingCart />
                <a href="*" className="link">
                  Thrifts
                </a>
              </div>
            </nav>
          </div>
        </span>
      </header>
      <section
        id="home"
        className="h-[calc(100vh-60px)] bg-gray-100  flex items-center justify-center flex-col overflow-hidden "
      >
        <img
          src={profile}
          className="h-[800px] hover:scale-110 transition duration-300"
          alt=""
        />
        <div className="absolute w-[60%] space-y-4">
          <h1 className="text-primary font-bold text-5xl">
            Nike on{" "}
            <span className="text-white bg-primary rounded-md p-1">Run</span>
          </h1>
          <p className="text-black text-2xl tex t-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed a non
            accusantium reprehenderit quibusdam quis doloremque beatae animi
            minima. Nulla at sunt, soluta ipsa atque aut deleniti delectus a id.
          </p>
          <div className="space-x-3">
            <button className="text-third bg-primary w-30 p-1 font-medium rounded-lg">
              Get Started
            </button>
            <button className="text-black font-medium tracking-wide bg-none ring ring-primary p-1 w-30 rounded-lg">
              More
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
