/** @format */

import React from 'react';
import PropTypes from 'prop-types';

export default class Greeting extends React.Component {
  render() {
    const name = this.props.name;
    const hour = new Date().getHours();

    const greetingMessages = {
      morning: 'Good morning and welcome back.',
      afternoon: 'Good afternoon and welcome back.',
      night: 'Welcome back.',
      nothing_good: 'What are you doing up at this time?',
    };
    const namedGreetingMessages = {
      morning: `Good morning, ${name}.`,
      afternoon: `Good afternoon, ${name}.`,
      night: `Good night ${name}`,
      nothing_good: `What are you doing up at this time, ${name}?`,
    };

    let key = '';

    if (hour < 6) key = 'nothing_good';
    else if (hour > 6 && hour < 12) key = 'morning';
    else if (hour < 18) key = 'afternoon';
    else key = 'night';

    if (name) return <h1>{namedGreetingMessages[key]}</h1>;
    else return <h1>{greetingMessages[key]}</h1>;
  }
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};
