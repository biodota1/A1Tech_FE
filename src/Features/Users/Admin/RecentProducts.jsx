import React from "react";
import { useSelector } from "react-redux";
import { selectProductById } from "./AdminProducts/ProductApiSlice";

const RecentProducts = ({ productId }) => {
  const product = useSelector((state) => selectProductById(state, productId));

  if (product) {
    return (
      <tr>
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
              <div className="text-sm opacity-50">{product.category}</div>
            </div>
          </div>
        </td>

        <td></td>
        <th>
          <button className="btn btn-ghost btn-xs">₱{product.price}.00</button>
        </th>
      </tr>
    );
  } else return null;
};

export default RecentProducts;
