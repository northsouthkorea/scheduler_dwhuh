import React from 'react';
import PropTypes from 'prop-types';
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
import { Icon } from '../../atoms';
import { MyInformation } from '../../molecules';

const cx = classNames.bind(style);

const LeftMenu = ({
  activatedMain,
  onChangeMain,
}) => {
  const menus = [REACT, CODE_TEST, DESIGNS, COMPETITION];

  return (
    <div className={cx('container')}>
      <h2 className={cx('title')} onClick={() => onChangeMain('')}>
        <NavLink to={HOME.LINK}>
          <Icon icon="faHome" className={cx('ico')} />
          DwHuh
        </NavLink>
      </h2>

      <ul className={cx('menus')}>
        {menus.map(item => (
          <li
            key={item.LINK}
            onClick={() => onChangeMain(item.LINK)}
          >
            <NavLink
              to={item.LINK}
              activeClassName={cx('active')}
            >
              {activatedMain === item.LINK && (
                <Icon icon="faAngleRight" className={cx('ico')} />
              )}
              {item.NAME}
            </NavLink>
          </li>
        ))}
      </ul>

      <MyInformation />
    </div>
  );
};

LeftMenu.propTypes = {
  activatedMain: PropTypes.string,
  onChangeMain: PropTypes.func,
};

export default LeftMenu;
