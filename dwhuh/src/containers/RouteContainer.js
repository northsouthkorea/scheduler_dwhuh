import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as commonActions from '../store/modules/commonModule';
import { LeftMenu } from '../components/templates';

class RouteContainer extends Component {
  componentDidMount() {
    this.handleInitialRoute();
  }

  shouldComponentUpdate(next) {
    const prev = this.props;
    return !prev.menuList.equals(next.menuList)
      || prev.activatedMain !== next.activatedMain
      || prev.activatedSub !== next.activatedSub;
  }

  handleInitialRoute = () => {
    const { CommonActions, location } = this.props;
    const arr = location.pathname.split('/').filter(a => a);
    CommonActions.setActivatedMain(`/${arr[0]}`);
  };

  handleChangeMain = (link) => {
    const { CommonActions } = this.props;
    CommonActions.setActivatedMain(link);
  };

  render() {
    const {
      props: {
        menuList,
        activatedMain,
        activatedSub,
      },
      handleChangeMain,
    } = this;

    return (
      <LeftMenu
        data={menuList}
        activatedMain={activatedMain}
        activatedSub={activatedSub}
        onChangeMain={handleChangeMain}
      />
    );
  }
}

RouteContainer.propTypes = {
  CommonActions: PropTypes.object,

  location: PropTypes.object,
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
  withRouter,
  connect(mapStateToProps, mapStateToDispatch),
)(RouteContainer);
