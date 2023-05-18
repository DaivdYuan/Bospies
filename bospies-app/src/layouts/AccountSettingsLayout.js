import NavBar from "../components/NavBar";
import * as React from "react";
import { Box, Grid, Typography, Link, ButtonBase, Container, TextField, Button } from "@mui/material";
import { styled } from "@mui/system";

const HeaderTitle = styled(Typography)({
  fontSize: "24px",
  color: "#33363F",
  fontWeight: 700,
  // marginBottom: "8px",
});

const AccountSettingsLayout = (props) => {
  return (
    <>
      <NavBar title="Account Settings" />
      <div style={{ height: "32px" }} />
      <Container maxWidth="md">
      <Grid container maxWidth="md" justifyContent="flex-start" direction="column">
        <HeaderTitle textAlign="left">Username</HeaderTitle>
        <TextField value="MyUsername"/>
        <br/>
        <HeaderTitle textAlign="left">Email</HeaderTitle>
        <TextField value="suid@stanford.edu"/>
        <br/>
        <HeaderTitle textAlign="left">Password</HeaderTitle>
        <TextField value="MyUsernameadsjsadjasd" type="password"/>
        <br/>
        <HeaderTitle textAlign="left">Delete Account</HeaderTitle>
        <Grid container justifyContent="flex-start">
        <Button variant="contained" color="error" sx={{textTransform: "none"}}>Delete Account</Button>
        </Grid>
        <br/>
        <br/>
        <Grid container justifyContent="flex-end">
        <Button variant="contained" color="success" sx={{textTransform: "none"}}>Save Changes</Button>
        </Grid>
      </Grid>
      </Container>
    </>
  )
}

export default AccountSettingsLayout;