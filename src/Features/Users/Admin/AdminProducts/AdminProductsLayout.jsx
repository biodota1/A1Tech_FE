import React, { useState } from "react";
import ProductAddNew from "./ProductAddNew";
import ProductList from "./ProductsList";

export default function AdminProductsLayout() {
  const [isAddNewProduct, setIsAddNewProduct] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const addNewProduct = () => {
    setIsAddNewProduct(!isAddNewProduct);
  };

  const setErrFromChild = (data) => {
    console.log(data);
    setErrMsg(data);
  };

  const setAddNewFromChild = (data) => {
    setIsAddNewProduct(data);
  };
  return (
    <>
      <div className="my-10 flex gap-16">
        <button className="btn btn-primary" onClick={addNewProduct}>
          ADD NEW PRODUCT
        </button>
        <label className="w-[500px] input input-bordered flex items-center gap-2 bg-white">
          <input type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      <p className="text-red-500">{errMsg}</p>
      {isAddNewProduct && (
        <ProductAddNew
          setAddNewToParent={setAddNewFromChild}
          setErrMsg={setErrFromChild}
        />
      )}
      <ProductList />
    </>
  );
}
