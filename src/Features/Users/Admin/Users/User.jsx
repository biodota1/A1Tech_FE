import { useSelector } from "react-redux";
import { selectUserById } from "../UserApiSlice";

const User = ({ userId }) => {
  const user = useSelector((state) => selectUserById(state, userId));

  if (user) {
    return (
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox border-black" />
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
          </div>
        </td>
        <td>
          <div>
            <div className="font-bold">{user.username}</div>
            <div className="text-sm opacity-50">nickname</div>
          </div>
        </td>
        <td>{user.email}</td>
        <td>{user.roles}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    );
  } else return null;
};

export default User;
