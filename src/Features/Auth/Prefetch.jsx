import { store } from "../../App/Store";
import { productsApiSlice } from "../Users/Admin/AdminProducts/ProductApiSlice";
import { historyApiSlice } from "../Users/Admin/History/HistoryApiSlice";
import { usersApiSlice } from "../Users/Admin/UserApiSlice";

import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const Prefetch = () => {
  useEffect(() => {
    console.log("subscribing");
    const products = store.dispatch(
      productsApiSlice.endpoints.getProducts.initiate()
    );
    const users = store.dispatch(usersApiSlice.endpoints.getUsers.initiate());

    const history = store.dispatch(
      historyApiSlice.endpoints.getHistory.initiate()
    );

    return () => {
      console.log("unsubscribing");
      products.unsubscribe();
      users.unsubscribe();
      history.unsubscribe();
    };
  }, []);

  return <Outlet />;
};
export default Prefetch;
