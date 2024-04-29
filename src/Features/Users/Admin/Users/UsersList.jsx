import React from "react";
import User from "./User";
import { useGetUsersQuery } from "../UserApiSlice";
import deleteIcon from "../../../../assets/trash-bin.png";

const UsersList = () => {
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUsersQuery("usersList", {
    pollingInterval: 6000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });

  let content;

  if (isLoading) content = <p>Loading...</p>;

  if (isError) {
    content = <p>{error?.data?.message}</p>;
  }

  if (isSuccess) {
    const { ids } = users;

    const tableContent = ids?.length
      ? ids.map((userId) => <User key={userId} userId={userId} />)
      : null;

    content = (
      <div className="overflow-x-auto bg-white p-10 min-h-[100vh] mt-[128px]">
        {/* SEARCH */}
        <div className="flex items-center gap-1">
          <input
            type="text"
            placeholder="Search for user"
            className="input border-green-400 w-1/4 bg-slate-200"
          />
          <div className="dropdown w-1/4">
            <div
              tabIndex={0}
              role="button"
              className="btn bg-slate-800 text-green-400 m-1 w-full"
            >
              All Categories
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
          <div className="dropdown w-1/4">
            <div
              tabIndex={0}
              role="button"
              className="btn bg-slate-800 text-green-400 m-1 w-full"
            >
              All User
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
          <button className="btn mx-1 bg-slate-800 text-green-400">
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
          </button>
          <button className="btn bg-slate-800 text-green-400">
            Clear Search
          </button>
          <button className="btn bg-slate-800 text-green-400">
            <img className="h-1/2" src={deleteIcon} alt="" />
          </button>
        </div>
        {/* SEARCH */}
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox border-black" />
                </label>
              </th>
              <th className="text-black font-bold">Profile</th>
              <th className="text-black font-bold">Name</th>
              <th className="text-black font-bold">Email</th>
              <th className="text-black font-bold">Role</th>
            </tr>
          </thead>
          <tbody>{tableContent}</tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th></th>
              <th className="text-black font-bold">Profile</th>
              <th className="text-black font-bold">Name</th>
              <th className="text-black font-bold">Email</th>
              <th className="text-black font-bold">Role</th>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
  return content;
};

export default UsersList;
