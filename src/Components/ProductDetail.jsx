import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchProduct() {
      const res = await axios.get(`https://dummyjson.com/products/${id}`);
      setProduct(res.data);
    }
    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <h2 className="text-center mt-20 text-lg font-medium"> Loading product... </h2>
    );
  }

  return (
    <div className="px-4 sm:px-8 lg:px-16 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12">
        {/* product Image */}
        <div className="flex justify-center md:justify-start">
          <img src={product.thumbnail} className=" w-full max-w-sm sm:max-w-m md:max-w-lg aspect-square rounded-2xl shadow-md"
          alt={product.title} loading="lazy"/>
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold"> {product.title} </h1>

          <p className="mt-4 text-gray-600 leading-relaxed"> {product.description} </p>

          <p className="mt-5 text-2xl font-semibold text-gray-900"> ₹ {product.price} </p>

          <div className="mt-4 space-y-1 text-gray-700">
            <p>
              <span className="font-semibold">Brand:</span> {product.brand}
            </p>
            <p>
              <span className="font-semibold">Rating:</span> ⭐ {product.rating}
            </p>
          </div>

          <button onClick={() => dispatch(addToCart(product))} className="mt-8 w-full sm:w-auto bg-cyan-500
            text-white px-8 py-3 rounded-xl font-semibold hover:bg-cyan-600 transition"> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
