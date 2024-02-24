import React from "react";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import logo from "../../assets/logo.png";
import user from "../../assets/user.svg";
import "./sidebar.scss";
import { btnAnimation, textAnimation, textAnimationBottom } from "../constants";

const routes = [
  { title: "Home", icon: "fas-solid fa-house", path: "/" },
  { title: "Sales", icon: "chart-line", path: "/sales" },
  { title: "Costs", icon: "chart-column", path: "/costs" },
  { title: "Payments", icon: "wallet", path: "/payments" },
  { title: "Finances", icon: "chart-pie", path: "/finances" },
  { title: "Messages", icon: "envelope", path: "/messages" },
];

const bottomRoutes = [
  { title: "Settings", icon: "sliders", path: "/settings" },
  { title: "Support", icon: "phone-volume", path: "/support" },
];

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: true,
      activeMenuItem: 0,
    };
  }

  toggleSidebar = () => {
    this.setState((state) => ({ isOpened: !state.isOpened }));
  };

  goToRoute = (path, index) => {
    console.log(`going to "${path}"`);
    this.setState({ activeMenuItem: index });
  };

  render() {
    const { isOpened, activeMenuItem } = this.state;
    const containerClassnames = classnames("sidebar", { opened: isOpened });

    return (
      <motion.nav
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={containerClassnames}
      >
        <div className="sidebar__container">
          <div className="sidebar__wrapper">
            <motion.img
              variants={textAnimation}
              custom={1}
              className="sidebar__logo"
              src={logo}
              alt="TensorFlow logo"
            />
            <motion.span
              variants={textAnimation}
              custom={1}
              className={classnames("sidebar__title", { close: !isOpened })}
            >
              TensorFlow
            </motion.span>

            <motion.button
              variants={btnAnimation}
              custom={10}
              className={classnames("sidebar__toggle", { close: !isOpened })}
              onClick={this.toggleSidebar}
            >
              <FontAwesomeIcon icon={isOpened ? "angle-left" : "angle-right"} />
              <span className="tooltip__text-btn">SHRINK</span>
            </motion.button>
          </div>

          <ul className="menu">
            {routes.map((route, index) => (
              <motion.li
                variants={textAnimation}
                custom={index + 1}
                className={classnames("menu__item", {
                  active: activeMenuItem === index,
                })}
                key={route.title}
                onClick={() => this.goToRoute(route.path, index)}
              >
                <div className="menu__box">
                  <FontAwesomeIcon icon={route.icon} />
                  {!isOpened && (
                    <span className="tooltip__text">{route.title}</span>
                  )}

                  <span
                    className={classnames("menu__title", {
                      close: !isOpened,
                    })}
                  >
                    {route.title}
                  </span>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="sidebar__container-bottom">
          <ul className="menu">
            {bottomRoutes.map((route, index) => (
              <motion.li
                className={classnames("menu__item", {
                  active: activeMenuItem === routes.length + index,
                })}
                variants={textAnimationBottom}
                custom={bottomRoutes.length - index + 5}
                key={route.title}
                onClick={() =>
                  this.goToRoute(route.path, routes.length + index)
                }
              >
                <div className="menu__box">
                  <FontAwesomeIcon icon={route.icon} />
                  {!isOpened && (
                    <span className="tooltip__text">{route.title}</span>
                  )}
                  <span
                    className={classnames("menu__title", {
                      close: !isOpened,
                    })}
                  >
                    {route.title}
                  </span>
                </div>
              </motion.li>
            ))}
          </ul>
          <motion.button
            className={classnames("user", { close: !isOpened })}
            variants={textAnimationBottom}
            custom={2}
          >
            <div className="user__icon">
              <img src={user} alt="avatar user" />
            </div>
            <div className={classnames("user__box", { close: !isOpened })}>
              <span className="user__description">User Account</span>
              <p className="user__name">Mark T.</p>
            </div>
          </motion.button>
        </div>
      </motion.nav>
    );
  }
}
