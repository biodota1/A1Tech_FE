import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectHistoryById } from "./HistoryApiSlice";
import { formatDistanceToNow, parseISO } from "date-fns";

const History = ({ historyID, selected }) => {
  const history = useSelector((state) => selectHistoryById(state, historyID));
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (selected) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [selected]);

  const handleIsSelected = () => {
    setIsSelected(!isSelected);
  };

  if (history) {
    return (
      <tr>
        <th>
          <label>
            <input
              type="checkbox"
              className="checkbox border-black"
              checked={isSelected}
              onChange={handleIsSelected}
            />
          </label>
        </th>

        <td>
          <div>
            <div className="font-bold">{history.action}</div>
            <div className="text-sm opacity-50">{history.id}</div>
          </div>
        </td>
        <td>{history.actor}</td>
        <td>{history.details}</td>
        <td>{history.result}</td>
        <td>{new Date(history.date).toISOString().split("T")[0]}</td>
        <td>
          {formatDistanceToNow(parseISO(history.date), { addSuffix: true })}
        </td>
      </tr>
    );
  } else return null;
};

export default History;
