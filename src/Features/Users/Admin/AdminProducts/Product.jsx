import { useSelector } from "react-redux";
import {
  selectProductById,
  useDeleteProductMutation,
  useUpdateProductMutation,
} from "./ProductApiSlice";
import { useState, useEffect } from "react";

const Product = ({ productId }) => {
  const product = useSelector((state) => selectProductById(state, productId));
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);

  const [deleteProduct] = useDeleteProductMutation();

  const [updateProduct] = useUpdateProductMutation();

  useEffect(() => {
    setName("");
    setCategory("");
    setCategory(0);
  }, []);

  const handleNameInput = (e) => setName(e.target.value);
  const handleCategoryInput = (e) => setCategory(e.target.value);
  const handlePriceInput = (e) => setPrice(e.target.value);

  const handleDeleteProduct = async (e) => {
    e.preventDefault();
    document.getElementById("my_modal_1").close();
    try {
      const response = await deleteProduct({ id: productId });
      console.log(response); // Optional: Handle success response
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    document.getElementById("my_modal_2").close();
    try {
      const response = await updateProduct({
        id: productId,
        name: name,
        category: category,
        price: price,
      });
      console.log(response); // Optional: Handle success response
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  if (product) {
    return (
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src="/tailwind-css-component-profile-2@56w.png"
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>

            <div>
              <div className="font-bold">{product.name}</div>
              <div className="text-sm opacity-50">{product.id}</div>
            </div>
          </div>
        </td>
        <td>{product.category}</td>
        <td>₱ {product.price}.00</td>
        <td className="flex gap-3">
          {/* MODIFY BUTTON START */}
          <button
            className="btn bg-green-600 text-white"
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            MODIFY
          </button>
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box bg-white">
              <h3 className="font-bold text-lg">MODIFY PRODUCT</h3>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-black font-bold">
                    Item Name / Description
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Type here..."
                  className="input input-bordered w-full max-w-xs bg-slate-100"
                  onChange={handleNameInput}
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-black font-bold">
                    Category
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Type here..."
                  className="input input-bordered w-full max-w-xs bg-slate-100"
                  onChange={handleCategoryInput}
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-black font-bold">Price</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here..."
                  className="input input-bordered w-full max-w-xs bg-slate-100"
                  onChange={handlePriceInput}
                />
              </label>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <div className="flex gap-5">
                    <button
                      className="btn bg-green-600 text-white"
                      onClick={handleUpdateProduct}
                    >
                      OK
                    </button>

                    <button className="btn bg-red-600 text-white">
                      CANCEL
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </dialog>
          {/* MODIFY BUTTON END */}

          {/* DELETE BUTTON START */}
          <button
            className="btn bg-red-600 text-white"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            DELETE
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box bg-white">
              <h3 className="font-bold text-lg">DELETE PRODUCT</h3>
              <p className="py-4">Are you sure you want to delete?</p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <div className="flex gap-5">
                    <button
                      className="btn bg-red-600 text-white"
                      onClick={handleDeleteProduct}
                    >
                      YES
                    </button>
                    <button className="btn btn-primary">NO</button>
                  </div>
                </form>
              </div>
            </div>
          </dialog>
          {/* DELETE BUTTON END */}
        </td>
      </tr>
    );
  } else return null;
};

export default Product;
