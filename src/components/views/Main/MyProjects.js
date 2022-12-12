import InfoIcon from '../../../images/info-icon.png'
import Tippy from "@tippyjs/react";

import '../../../styles/Components/myProjects.scss'

const MyProjects = () => (
  <div>
    <h2 className="subHeader">My projects</h2>

    <ul>
      <li className='projects-item'>
        <a
            rel="noreferrer"
            target="_blank"
            href="https://app.nimbusplatform.io/"
        >
          app.nimbusplatform.io
        </a>
        <Tippy content={<span className='tooltip-text'>[team project, React, Solidity]</span>}>
          <div className='tooltip'>
            <img src={InfoIcon} alt='additional-info-img' className='additional-info-img'/>
          </div>
        </Tippy>
      </li>
      <li className='projects-item'>
        <a
            rel="noreferrer"
            target="_blank"
            href="https://nft-marketplace.ioalabs.com/"
        >
          nft-marketplace
        </a>
        <Tippy content={<span className='tooltip-text'>[team project, React, Solidity]</span>}>
          <div className='tooltip'>
            <img src={InfoIcon} alt='additional-info-img' className='additional-info-img'/>
          </div>
        </Tippy>
      </li>
      <li className='projects-item'>
        <a
            rel="noreferrer"
            target="_blank"
            href="https://land.nimbusplatform.io/"
        >
          land.nimbusplatform.io
        </a>
        <Tippy content={<span className='tooltip-text'>[team project, React, Solidity]</span>}>
          <div className='tooltip'>
            <img src={InfoIcon} alt='additional-info-img' className='additional-info-img'/>
          </div>
        </Tippy>
      </li>
      <li className='projects-item'>
        <a
            rel="noreferrer"
            target="_blank"
            href="https://jupiterexchange.com/"
        >
          jupiterexchange.com
        </a>
        <Tippy content={<span className='tooltip-text'>[team project, html, css, js]</span>}>
          <div className='tooltip'>
            <img src={InfoIcon} alt='additional-info-img' className='additional-info-img'/>
          </div>
        </Tippy>
      </li>
      <li className='projects-item'>
        <a
            rel="noreferrer"
            target="_blank"
            href="https://nimbusplatform.io/"
        >
          nimbusplatform
        </a>
        <Tippy content={<span className='tooltip-text'>[team project, html, js, css]</span>}>
          <div className='tooltip'>
            <img src={InfoIcon} alt='additional-info-img' className='additional-info-img'/>
          </div>
        </Tippy>
      </li>
      <li className='projects-item'>
        <a
            rel="noreferrer"
            target="_blank"
            href="https://leader.nimbusplatform.io/"
        >
          leader.nimbusplatform.io
        </a>
        <Tippy content={<span className='tooltip-text'>[team project, React, Solidity]</span>}>
          <div className='tooltip'>
            <img src={InfoIcon} alt='additional-info-img' className='additional-info-img'/>
          </div>
        </Tippy>
      </li>
      <li className='projects-item'>
        <a
            rel="noreferrer"
            target="_blank"
            href="https://goldenark.com/"
        >
          goldenark
        </a>
        <Tippy content={<span className='tooltip-text'>[team project, React, html, css, js]</span>}>
          <div className='tooltip'>
            <img src={InfoIcon} alt='additional-info-img' className='additional-info-img'/>
          </div>
        </Tippy>
      </li>
      <li className='projects-item'>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://pavelbulaienko.github.io/goit-react-hw-09-phonebook/"
        >
          PhoneBook (with registration)
        </a>
        <Tippy content={<span className='tooltip-text'>[solo project, React]</span>}>
          <div className='tooltip'>
            <img src={InfoIcon} alt='additional-info-img' className='additional-info-img'/>
          </div>
        </Tippy>
      </li>
      <li className='projects-item'>
        <a rel="noreferrer" target="_blank" href="https://optommodno.com">
          optommodno
        </a>
        <Tippy content={<span className='tooltip-text'>[team project, JS, Wordpress, PHP]</span>}>
          <div className='tooltip'>
            <img src={InfoIcon} alt='additional-info-img' className='additional-info-img'/>
          </div>
        </Tippy>
      </li>
      <li className='projects-item'>
        <a rel="noreferrer" target="_blank" href="http://fermatastudio.com.ua/">
          fermatastudio
        </a>
        <Tippy content={<span className='tooltip-text'>[team project, JS, Wordpress, PHP]</span>}>
          <div className='tooltip'>
            <img src={InfoIcon} alt='additional-info-img' className='additional-info-img'/>
          </div>
        </Tippy>
      </li>
      <li className='projects-item'>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://pavelbulaienko.github.io/goit-markup-hw-08/"
        >
          https://pavelbulaienko.github.io/goit-markup-hw-08/
        </a>
        <Tippy content={<span className='tooltip-text'>[solo project, HTML5, CSS3]</span>}>
          <div className='tooltip'>
            <img src={InfoIcon} alt='additional-info-img' className='additional-info-img'/>
          </div>
        </Tippy>
      </li>
      <li className='projects-item'>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://goodluckmister.github.io/team_4-project/"
        >
          https://goodluckmister.github.io/team_4-project/
        </a>
        <Tippy content={<span className='tooltip-text'>[team project, HTML5, CSS3]</span>}>
          <div className='tooltip'>
            <img src={InfoIcon} alt='additional-info-img' className='additional-info-img'/>
          </div>
        </Tippy>
      </li>
    </ul>
  </div>
);

export default MyProjects;
