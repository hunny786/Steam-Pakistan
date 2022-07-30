import {useRef} from "react";
import Link from "next/link";

const AdminSideNavSchool = () => {
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
            <div className="links_name">School Reports</div>
          </a>
          <span className="tooltip">School Reports</span>
        </li>
        <li>
          <Link href='/dashboard/schoolSecondLevel' passHref>
            <a>
              <img src="../../icons/nav-creatreport.png" />
              <img className="active" src="../../icons/nav-creatreport-active.png" />
              <div className="links_name">Create Report</div>
            </a>
          </Link>
          <span className="tooltip">Create Report</span>
        </li>
      </ul>
    </div>
  );
};

export default AdminSideNavSchool;
