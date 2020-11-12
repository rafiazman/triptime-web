/** @format */

import React from 'react';
import formStyles from './landing-slide.module.scss';
import styles from './landing-preview.module.css';
import scrollStyle from './snap-scroll.module.css';
import PropTypes from 'prop-types';
import Router from "next/router";

class LandingSlide extends React.Component {
  render() {
    const image = this.props.image;
    const title = this.props.title;
    const alignLeft = this.props.alignLeft;
    const description = this.props.description;

    return (
      <div className={scrollStyle['slide']}>
        <div className={alignLeft ? styles.containerLeft : styles.containerRight}>
          <div className={this.props.isTitleSlide ? styles.logo : styles.preview}>
            <img src={image} alt={title} />
          </div>
          <div className={alignLeft ? styles.introLeft : styles.introRight}>
            <div>
              <h1>{title}</h1>
              <div>{description}</div>

              <form
                className={formStyles.form}
                onSubmit={e => {
                  e.preventDefault();
                  // checkEmailOccupied(userEmail);
                  Router.push('/signup');
                }}
              >
                <input
                  type='email'
                  placeholder='Enter your email'
                  // onChange={handleEmailInput}
                  // value={userEmail}
                  required={true}
                />
                <button type='submit' className={styles.enabledLink}>
                  Join Today - It&apos;s Free!
                </button>
              </form>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

LandingSlide.propTypes = {
  isTitleSlide: PropTypes.bool,
  image: PropTypes.string,
  alignLeft: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default LandingSlide;
