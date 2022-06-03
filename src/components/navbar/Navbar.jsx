import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useContext, useState } from "react";
import "./navbar.scss";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { dispatch } = useContext(AuthContext);
  const history = useHistory();

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const logout = () => {
    localStorage.clear();
    history.push("/");
    window.location.reload();
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <Link to="/" className="link">
            <span>Homepage</span>
          </Link>
          <Link to="/series" className="link">
            <span className="navbarmainLinks">Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span className="navbarmainLinks">Movies</span>
          </Link>
        </div>
        <div className="right">
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span onClick={logout}>Logout</span>
              {/* <span onClick={() => dispatch(logout())}>Logout</span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
