import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './Container.module.scss';

const cx = classNames.bind(style);

const Container = ({ children }) => (
  <div className={cx('container')}>{children}</div>
);

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
};

export default Container;
