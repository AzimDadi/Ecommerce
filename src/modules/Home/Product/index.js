import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  console.log(id, "id", product, "product");

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      console.log(data);
      setProduct(data);
    };
    fetchProduct();
  }, []);

  const handleCart = (product, redirect) => {
    console.log(product);
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const isProductExist = cart.find((item) => item.id === product.id);
    if (isProductExist) {
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      localStorage.setItem(
        "cart",
        JSON.stringify([...cart, { ...product, quantity: 1 }])
      );
    }
    alert("Product Added To Cart");
    if (redirect) {
      navigate("/cart");
    }
  };

  if (!Object.keys(product).length > 0) return <div>Loading.......</div>;
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap ">
          <img
            alt={product?.title}
            className="lg:w-1/2 w-full lg:h-auto h-64 object-contain object-center rounded max-h-[500px]"
            src={product?.image}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">
              {product?.category}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product?.title}
            </h1>
            
            <p className="leading-relaxed capitalize">{product?.description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              
              
            </div>

            <div className="flex justify-between items-center mt-20">
              <span className="title-font font-medium text-2xl text-gray-900">Price:
                ${product?.price}
              </span>
              <div className="flex">
                <button
                  className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded mr-2"
                  onClick={() => handleCart(product, true)}
                >
                  Buy Now
                </button>
                <button
                  className="flex ml-auto text-black border-indigo-500 border  py-2 px-6 focus:outline-none hover:bg-indigo-500 hover:text-white rounded"
                  onClick={() => handleCart(product)}
                >
                  Add To Cart
                </button>
              </div>

              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
