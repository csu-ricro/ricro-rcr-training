import React, {
	Component
} from 'react';
import {
	Link
} from 'react-router-dom'
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import {
	Toolbar,
	ToolbarTitle,
	ToolbarGroup,
	ToolbarSeparator
} from 'material-ui/Toolbar';

import AppContainer from './csu-app-template/AppContainer';
import config from './config.json';
import sections from './sections.json';

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
		if (window.location.pathname === config.app.root + section.link) {
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
		const header = [
			(<ToolbarGroup key={0} firstChild={true}>
        <IconButton
          onTouchTap={this.handleToggleNav}
          tooltip='Sections'
          tooltipPosition='bottom-right'>
          <FontIcon className='material-icons'>menu</FontIcon>
        </IconButton>
        <ToolbarTitle text={config.app.name} />
      </ToolbarGroup>),
			(<ToolbarGroup key={1}>
        <IconButton
          href='/'
          tooltip='Home'>
          <FontIcon className='material-icons'>home</FontIcon>
        </IconButton>
        <ToolbarSeparator style={{marginLeft:0}} />
        <IconButton
          href={config.unit.contactHref}
          tooltip='Contact Us'
          tooltipPosition='bottom-left'>
          <FontIcon className='material-icons'>email</FontIcon>
        </IconButton>
      </ToolbarGroup>)
		];
		return (
			<AppContainer config={config} header={header}>
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
                to={config.app.root+section.link}
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
      </AppContainer>
		);
	}
}
export default App;
