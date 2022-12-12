import "../../../styles/SideBar/AboutMe.scss";

const AboutMe = () => (
  <div className="aboutMeContainer">
    <h2 className="subHeader">About me</h2>
    <div className="aboutMeContent">
      <h3>Summary</h3>
      <p>
        I have 2 years of commercial experience in
        front-end development. I want to create and develop commercial
        applications coded by React.js.
        My main goal is to develop and become better specialist
      </p>
      <h3>Techskills</h3>
      <ul>
        <li>React (router, redux, hooks, rest API)</li>
        <li>JavaScript</li>
        <li>Web3.js, Ethers.js</li>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Webpack</li>
        <li>Bootstrap</li>
        <li>GIT</li>
        <li>Adaptive and responsive coding</li>
      </ul>

      <h3>Soft skills</h3>
      <ul>
        <li>Scrum</li>
        <li>Agile</li>
        <li>GTD</li>
        <li>Teamwork</li>
        <li>Perseverance</li>
        <li>Desire to develop</li>
      </ul>
    </div>
  </div>
);

export default AboutMe;
