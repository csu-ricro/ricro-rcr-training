import React, {
  Component
} from 'react';
import {
  Link
} from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import {
  Toolbar,
  ToolbarTitle,
  ToolbarGroup
} from 'material-ui/Toolbar';

import CsuSvgLogo from './CsuBranding';

import config from './config.json';
import sections from './sections.json';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

document.title = document.title === '' ? config.appName + ' - ' + config.unitTitle : document.title;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navIsOpen: false
    }
  }
  handleToggleNav = () => this.setState({
    navIsOpen: !this.state.navIsOpen
  });
  handleCloseNav = () => this.setState({
    navIsOpen: false
  });
  checkActive = (section) => {
    const borderSize = '5px';
    if (window.location.pathname === config.appRoot + section.link) {
      return {
        isDisabled: true,
        style: {
          borderLeft: borderSize + ' solid ' + config.muiTheme.palette.accent1Color,
          color: config.muiTheme.palette.primary1Color,
          fontWeight: 'bold'
        }
      }
    }
    return {
      isDisabled: false,
      style: {
        paddingLeft: borderSize
      }
    };
  }
  render() {
    let drawerWidth = window.innerWidth > 992 ? 25 : 100;
    if (drawerWidth !== 100 && drawerWidth / 100 * window.innerWidth < 425) {
      while (drawerWidth !== 100 && drawerWidth / 100 * window.innerWidth < 425) {
        drawerWidth++;
      }
    }
    return (
      <div>
        <AppBar
          iconElementLeft={<CsuSvgLogo />} />
        <Toolbar>
          <ToolbarGroup firstChild={true}>
            <IconButton
              onTouchTap={this.handleToggleNav}
              tooltip='Sections'
              tooltipPosition='bottom-right'>
              <FontIcon className='material-icons'>menu</FontIcon>
            </IconButton>
            <ToolbarTitle text={config.appName} />
          </ToolbarGroup>
          <ToolbarGroup>
            <IconButton
              href='/'
              tooltip='Home'
              tooltipPosition='bottom-left'>
              <FontIcon className='material-icons'>home</FontIcon>
            </IconButton>
          </ToolbarGroup>
        </Toolbar>
        <div id="main-content">
          <Drawer
            docked={false}
            containerStyle={{overflowX:'hidden'}}
            width={drawerWidth+'%'}
            onRequestChange={(navIsOpen) => this.setState({navIsOpen})}
            open={this.state.navIsOpen}>
            <Toolbar>
              <ToolbarGroup>
                <ToolbarTitle text='Sections' />
              </ToolbarGroup>
              <ToolbarGroup lastChild={true}>
                <IconButton
                  onTouchTap={this.handleToggleNav}
                  tooltip='Close'
                  tooltipPosition='bottom-left'>
                  <FontIcon className='material-icons'>close</FontIcon>
                </IconButton>
              </ToolbarGroup>
            </Toolbar>
            {sections.map((section, i)=>{
              const isActive = this.checkActive(section);
              return (
                <Link
                  key={i}
                  to={config.appRoot+section.link}
                  style={{textDecoration: 'none'}}>
                  <MenuItem
                    style={isActive.style}
                    innerDivStyle={{whiteSpace: 'normal'}}
                    primaryText={section.title}
                    disabled={isActive.isDisabled}
                    onTouchTap={this.handleCloseNav} />
                </Link>
              );
            })}
          </Drawer>
          {this.props.children}
        </div>
      </div>
    );
  }
}
export default App;
