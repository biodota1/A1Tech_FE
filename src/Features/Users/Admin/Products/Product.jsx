import { useSelector } from "react-redux";
import { selectProductById } from "./ProductApiSlice";

const Product = ({ productId }) => {
  const product = useSelector((state) => selectProductById(state, productId));

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
        <th>
          <button className="btn btn-primary">DELETE</button>
        </th>
      </tr>
    );
  } else return null;
};

export default Product;
