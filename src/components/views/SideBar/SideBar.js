import "../../../styles/SideBar/SideBar.scss";
import myPhoto from "../../../images/myPhoto.JPG";
import AboutMe from "./AboutMe";
import Contacts from "./Contacts";

const SideBar = () => (
  <div className="sidebarContainer">
    <img className="myPhoto" src={myPhoto} alt="myPhoto" />
    <Contacts />
    <AboutMe />
  </div>
);

export default SideBar;
