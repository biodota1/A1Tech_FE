import React from "react";
import { selectHistoryById } from "./History/HistoryApiSlice";
import { useSelector } from "react-redux";
import { formatDistanceToNow, parseISO } from "date-fns";

const ActiveUsers = ({ historyId }) => {
  const history = useSelector((state) => selectHistoryById(state, historyId));

  if (history) {
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
          </div>
        </td>

        <td>
          <div className="font-bold">{history.details}</div>
        </td>
        <td>
          <div className="font-bold">{history.action}</div>
        </td>
        <td>
          {formatDistanceToNow(parseISO(history.date), { addSuffix: true })}
        </td>
      </tr>
    );
  } else return null;
};

export default ActiveUsers;
