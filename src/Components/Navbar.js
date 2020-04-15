import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Link} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import LinkIcon from '@material-ui/icons/Link';


class Navbar extends Component {
    render() {
        return ( 
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={'iconbutton'} color="inherit" aria-label="menu">
                            <MenuIcon></MenuIcon>
                        </IconButton>
                        <IconButton edge="start" className={'iconbutton'} color="inherit" aria-label="menu" onClick={()=> {window.location.href = 'https://google.ca'}}>
                            <LinkIcon>Google</LinkIcon>
                        </IconButton>
                        <IconButton edge="start" className={'iconbutton'} color="inherit" aria-label="menu" onClick={()=> {window.location.href = 'https://www.youtube.com/'}}>
                            <LinkIcon>youtube</LinkIcon>
                        </IconButton>
                        <Typography variant="h6" className={'typo'}>
                        This is a Navbar
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
} 

export default Navbar;