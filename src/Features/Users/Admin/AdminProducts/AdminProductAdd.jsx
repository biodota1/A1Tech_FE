import React, { useEffect, useState } from "react";
import { useAddNewProductMutation } from "./ProductApiSlice";

export default function AdminProductAdd({ setAddNewToParent }) {
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
    <form className="my-10 mr-34 flex flex-col gap-7" onSubmit={onClickAddItem}>
      <h2 className="text-3xl font-bold">ADD NEW PRODUCT</h2>

      <label className="w-[700px] input input-bordered bg-white flex items-center gap-2 mr-10">
        <input
          type="text"
          className="grow"
          placeholder="Name"
          onChange={onNameChanged}
        />
      </label>
      <label className="w-[700px] input input-bordered bg-white flex items-center gap-2 mr-10">
        <input
          type="text"
          className="grow"
          placeholder="Category"
          onChange={onCategoryChanged}
        />
      </label>
      <label className="w-[700px] input input-bordered bg-white flex items-center gap-2 mr-10">
        <input
          type="text"
          className="grow"
          placeholder="Price"
          onChange={onPriceChanged}
        />
      </label>
      <input
        type="file"
        className="file-input file-input-bordered file-input-primary w-full max-w-xs bg-white"
      />
      <div>
        <button className="btn btn-primary bg-green-500 w-24 text-slate-100 mr-5">
          ADD
        </button>
        <button className="btn btn-primary bg-red-600 w-24 text-slate-100">
          CANCEL
        </button>
      </div>
    </form>
  );
}
