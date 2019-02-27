import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import style from './LeftMenu.module.scss';

import {
  HOME,
  REACT,
  CODE_TEST,
  DESIGNS,
  COMPETITION,
} from '../../../static/CONSTANTS/routes';

const cx = classNames.bind(style);

const LeftMenu = () => (
  <div className={cx('container')}>
    <h2 className={cx('title')}>
      DWHUH
    </h2>

    <ul className={cx('menus')}>
      <li>
        <NavLink to={HOME.LINK}>Home</NavLink>
      </li>
      <li>
        <NavLink to={REACT.LINK}>React</NavLink>
      </li>
      <li>
        <NavLink to={CODE_TEST.LINK}>Code TEST</NavLink>
      </li>
      <li>
        <NavLink to={DESIGNS.LINK}>Designs</NavLink>
      </li>
      <li>
        <NavLink to={COMPETITION.LINK}>Competition</NavLink>
      </li>
    </ul>
  </div>
);

export default LeftMenu;
