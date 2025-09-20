import React from "react";

const CardProd = ({ img, desc, price, brand }) => {
  return (
    <div className="w-[250px] relative shadow-md overflow-hidden flex  flex-col items-center justify-between  h-[320px] p-5 rounded-md bg-gray-200 ">
      <div className="h-[80%] w-full bg-gray-300"></div>
      <div className="text-center">
        <h1 className="text-lg font-medium text-primary">{brand}</h1>
      </div>

      <h2 className="text-justify">{desc}</h2>
      <div className="flex w-full justify-between">
        <h2 className="text-lg">{price}</h2>
        <button className="bg-primary text-white font-bold px-3 py-1 rounded-xl">
          Buy now
        </button>
      </div>
    </div>
  );
};

export default CardProd;
