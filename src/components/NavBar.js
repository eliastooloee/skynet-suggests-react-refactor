import React from "react";
import { Link, withRouter } from "react-router-dom";

const Navbar = props => {
  const currentUser = props.currentUser;
  const loggedIn = !!props.currentUser.id;
  return (
    <div className="navbar">
      <Link to="/" className="item">
        <h2 className="ui header">
          <i className={`${props.icon} icon`} />
          <div className="navbar-title">SimpleMaps</div>
          <div className="sub-header">Cartography Doesn't Have to be Hard</div>
        </h2>
      </Link>
      <div className="right-menu">
        {/* <Link to="/mymaps" className="item">
          My Maps
        </Link> */}
        <Link to="/map" className="item" >
          New Map
        </Link>
        {loggedIn ? (
          <a className="item" href="/mymaps"> {currentUser.username}'s Maps</a>
        ) : null}
        {loggedIn ? (
          <a className="item" href="/login">
            <div
              onClick={() => {
                props.handleLogout();
                props.history.push("/login");
              }}
              className="ui primary button"
            >
              Sign Out
            </div>
          </a>
        ) : (
          <Link to="/login" className="item">
            <div className="ui primary button">Sign In</div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default withRouter(Navbar);