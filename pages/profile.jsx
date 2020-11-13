/** @format */

import React from 'react';
import Link from 'next/link';
import { withSanctum } from 'react-sanctum';

class Profile extends React.Component {
  render() {
    const { authenticated, user } = this.props;

    if (!authenticated) return <p>You are not logged in. No profile to show.</p>;

    return (
      <div style={{ width: '50%', margin: '0 auto' }}>
        <h1>Profile Page</h1>
        <Link href={'/timeline'}>
          <a>Go to your trip</a>
        </Link>
        <p>Welcome to the Profile Page! Here is your profile information:</p>
        <p>{JSON.stringify(user)}</p>
      </div>
    );
  }
}

export default withSanctum(Profile);