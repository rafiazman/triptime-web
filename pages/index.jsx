/** @format */
import React from 'react';
import { withSanctum } from "react-sanctum";
import Dashboard from '../components/dashboard/Dashboard';
import LandingSlide from "../components/LandingSlide/LandingSlide";

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { authenticated } = this.props;

    if (authenticated) {
      return <Dashboard name={"TODO: change this"} />;
    }

    return (
      <>
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
      </>
    );
  }
}

export default withSanctum(Index);
