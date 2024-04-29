import React, { useState } from "react";
import ProductList from "./ProductsList";
import AdminProductAdd from "./AdminProductAdd";

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

  if (isAddNewProduct) {
    return (
      <>
        <AdminProductAdd setAddNewToParent={setAddNewFromChild} />
      </>
    );
  } else {
    return (
      <>
        <h1 className="mt-5 text-2xl font-bold">Products</h1>
        <div className="my-10 flex gap-10 ">
          <button
            className="btn bg-slate-800 text-green-400"
            onClick={addNewProduct}
          >
            ADD NEW PRODUCT
          </button>
        </div>
        <p className="text-red-500">{errMsg}</p>
        <ProductList />
      </>
    );
  }
}
