import React, { Component } from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as commonActions from '../store/modules/commonModule';
import LeftMenu from '../components/templates/LeftMenu';

class RouteContainer extends Component {
  shouldComponentUpdate(next) {
    const prev = this.props;
    return !prev.menuList.equals(next.menuList)
      || prev.activatedMain !== next.activatedMain
      || prev.activatedSub !== next.activatedSub;
  }

  render() {
    const {
      menuList,
      activatedMain,
      activatedSub,
    } = this.props;
    return (
      <LeftMenu
        data={menuList}
        activatedMain={activatedMain}
        activatedSub={activatedSub}
      />
    );
  }
}

RouteContainer.propTypes = {
  menuList: PropTypes.object,
  activatedMain: PropTypes.string,
  activatedSub: PropTypes.string,
};

const mapStateToProps = (state) => {
  const { common } = state;
  const menu = common.get('menu');
  return {
    menuList: menu.get('list'),
    activatedMain: menu.get('activatedMain'),
    activatedSub: menu.get('activatedSub'),
  };
};

const mapStateToDispatch = dispatch => ({
  CommonActions: bindActionCreators(commonActions, dispatch),
});

export default compose(
  connect(mapStateToProps, mapStateToDispatch),
)(RouteContainer);
