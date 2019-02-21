import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Media from 'react-media';
import FCCSearch from 'react-freecodecamp-search';

import NavLogo from './components/NavLogo';
import UserState from './components/UserState';
import { Link } from '../helpers';

import './header.css';

import {
  toggleDisplaySideNav,
  toggleDisplayMenu
} from '../layouts/components/guide/redux';

const mapStateToProps = state => {
  return {
    displayMenu: state.guideNav.displayMenu
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ toggleDisplaySideNav, toggleDisplayMenu }, dispatch);

const propTypes = {
  disableSettings: PropTypes.bool,
  displayMenu: PropTypes.bool,
  onGuide: PropTypes.bool,
  toggleDisplayMenu: PropTypes.func,
  toggleDisplaySideNav: PropTypes.func
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.menuButtonRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
    console.log('header unmount');
  }

  toggleDisplayMenuLogic = () => {
    if (this.props.onGuide) {
      this.props.toggleDisplaySideNav();
    } else {
      this.props.toggleDisplayMenu();
    }
  };

  handleClickOutside = event => {
    if (
      this.props.displayMenu &&
      !this.menuButtonRef.current.contains(event.target) &&
      !this.props.onGuide
    ) {
      this.toggleDisplayMenuLogic();
    }
  };

  handleMediaChange = matches => {
    if (!matches && this.props.displayMenu) {
      this.toggleDisplayMenuLogic();
    }
  };

  renderClassNames = (displayMenu, onGuide) => {
    if (displayMenu && onGuide) {
      return 'opened onGuide';
    } else if (displayMenu) {
      return 'opened';
    } else if (onGuide) {
      return 'onGuide';
    }
    return '';
  };

  render() {
    const viewportWidth = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
    const {
      disableSettings,
      onGuide,
      displayMenu,
      toggleDisplayMenu
    } = this.props;
    return (
      <header className={this.renderClassNames(displayMenu, onGuide)}>
        <nav id='top-nav'>
          <Link className='home-link' to='/'>
            <NavLogo />
          </Link>
          {disableSettings ? null : <FCCSearch />}
          {onGuide && displayMenu && viewportWidth < 991 ? null : (
            <ul id='top-right-nav'>
              <li onClick={toggleDisplayMenu}>
                <Link to='/learn'>Learn</Link>
              </li>
              <li onClick={toggleDisplayMenu}>
                <Link external={true} to='/forum'>
                  Forum
                </Link>
              </li>
              <li onClick={toggleDisplayMenu}>
                <Link external={true} to='/news'>
                  News
                </Link>
              </li>
              <li className='user-state-link' onClick={toggleDisplayMenu}>
                <UserState disableSettings={disableSettings} />
              </li>
            </ul>
          )}
          <span
            className='menu-button'
            onClick={this.toggleDisplayMenuLogic}
            ref={this.menuButtonRef}
          >
            Menu
          </span>
          <Media onChange={this.handleMediaChange} query='(max-width: 734px)' />
        </nav>
      </header>
    );
  }
}

Header.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
