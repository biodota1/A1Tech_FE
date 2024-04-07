import { useSelector } from "react-redux";
import { selectProductById, useDeleteProductMutation } from "./ProductApiSlice";
import { useState } from "react";

const Product = ({ productId }) => {
  const product = useSelector((state) => selectProductById(state, productId));

  const [delProductId, setDelProductId] = useState("");

  const [deleteProduct, { isLoading, isSuccess, isError, error }] =
    useDeleteProductMutation();

  const handleDeleteProduct = async (e) => {
    e.preventDefault();
    setDelProductId(product.Id);
    await deleteProduct({ delProductId });
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
              <div className="text-sm opacity-50">nickname</div>
            </div>
          </div>
        </td>
        <td>{product.category}</td>
        <td>₱ {product.price}.00</td>
        <td className="flex gap-3">
          <button className="btn btn-primary bg-green-500 text-white">
            MODIFY
          </button>
          <button
            className="btn btn-primary bg-red-600 text-white"
            onClick={handleDeleteProduct}
          >
            DELETE
          </button>
        </td>
      </tr>
    );
  } else return null;
};

export default Product;
