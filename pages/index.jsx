/** @format */
import React from 'react';
import { withSanctum } from "react-sanctum";
import VisitorLandingPage from '../components/LandingSlide/VisitorLandingPage';
import Dashboard from '../components/dashboard/Dashboard';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { authenticated, user, signIn } = this.props;

    if (authenticated) {
      return <Dashboard name={user.name} />;
    }

    return <VisitorLandingPage />;
  }
}

export default withSanctum(Index);
