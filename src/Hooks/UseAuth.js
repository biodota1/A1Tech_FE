import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { selectCurrentToken } from "../Features/Auth/AuthSlice";

const useAuth = () => {
  const token = useSelector(selectCurrentToken);
  let isMember = false;
  let isAdmin = false;
  let status = "";

  if (token) {
    const decoded = jwtDecode(token);
    const { username, roles } = decoded.UserInfo;

    isMember = roles.includes("Member");
    isAdmin = roles.includes("Admin");

    if (isMember) status = "Member";
    if (isAdmin) status = "Admin";

    return { username, roles, status, isMember, isAdmin };
  }
  console.log(status);
  return { username: "", roles: [], isMember, isAdmin, status };
};
export default useAuth;
