import React, { useState, useEffect } from "react";
import { useAddNewProductMutation } from "./ProductApiSlice";

export default function ProductAddNew({ setAddNewToParent, setErrMsg }) {
  const [addNewProduct, { isLoading, isSuccess, isError, error }] =
    useAddNewProductMutation();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);

  useEffect(() => {
    if (isSuccess) {
      setName("");
      setCategory("");
      setPrice(0);
      setErrMsg("");
    }
  }, [isSuccess]);

  const onClickAddItem = async (e) => {
    e.preventDefault();
    setAddNewToParent(false);
    await addNewProduct({ name, category, price });
  };

  const onNameChanged = (e) => setName(e.target.value);
  const onCategoryChanged = (e) => setCategory(e.target.value);
  const onPriceChanged = (e) => setPrice(e.target.value);
  return (
    <form
      className="w-[800px] bg-slate-200 pb-10 pl-10 flex flex-col gap-5 absolute z-20 rounded-lg"
      onSubmit={onClickAddItem}
    >
      <button className="btn btn-square ml-auto bg-red-600 text-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <label className="input input-bordered bg-white flex items-center gap-2 mr-10">
        <input
          type="text"
          className="grow"
          placeholder="Name"
          onChange={onNameChanged}
        />
      </label>
      <label className="input input-bordered bg-white flex items-center gap-2 mr-10">
        <input
          type="text"
          className="grow"
          placeholder="Category"
          onChange={onCategoryChanged}
        />
      </label>
      <label className="input input-bordered bg-white flex items-center gap-2 mr-10">
        <input
          type="text"
          className="grow"
          placeholder="Price"
          onChange={onPriceChanged}
        />
      </label>
      <button className="btn btn-primary mr-10">ADD</button>
    </form>
  );
}
