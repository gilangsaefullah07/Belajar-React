import Rating from "../Rating";
import React, { useEffect, useState } from "react";
import getProducts from "../../../Services/products.service";

const Card = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product, index) => (
        <div
          key={product.id}
          className="w-full flex flex-col gap-3 card bg-white rounded-md p-3"
        >
          <div className="flex row gap-3 md:flex-col">
            <img
              className="rounded-md h-[80px] w-[80px] md:w-full md:h-full"
              src={product.image}
              alt="Not Found"
            />
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <p className="text-md font-bold">{product.title}</p>
                <p className="text-sm text-gray-400 hidden md:line-clamp-2">
                  {product.description}
                </p>
              </div>
              <div className="w-full flex gap-3 overflow-ellipsis">
                <img
                  className="h-[36px] w-[36px]"
                  src={product.avatar}
                  alt="Avatar Image"
                />
                <div>
                  <p className="w-full line-clamp-1 font-bold">
                    {product.fullname}
                  </p>
                  <p className="w-full line-clamp-1 text-sm text-gray-400">
                    {product.position}
                    <span className="font-bold">{product.company}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-3 items-center">
              <Rating></Rating>
              <p className="underline underline-offset-1 text-gray-400">
                {product.rating} ({product.reviews})
              </p>
            </div>
            <p className="text-2xl text-green-500 font-bold">{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
