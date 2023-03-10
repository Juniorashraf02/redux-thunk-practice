import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";
import { toggleBrands, toggleStocks } from "../../redux/actions/filterAction";

const Home = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.filters);
  const { brands, stock } = filter;

  useEffect(() => {
    fetch("https://productdemo.onrender.com/items")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  let content;

  if (products.length) {
    content = products.map((product) => (
      <ProductCard key={product.model} product={product} />
    ));
  }
  if (products.length && (stock || brands.length)) {
    content = products
      .filter((product) => {
        if (stock) {
          return product.status === true;
        } else {
          return product;
        }
      })
      .filter((product) => {
        if(brands.length){
          return brands.includes(product.brand);
        }else{
          return product;
        }
      })
      .map((product) => <ProductCard key={product.model} product={product} />);
  }

  const activeClass = "text-white bg-indigo-500 border-white";

  return (
    <div className="max-w-7xl gap-14 mx-auto my-10">
      <div className="mb-10 flex justify-end gap-5">
        <button
          onClick={() => dispatch(toggleStocks())}
          className={`border px-3 py-2 rounded-full font-semibold ${
            stock ? activeClass : null
          } `}
        >
          In Stock
        </button>
        <button
          onClick={() => dispatch(toggleBrands("amd"))}
          className={`border px-3 py-2 rounded-full font-semibold ${
            brands.includes("amd") ? activeClass : null
          } `}
        >
          AMD
        </button>
        <button
          onClick={() => dispatch(toggleBrands("intel"))}
          className={`border px-3 py-2 rounded-full font-semibold ${
            brands.includes("intel") ? activeClass : null
          } `}
        >
          Intel
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
        {content}
      </div>
    </div>
  );
};

export default Home;
