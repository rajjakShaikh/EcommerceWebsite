import React, { useEffect, useState } from "react";
import "./headingStyle.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import Table from "react-bootstrap/Table";
import { DLT } from "../Redux/actions/action";
import { useAuth0 } from "@auth0/auth0-react";

import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Menu from "@mui/material/Menu";

const Header = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  const { loginWithRedirect } = useAuth0();
  const { logout, isAuthenticated, user } = useAuth0();

  const [price, setPrice] = useState(0);
  // console.log(price);

  const getdata = useSelector((state) => state.cartreducer.carts);
  // console.log(getdata);

  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dlt = (id) => {
    dispatch(DLT(id));
  };

  const total = () => {
    let price = 0;
    getdata.map((ele, k) => {
      price = ele.price * ele.qnty + price;
    });
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [total]);

  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>S</span>hoes
            <span>H</span>ub
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Men">Men</NavLink>
            </li>
            <li>
              <NavLink to="/Women">Women</NavLink>
            </li>
            <li>
              <NavLink to="/Kids">Kids</NavLink>
            </li>
            <li>
              <NavLink to="/About">about</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">contact</NavLink>
            </li>
            

            {isAuthenticated && <h1>{user.name} </h1>}

            {isAuthenticated ? (
              <li>
                <button
                  className="logbtn"
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Log Out
                </button>
              </li>
            ) : (
              <li>
                <button className="logbtn" onClick={() => loginWithRedirect()}>
                  Log In
                </button>
              </li>
            )}

            <div>
              <Badge
                badgeContent={getdata.length}
                color="primary"
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <ShoppingCartIcon sx={{ fontSize: 30 }} />
              </Badge>
            </div>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://instagram.com/_rahilll_77?igshid=YmMyMTA2M2Y="
                target="_rahill"
              >
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/_rahilll_77?igshid=YmMyMTA2M2Y="
                target="_rahill"
              >
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/_rahilll_77?igshid=YmMyMTA2M2Y="
                target="_rahill"
              >
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {getdata.length ? (
            <div
              className="card_details"
              style={{ width: "24rem", padding: 10 }}
            >
              <Table>
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>Shoes Name</th>
                  </tr>
                </thead>
                <tbody>
                  {getdata.map((e) => {
                    return (
                      <>
                        <tr>
                          <td>
                            <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                              <img
                                src={e.img}
                                style={{ width: "7rem", height: "6rem" }}
                                alt=""
                              />
                            </NavLink>
                          </td>
                          <td>
                            <h4>{e.title}</h4>
                            <h4>Price : ₹{e.price}</h4>
                            <h4>Quantity : {e.qnty}</h4>
                            <p
                              style={{
                                color: "red",
                                fontSize: 20,
                                cursor: "pointer",
                              }}
                              onClick={() => dlt(e.id)}
                            >
                              <i className="fas fa-trash"></i>
                            </p>
                          </td>

                          <td
                            className="mt-5"
                            style={{
                              color: "red",
                              fontSize: 20,
                              cursor: "pointer",
                            }}
                            onClick={() => dlt(e.id)}
                          >
                            <i className="fas fa-trash largetrash"></i>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                  <h4 className="text-center">Total :₹{price}</h4>
                </tbody>
              </Table>
            </div>
          ) : (
            <div
              className="card_details d-flex justify-content-center align-items-center"
              style={{ width: "24rem", padding: 10, position: "relative" }}
            >
              <i
                className="fas fa-close smallclose"
                onClick={handleClose}
                style={{
                  position: "absolute",
                  top: 2,
                  right: 20,
                  fontSize: 23,
                  cursor: "pointer",
                }}
              ></i>
              <p style={{ fontSize: 18 }}>Your carts is empty</p>
              <img
                src="cart.gif"
                alt=""
                className="emptycart_img"
                style={{ width: "9rem", padding: 10 }}
              />
            </div>
          )}
        </Menu>
      </nav>
    </>
  );
};
export default Header;
