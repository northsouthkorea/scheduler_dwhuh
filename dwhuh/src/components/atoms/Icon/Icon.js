import React from 'react';
import PropTypes from 'prop-types';
import * as Solids from '@fortawesome/free-solid-svg-icons';
import * as Brands from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({ icon, ...rest }) => (
  <FontAwesomeIcon icon={Solids[icon] || Brands[icon]} {...rest} />
);

Icon.propTypes = {
  icon: PropTypes.string,
};

export default Icon;
