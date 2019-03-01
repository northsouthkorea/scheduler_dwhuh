import React, { PureComponent } from 'react';
import classNames from 'classnames/bind';
import styles from './MyInformation.module.scss';

const cx = classNames.bind(styles);

class MyInformation extends PureComponent {
  render() {
    return (
      <div className={cx('container')} />
    );
  }
}

export default MyInformation;
