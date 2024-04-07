import { store } from "../../App/Store";
import { productsApiSlice } from "../Users/Admin/AdminProducts/ProductApiSlice";
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

    return () => {
      console.log("unsubscribing");
      products.unsubscribe();
      users.unsubscribe();
    };
  }, []);

  return <Outlet />;
};
export default Prefetch;
