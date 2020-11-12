/** @format */

import React from 'react';
import LandingSlide from './LandingSlide';
import scrollStyle from './snap-scroll.module.css';
import Footer from '../Footer/Footer';

class VisitorLandingPage extends React.Component {
  render() {
    return (
      <div dir='ltr'>
        <LandingSlide
          alignLeft={true}
          image={'/img/bw_logo_trans.png'}
          title={'TripTime!'}
          description={'Plan a trip together, live.'}
          isTitleSlide={true}
        />

        <LandingSlide
          alignLeft={false}
          image={'/img/feature-preview/map.png'}
          title={'Plot'}
          description={'Pin new destinations on the map and your friends will see them immediately.'}
          isTitleSlide={false}
        />

        <LandingSlide
          alignLeft={true}
          image={'/img/feature-preview/chat.png'}
          title={'Collaborate'}
          description={'Chat with your friends as you plan your next trip together.'}
          isTitleSlide={false}
        />

        <LandingSlide
          alignLeft={false}
          image={'/img/feature-preview/timeline.jpg'}
          title={'Review'}
          description={'Review where you are planning to go at a glance in a timeline.'}
          isTitleSlide={false}
        />

        <Footer />
      </div>
    );
  }
}

export default VisitorLandingPage;
