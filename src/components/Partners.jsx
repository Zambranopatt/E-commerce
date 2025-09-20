import React from "react";

const Partners = () => {
  return (
    <section className="max-h-[100px] flex justify-between rounded-lg overflow-hidden flex-row items-center  px-20 bg-primary text-white relative">
      <div className="flex items-center animate-pulse justify-between transition w-full ">
        <img className="h-[70px]" src="puma.png" alt="brands" />
        <img className="h-[200px]" src="nba.png" alt="brands" />
        <img className="h-[200px]" src="fila.png" alt="brands" />
        <img className="h-[70px]" src="gucci.png" alt="brands" />
        <img className="h-[200px]" src="ua.png" alt="brands" />
        <img className="h-[120px]" src="reebok.png" alt="brands" />
      </div>
    </section>
  );
};

export default Partners;
