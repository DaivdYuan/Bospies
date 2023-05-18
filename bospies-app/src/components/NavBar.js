import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ButtonBase, Grid, Popover, Menu, MenuItem, Link } from "@mui/material/";
import icon from "./../BospiesLogo.png";
import iconSVG from "./../Icon.svg";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

let barStyle = {
  color: "black",
  backgroundColor: "white",
  padding: "10px 35px",
  borderBottom: "3px solid rgba(0, 0, 0, .09)"
};

let buttonStyle = {
  backgroundColor: "#F5F5F5",
  padding: "5px 20px",
  color: "black",
  // marginLeft: "auto"
};

export default function NavBar(props) {
  const { title, post } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  let createPostButton
  if (post === "true") {
    createPostButton = <Button style={buttonStyle}>Create a post</Button>;
  }
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" elevation={0}>
          <Toolbar style={barStyle}>
            <a href="/"><img src={iconSVG} width="150" /></a>
            <Typography variant="h5" style={{ marginLeft: "25px", color: "#33363F", whiteSpace: "nowrap" }}>
              <b>{title}</b>
            </Typography>
            <Grid container columnSpacing={2} justifyContent="flex-end" alignItems="center">
              <Grid item>
                {createPostButton}
              </Grid>
              <Grid item>
                <ButtonBase variant="contained" onClick={handleClick}>
                  <AccountCircleRoundedIcon fontSize="large" sx={{color:"#33363F"}}/> <ExpandMoreRoundedIcon ontSize="large" sx={{color:"#33363F"}}/>
                </ButtonBase>
                <Menu
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                >
                  <a href="/myposts"><MenuItem sx={{color: "#33363F"}}>View Posts</MenuItem></a>
                  <a href="/groups"><MenuItem sx={{color: "#33363F"}}>View Groups</MenuItem></a>
                  <a href="/settings"><MenuItem sx={{color: "#33363F"}}>Account Settings</MenuItem></a>
                  <MenuItem sx={{color: "darkred"}}>Logout</MenuItem>
                </Menu>
              </Grid>

            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
