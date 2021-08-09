import MyProjects from "./MyProjects";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import AdditionalEducation from "./AdditionalEducation";
import "../../../styles/Main/Main.scss";

const Main = () => (
  <div className="mainContainer">
    <MyProjects />
    <WorkExperience />
    <Education />
    <AdditionalEducation />
  </div>
);

export default Main;
