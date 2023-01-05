import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Products from "../components/Products";
import { getProducts } from "../store/productsSlice";

const Home = () => {
  //   const [products, setProducts] = useState([]);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    // dispatch(getPosts());
    fetchProducts();
  }, []);

  const items = useSelector((state) => state.products);
  //   console.log(items);

  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    dispatch(getProducts(data.products));
  };

  return (
    <div className="mx-10 mt-10">
      <div className="container">
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((item, index) => {
            return <Products item={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
