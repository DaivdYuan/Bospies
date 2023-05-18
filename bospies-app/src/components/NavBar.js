import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import icon from "./../BospiesLogo.png";
import iconSVG from "./../Icon.svg";
import { useNavigate } from 'react-router-dom';

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
  marginLeft: "auto"
};

export default function NavBar(props) {
  const navigate = useNavigate();
  const {title, post} = props;

  let createPostButton
  if (post === "true") {
    createPostButton = <
      Button style={buttonStyle}
      onClick={() => navigate("/createPost")}
    >
      Create a post
    </Button>;
  }
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" elevation={0}>
          <Toolbar style={barStyle}>
            <a href="/"><img src={iconSVG} width="150"/></a>
            <Typography variant="h5" style={{ marginLeft: "25px", color: "#33363F" }}>
              <b>{title}</b>
            </Typography>
            {createPostButton}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
