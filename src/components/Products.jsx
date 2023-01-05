import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { addToCart } from "../store/cartSlice";

const Products = ({ item }) => {
  const dispatch = useDispatch();

  const add = (item) => {
    let product = {
      id: item.id,
      name: item.title,
      price: item.price,
      image: item.thumbnail,
      qty: 1,
    };
    dispatch(addToCart(product));
  };
  return (
    <div className="group relative">
      <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
        <img src={item.thumbnail} alt="" />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <NavLink to="/">
              <span aria-hidden="true" className="absolute inset-0"></span>
              {item.title}
            </NavLink>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{item.category}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">${item.price}</p>
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700  sm:ml-3 sm:w-auto sm:text-sm"
          onClick={() => add(item)}
          style={{ zIndex: "9999" }}
        >
          Add to bag
        </button>
      </div>
    </div>
  );
};

export default Products;
