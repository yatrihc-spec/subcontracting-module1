import { useState, useEffect } from "react";

import {
  FiBell,
  FiMessageSquare,
  FiUser,
  FiChevronDown,
  FiMenu,
  FiX,
  FiHome,
  FiBox,
  FiUsers,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";

import { NavLink, Link } from "react-router-dom";

import "./navbar.css";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [messageOpen, setMessageOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  const closeMobile = () => {
    setMobileOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setNotificationOpen(false);
        setMessageOpen(false);
        setAccountOpen(false);
        setMobileOpen(false);
      }
    };

    const handleClickOutside = (e) => {
      if (!e.target.closest('.navbar-right')) {
        setNotificationOpen(false);
        setMessageOpen(false);
        setAccountOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className="navbar">

      <div className="navbar-inner">



        {/* DESKTOP NAV */}
        <nav className="desktop-nav">





          <NavLink
            to="/subcontractor"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <FiUsers />
            <span>Subcontractor</span>
          </NavLink>
          <NavLink
            to="/crome"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <FiHome />
            <span>Crome</span>
          </NavLink>
          <NavLink
            to="/subcontracting"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <FiBox />
            <span>Subcontracting</span>
          </NavLink>
        </nav>


        {/* RIGHT SIDE */}
        <div className="navbar-right">

          {/* NOTIFICATIONS */}
          <div className="nav-dropdown">

            <button
              className="icon-button"
              onClick={() => {
                setNotificationOpen(!notificationOpen);
                setMessageOpen(false);
                setAccountOpen(false);
              }}
            >
              <FiBell />
              <span className="notification-dot"></span>
            </button>

            {notificationOpen && (
              <div className="dropdown-panel notification-panel">

                <div className="dropdown-title">
                  Notifications
                </div>

                <div className="notification-item">
                  <div className="notification-icon blue">
                    <FiBox />
                  </div>

                  <div>
                    <strong>New order received</strong>
                    <small>2 minutes ago</small>
                  </div>
                </div>

                <div className="notification-item">
                  <div className="notification-icon green">
                    <FiUsers />
                  </div>

                  <div>
                    <strong>New subcontractor added</strong>
                    <small>20 minutes ago</small>
                  </div>
                </div>

                <div className="notification-item">
                  <div className="notification-icon orange">
                    <FiBell />
                  </div>

                  <div>
                    <strong>Order needs attention</strong>
                    <small>1 hour ago</small>
                  </div>
                </div>

              </div>
            )}

          </div>


          {/* MESSAGES */}
          <div className="nav-dropdown">

            <button
              className="icon-button"
              onClick={() => {
                setMessageOpen(!messageOpen);
                setNotificationOpen(false);
                setAccountOpen(false);
              }}
            >
              <FiMessageSquare />
            </button>

            {messageOpen && (
              <div className="dropdown-panel message-panel">

                <div className="dropdown-title">
                  Messages
                </div>

                <div className="message-item">
                  <div className="message-avatar">
                    RK
                  </div>

                  <div>
                    <strong>Rahul Kumar</strong>
                    <small>
                      Order update required
                    </small>
                  </div>
                </div>

                <div className="message-item">
                  <div className="message-avatar">
                    AM
                  </div>

                  <div>
                    <strong>Amit Mehta</strong>
                    <small>
                      Production completed
                    </small>
                  </div>
                </div>

              </div>
            )}

          </div>


          {/* ACCOUNT */}
          <div className="account-dropdown">

            <button
              className="account-button"
              onClick={() => {
                setAccountOpen(!accountOpen);
                setNotificationOpen(false);
                setMessageOpen(false);
              }}
            >

              <div className="account-avatar">
                Y
              </div>

              <div className="account-info">
                <strong>Yatri</strong>
                <small>Admin</small>
              </div>

              <FiChevronDown />

            </button>

            {accountOpen && (
              <div className="dropdown-panel account-panel">

                <div className="account-header">

                  <div className="account-avatar large">
                    Y
                  </div>

                  <div>
                    <strong>Yatri</strong>
                    <small>Administrator</small>
                  </div>

                </div>

                <div className="account-menu">

                  <button>
                    <FiUser />
                    Profile
                  </button>

                  <button>
                    <FiSettings />
                    Settings
                  </button>

                  <button className="logout">
                    <FiLogOut />
                    Logout
                  </button>

                </div>

              </div>
            )}

          </div>


          {/* MOBILE BUTTON */}
          <button
            className="mobile-menu-button"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>

        </div>

      </div>


      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="mobile-nav">

          <NavLink
            to="/crome"
            onClick={closeMobile}
            className={({ isActive }) =>
              isActive
                ? "mobile-nav-link active"
                : "mobile-nav-link"
            }
          >
            <FiHome />
            Crome
          </NavLink>

          <NavLink
            to="/subcontracting"
            onClick={closeMobile}
            className={({ isActive }) =>
              isActive
                ? "mobile-nav-link active"
                : "mobile-nav-link"
            }
          >
            <FiBox />
            Subcontracting
          </NavLink>

          <NavLink
            to="/subcontractor"
            onClick={closeMobile}
            className={({ isActive }) =>
              isActive
                ? "mobile-nav-link active"
                : "mobile-nav-link"
            }
          >
            <FiUsers />
            Subcontractor
          </NavLink>

        </div>
      )}

    </header>
  );
}

export default Navbar;