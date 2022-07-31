import {useRef} from "react";
import Link from "next/link";

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
          <Link href='http://localhost:3000/dashboard/' passHref>
            <a href="#">
              <img src="../../icons/nav-reports.png" />
              <img className="active" src="../../icons/nav-reports-active.png" />
              <div className="links_name">School Reports</div>
            </a>
          </Link>
        <span className="tooltip">School Reports</span>
        </li>
        <li>
          <Link href='http://localhost:3000/dashboard/schools' passHref>
            <a href="#">
              <img src="../../icons/nav-schools.png" />
              <img className="active" src="../../icons/nav-schools-active.png" />
              <div className="links_name">Schools</div>
            </a>
          </Link>
          <span className="tooltip">Schools</span>
        </li>
        <li>
          <Link href='http://localhost:3000/dashboard/summaryDashboard' passHref>
            <a href="#">
              <img src="../../icons/nav-dashboard.png" />
              <img className="active" src="../../icons/nav-dashboard-active.png" />
              <div className="links_name">Summary Dashboard</div>
            </a>
          </Link>
          <span className="tooltip">Summary Dashboard</span>
        </li>
        <li>
          <Link href='http://localhost:3000/dashboard/howToVideo' passHref>
            <a href="#">
              <img src="../../icons/nav-video.png" />
              <img className="active" src="../../icons/nav-video-active.png" />
              <div className="links_name">How to video</div>
            </a>
          </Link>
          <span className="tooltip">How to video</span>
        </li>
        <li>
          <Link href='http://localhost:3000/dashboard/howToGuide' passHref>
            <a href="#">
              <img src="../../icons/nav-gudie.png" />
              <img className="active" src="../../icons/nav-gudie-active.png" />
              <div className="links_name">How to guide</div>
            </a>
          </Link>
          <span className="tooltip">How to guide</span>
        </li>
        <li>
          <Link href='http://localhost:3000/dashboard/pedagogy' passHref>
            <a href="#">
              <img src="../../icons/nav-pedago.png" />
              <img className="active" src="../../icons/nav-pedago-active.png" />
              <div className="links_name">Pedagogy</div>
            </a>
          </Link>
          <span className="tooltip">Pedagogy</span>
        </li>
        <li>
          <Link href='http://localhost:3000/dashboard/settings' passHref>
            <a href="#">
              <img src="../../icons/nav-settings.png" />
              <img className="active" src="../../icons/nav-settings-active.png" />
              <div className="links_name">Settings</div>
            </a>
          </Link>
          <span className="tooltip">Settings</span>
        </li>
      </ul>
    </div>
  );
};

export default AdminSideNav;
