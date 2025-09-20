import React from "react";
import caps from "../assets/caps.png";
import clothes from "../assets/clothes.png";
import shoes from "../assets/sho.png";
import bags from "../assets/bags.png";

const Merc = () => {
  const merchs = [
    { img: shoes, name: "Shoes" },
    { img: clothes, name: "Shirts" },
    { img: caps, name: "Caps" },
    { img: bags, name: "bags" },
  ];
  return (
    <section className="sec flex items-center flex-col min-h-1/2 py-15 space-y-7">
      <div>
        <h1 className="text-3xl font-medium text-primary">Merch</h1>
      </div>
      <div className="flex w-full items-center justify-between">
        {merchs &&
          merchs.map((el, i) => (
            <div
              key={i}
              className="bg-gray-100 cursor-pointer  shadow-lg rounded-2xl p-2 w-[280px] h-[350px] hover:scale-110 transition duration-300"
            >
              <h1 className="text-lg tracking-wide">{el.name}</h1>

              <img src={el.img} alt={el.name} className="h-[80%]" />
              <div className="flex justify-evenly">
                <button className="hover:text-primary">Find more</button>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Merc;
