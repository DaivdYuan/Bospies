import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import icon from './../BospiesLogo.png';

let barStyle = {
    color: "black",
    backgroundColor: "white",
    justifyContent: "space-between",
    padding: "10px 35px",
}

let buttonStyle = {
    backgroundColor: "#F5F5F5",
    padding: "5px 20px",
    color: "black"
}

export default function NavBar() {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar style={barStyle}>
                        <img src={icon} width="150"/>
                        <Typography variant="h5" style={{marginLeft:"25px"}}>
                            <b>Home</b>
                        </Typography>
                        <Button style={buttonStyle}>Create a post</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}