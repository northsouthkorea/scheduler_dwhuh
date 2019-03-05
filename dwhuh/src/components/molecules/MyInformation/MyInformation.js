import React, { PureComponent } from 'react';
import classNames from 'classnames/bind';
import styles from './MyInformation.module.scss';

import { Icon } from '../../atoms';

const cx = classNames.bind(styles);

class MyInformation extends PureComponent {
  render() {
    const socials = [
      {
        href: 'https://www.facebook.com/profile.php?id=100010262374047',
        ico: 'faFacebookSquare',
      },
      {
        href: 'https://www.youtube.com/channel/UCht15xCjg2zMsoKg856hhbw',
        ico: 'faYoutubeSquare',
      },
    ];

    return (
      <div className={cx('container')}>
        <div className={cx('img')} />

        <div className={cx('social-list')}>
          {socials.map(item => (
            <a
              key={item.ico}
              className={cx('social')}
              href={item.href}
              target="_blank"
            >
              <Icon icon={item.ico} className={cx('ico')} />
            </a>
          ))}
        </div>
      </div>
    );
  }
}

export default MyInformation;
