/** @format */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons';

import styles from './footer.module.scss';

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className={`${styles.footer} flex justify-center`}>
          <div className={`${styles.links} flex flex-column`}>
            <div className={`${styles.title}`}>TripTime</div>
            <a href='https://github.com/tantigers/TripTime'>Home</a>
            <a href='https://github.com/tantigers/TripTime'>Features</a>
            <a href='https://github.com/tantigers/TripTime'>About Us</a>
            <a href='https://github.com/tantigers/TripTime'>Code on Github</a>
          </div>

          <div className={`${styles['follow-links']} flex flex-column`}>
            <div className={`${styles.title}`}>Follow Us</div>

            <div className="icons flex">
              <a href='https://github.com/tantigers'>
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href='https://www.youtube.com/'>
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href='https://www.facebook.com/'>
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>
          </div>

          <div className={`${styles['logo']} flex flex-column`}>
            <div className={`${styles.container} flex`}>
              <img src='/img/logo.svg' alt='TripTime logo' />
              <span>TripTime</span>
            </div>

            <div className={styles.copyright}>Developed by Rafi Azman, Anran Niu and Shakeel Khan at the Univesity of Auckland</div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
