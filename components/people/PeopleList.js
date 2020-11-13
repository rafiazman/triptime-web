/** @format */

import React from 'react';
import Tooltip from '../Tooltip';
import PropTypes from 'prop-types';
import Gravatar from 'react-gravatar';

class PeopleList extends React.Component {
  render() {
    return (
      <div className={'horizontal-list'}>
        {this.props.people.map((person, index) => (
          <Tooltip
            key={index}
            text={person.name}
            component={<Gravatar email={person.email} className={`block-avatar`} />}
          />
        ))}
        {this.props.addComponent}
      </div>
    );
  }
}
PeopleList.propTypes = {
  people: PropTypes.array.isRequired,
  addComponent: PropTypes.node,
};

export default PeopleList;
