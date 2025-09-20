import React from "react";
import CardProd from "./CardProd";
import sampleImg from "../assets/sho.png";

const Products = () => {
  const products = [
    {
      img: sampleImg,
      brand: "Nike",
      description:
        "Lightweight running shoes perfect for daily training and workouts.",
      price: 2499,
    },
    {
      img: sampleImg,
      brand: "Adidas",
      description: "Classic white sneakers that match any casual outfit.",
      price: 1999,
    },
    {
      img: sampleImg,
      brand: "Jordan",
      description:
        "High-top basketball shoes designed for ankle support and performance.",
      price: 3299,
    },
    {
      img: sampleImg,
      brand: "Timberland",
      description:
        "Durable hiking boots built for rough trails and outdoor adventures.",
      price: 3899,
    },
    {
      img: sampleImg,
      brand: "Clarks",
      description:
        "Stylish leather loafers for formal and semi-formal occasions.",
      price: 2799,
    },
    {
      img: sampleImg,
      brand: "Skechers",
      description: "Breathable slip-on shoes made for comfort and convenience.",
      price: 1599,
    },
    {
      img: sampleImg,
      brand: "Fila",
      description:
        "Trendy chunky sneakers with cushioned soles for all-day wear.",
      price: 3099,
    },
    {
      img: sampleImg,
      brand: "Cole Haan",
      description:
        "Elegant black dress shoes ideal for business and formal events.",
      price: 2899,
    },
    {
      img: sampleImg,
      brand: "Salomon",
      description:
        "Sporty trail running shoes with anti-slip grip and support.",
      price: 2599,
    },
    {
      img: sampleImg,
      brand: "Vans",
      description:
        "Casual canvas shoes with lightweight design for everyday use.",
      price: 1499,
    },
  ];

  return (
    <section id="latest" className="min-h-screen px-20 py-10 space-y-5">
      <div>
        <h1 className="text-3xl capitalize font-medium text-primary ">
          latest Products{" "}
        </h1>
      </div>
      <div className="flex flex-wrap gap-5 space-y-10 ">
        {products &&
          products.map((el, i) => (
            <CardProd
              img={el.img}
              brand={el.brand}
              desc={el.description}
              price={el.price}
            />
          ))}
      </div>
    </section>
  );
};

export default Products;
