const WorkExperience = () => (
  <div>
    <h2 className="subHeader">Work experience</h2>
    <ul>
      <li>
        <h3>Front-end Developer</h3>
        <p>
          Company:
          <a
            rel="noreferrer"
            target="_blank"
            href="https://terrapromo.digital/"
          >
            {" "}
            Terrapromo
          </a>
        </p>
        <p>
          Website development on bootstrap • HTML / CSS • PHP • Figma •
          JavaScript
        </p>
        <small className="small">March 2021 - June 2021</small>
      </li>
      <li>
        <h3>Customer support</h3>
        <p>
          Company:
          <a rel="noreferrer" target="_blank" href="https://glovoapp.com/">
            {" "}
            Glovo
          </a>
        </p>
        <p>Consult clients with technical and organizational problems</p>
        <small className="small">July 2019 - October 2019</small>
      </li>
    </ul>
  </div>
);

export default WorkExperience;
