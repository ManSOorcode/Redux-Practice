import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../store/indexRedux";
import classes from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.isAuthenticated.isAuthenticated);

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(loginActions.logout());
  };
  const navigation = (
    <nav>
      <ul>
        <li>
          <a href="/">My Products</a>
        </li>
        <li>
          <a href="/">My Sales</a>
        </li>
        <li>
          <button onClick={logoutHandler}>Logout</button>
        </li>
      </ul>
    </nav>
  );
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && navigation}
    </header>
  );
};

export default Header;
