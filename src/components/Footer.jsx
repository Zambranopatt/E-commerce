import React from "react";
import { MapPin, User, Hash, Facebook, Instagram, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="text-white min-h-[200px] flex flex-row justify-between items-center  px-20 py-5 bg-gray-900">
      <div className=" space-y-2 w-[300px]">
        <h1 className="text-2xl italic font-bold text-primary">Thrift</h1>
        <p className="text-sm tracking-wider">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        </p>
      </div>
      <div className="space-y-3">
        <h1 className="text-lg tracking-wide">Contact Info</h1>
        <div className="footer_con">
          <User />
          <h2>patrickzambrano47@gmail.com</h2>
        </div>
        <div className="footer_con">
          <Hash />
          <h2>0905-887-8315</h2>
        </div>
        <div className="footer_con">
          <MapPin />
          <h2>Brgy. Legaspi Taguig City</h2>
        </div>
      </div>
      <div className="space-y-3">
        <h1>Visit My Social Accounts</h1>
        <div className="footer_con">
          <Facebook />
          <h2>zampat</h2>
        </div>
        <div className="footer_con">
          <Instagram />
          <h2>John Patrick Zambrano</h2>
        </div>
        <div className="footer_con">
          <Github />
          <h2>John Patrick Zambrano</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
