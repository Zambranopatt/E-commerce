import React from "react";
import showcase from "../assets/sho.png";

const About = () => {
  return (
    <section className="h-screen bg-gray-100 px-20 flex items-center justify-between">
      <div className="space-y-5 w-[50%]">
        <h2 className="text-3xl text-primary font-medium tracking-wide">
          Latest Release{" "}
        </h2>
        <h1 className="text-5xl font-bold italic text-primary ">
          Nike Air force Wave
        </h1>
        <p className="text-lg text-justify tracking-wide">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
          praesentium nihil, cupiditate sed, ipsam velit corporis provident
          nulla quis aliquid quae ipsa placeat ea exercitationem incidunt autem
          hic earum ratione!
        </p>
        <button className="p-1 shadow-md w-[100px] rounded-lg bg-primary text-white font-bold">
          Buy now
        </button>
      </div>
      <div>
        <img
          src={showcase}
          className=" hover:scale-110 transition duration-500"
          alt=""
        />
      </div>
    </section>
  );
};

export default About;
