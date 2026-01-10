import { useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "./ProductItem";

function ProductList({ searchText }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function calling() {
      try {
        const res = await axios.get("https://dummyjson.com/products");
        setProducts(res.data.products);
      } catch (error) {
        console.error("API Error:", error);
      }
    }

    calling();
  }, []);

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="px-4 sm:px-6 lg:px-10 py-6">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left"> Products </h2>

      {/* No products */}
      {filteredProducts.length === 0 ? (
        <p className="text-gray-500 text-center mt-10"> No products found </p>
      ) : (
        /* PRODUCT GRID */
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((item) => (
            <ProductItem key={item.id} product={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;

