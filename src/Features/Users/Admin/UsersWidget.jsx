import React from "react";
import { useGetUsersQuery } from "./UserApiSlice";
import icon from "../../../assets/profile.png";

export default function UsersWidget() {
  const { data: users, isSuccess } = useGetUsersQuery(undefined, {
    pollingInterval: 6000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });

  let numOfUsers;

  if (isSuccess) {
    const { ids } = users;
    numOfUsers = ids.length;
  }
  return (
    <div className="flex bg-slate-100 h-[120px] w-[400px] rounded-lg p-5">
      <img className="h-full" src={icon} alt="" />
      <div className="pl-6">
        <p className="text-lg font-bold text-green-400">Total Users</p>
        <p className="text-2xl text-center font-bold text-slate-800">
          {numOfUsers}
        </p>
        <p>As of this month</p>
      </div>
    </div>
  );
}
