import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import { withRouter } from "react-router-dom";

class NavList extends Component {
  render() {
    // <div
    //   className="col-12"
    //   style={{
    //     background: "#212629",
    //     color: "#fff",
    //     //position: "fixed",
    //     top: 0,
    //     left: 0,
    //     right: 0,
    //     padding: 10
    //   }}
    // >
    //   <div className="col-2" style={{ textAlign: "center", padding: 6 }}>
    //     <Link style={{ color: "#fff" }} className="" to={`/home`}>
    //       Sekail
    //     </Link>
    //   </div>

    //   <div className=" col-10 ">
    //     <div className=" col-12">
    //       {!this.props.user ? (
    //         <div className="col-6">
    //           <div
    //             className="col-6"
    //             style={{ textAlign: "center", padding: 5 }}
    //           >
    //             <NavLink
    //               style={{ color: "#fff", textDecoration: "none" }}
    //               className=""
    //               to={`/login`}
    //             >
    //               Login
    //             </NavLink>
    //           </div>
    //           <div
    //             className="col-6"
    //             style={{ textAlign: "center", padding: 5 }}
    //           >
    //             <NavLink
    //               style={{ color: "#fff", textDecoration: "none" }}
    //               className=""
    //               to={`/signup`}
    //             >
    //               Signup
    //             </NavLink>
    //           </div>
    //         </div>
    //       ) : (
    //         <>
    //           <div
    //             className="col-12"
    //             style={{ textAlign: "center", padding: 5 }}
    //           >
    //             <Link
    //               style={{ color: "#fff" }}
    //               className="col-3"
    //               to={`/home`}
    //             >
    //               {this.props.user.username}
    //             </Link>
    //             <NavLink
    //               style={{ color: "#fff", textDecoration: "none" }}
    //               className="col-3"
    //               to={`/history`}
    //             >
    //               History
    //             </NavLink>
    //             <NavLink
    //               style={{ color: "#fff", textDecoration: "none" }}
    //               className="col-3"
    //               to={`/add`}
    //             >
    //               Add Device
    //             </NavLink>
    //             <NavLink
    //               style={{ color: "#fff", textDecoration: "none" }}
    //               className="col-2"
    //               to={`/search`}
    //             >
    //               Search
    //             </NavLink>

    //             <button
    //               onClick={() => this.props.logout(this.props.history)}
    //               className="col-1"
    //               style={{}}
    //             >
    //               logout
    //             </button>
    //           </div>
    //         </>
    //       )}
    //     </div>
    //   </div>
    // </div>

    return (
      //   <div id="wrapper">
      <div
        className="col-6"
        style={{
          color: "#fff",
          position: "fixed",
          top: 56,
          left: 0,
          right: 0,
          padding: 0
        }}
      >
        <ul className="sidebar navbar-nav">
          <li className="nav-item active">
            <NavLink
              className="nav-link"
              style={{
                color: "#fff",
                textDecoration: "none",

                padding: 18
              }}
              className=""
              to={`/home`}
            >
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              style={{
                color: "#fff",
                textDecoration: "none",

                padding: 18
              }}
              className=""
              to={`/add`}
            >
              Add Device
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              style={{
                color: "#fff",
                textDecoration: "none",

                padding: 18
              }}
              className=""
              to={`/history`}
            >
              History
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              style={{
                color: "#fff",
                textDecoration: "none",

                padding: 18
              }}
              className=""
              to={`/search`}
            >
              Search
            </NavLink>
          </li>
          <hr />
          <li className="nav-item">
            <a className="nav-link" href="/">
              <span>History</span>
            </a>
          </li>

          <li className="nav-item" style={{ right: -18 }}>
            <a
              className="nav-link"
              onClick={() => this.props.logout(this.props.history)}
              className=""
            >
              <span>Logout</span>
            </a>
          </li>
          <hr />
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};
const mapDispatchToProps = dispatch => ({
  logout: history => dispatch(actionCreators.logout(history))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NavList)
);
