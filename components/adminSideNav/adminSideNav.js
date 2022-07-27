import { useEffect, useRef } from "react";

const AdminSideNav = () => {
    const sidebar = null;
    const ref = useRef(null);

  const menuBtnChange = () => {
    if (sidebar.classList.contains("open")) {
        document.querySelector('#btn').classList.replace("bx-menu", "bx-menu-alt-right"); //replacing the iocns class
    } else {
        document.querySelector('#btn').classList.replace("bx-menu-alt-right", "bx-menu"); //replacing the iocns class
    }
  };

  const onCloseBtn = () => {
    sidebar = ref.current; // corresponding DOM node
    sidebar.classList.toggle("open");
    menuBtnChange();
};
  return (
    <div ref={ref} className="sidebar">
      <div className="logo-details">
        <a href="./"><img className="icon" src="../../images/logo-web-small.png" /></a>
        <i className="bx bx-menu" id="btn" onClick={onCloseBtn}></i>
      </div>
      <ul className="nav-list">
        <li>
          <a href="#">
            <img src="../../icons/nav-reports.png" />
            <img className="active" src="../../icons/nav-reports-active.png" />
            <span className="links_name">Dashboard</span>
          </a>
          <span className="tooltip">Dashboard</span>
        </li>
        <li>
          <a href="#">
            <img src="../../icons/nav-schools.png" />
            <img className="active" src="../../icons/nav-schools-active.png" />
            <span className="links_name">User</span>
          </a>
          <span className="tooltip">User</span>
        </li>
        <li>
          <a href="#">
            <img src="../../icons/nav-dashboard.png" />
            <img className="active" src="../../icons/nav-dashboard-active.png" />
            <span className="links_name">Messages</span>
          </a>
          <span className="tooltip">Messages</span>
        </li>
        <li>
          <a href="#">
            <img src="../../icons/nav-video.png" />
            <img className="active" src="../../icons/nav-video-active.png" />
            <span className="links_name">Analytics</span>
          </a>
          <span className="tooltip">Analytics</span>
        </li>
        <li>
          <a href="#">
            <img src="../../icons/nav-gudie.png" />
            <img className="active" src="../../icons/nav-gudie-active.png" />
            <span className="links_name">File Manager</span>
          </a>
          <span className="tooltip">Files</span>
        </li>
        <li>
          <a href="#">
            <img src="../../icons/nav-pedago.png" />
            <img className="active" src="../../icons/nav-pedago-active.png" />
            <span className="links_name">Order</span>
          </a>
          <span className="tooltip">Order</span>
        </li>
        <li>
          <a href="#">
            <img src="../../icons/nav-settings.png" />
            <img className="active" src="../../icons/nav-settings-active.png" />
            <span className="links_name">Saved</span>
          </a>
          <span className="tooltip">Saved</span>
        </li>
      </ul>
    </div>
  );
};

export default AdminSideNav;
