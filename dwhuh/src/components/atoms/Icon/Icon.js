import React from 'react';
import PropTypes from 'prop-types';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({ icon, ...rest }) => (
  <FontAwesomeIcon icon={Icons[icon]} {...rest} />
);

Icon.propTypes = {
  icon: PropTypes.string,
};

export default Icon;
