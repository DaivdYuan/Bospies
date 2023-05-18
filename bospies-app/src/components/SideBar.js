import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/base";

let listStyle = {
  display: "flex",
  width: "300px",
  flexDirection: "column",
  marginLeft: "60px",
};

let sideTitleStyle = {
  borderBottom: "3px solid #33363F",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingLeft: "15px",
  marginTop: "30px"
};

let addStyle = {
  border: "none",
  backgroundColor: "white",
  fontSize: "25px",
  cursor: "pointer"
};

let itemStyle = {
  borderBottom: "solid gray",
};

const groupNames = [
  "BOSP Kyoto Fall ‘22",
  "BOSP Ambassadors",
  "Doshisha Fall ‘22",
];

const convos = [
  "What is Kyoto Like?",
  "Fall vs. Spring in Kyto",
  "Oxford adventures",
]

const listItems = groupNames.map((groupName, i) => (
  <ListItem style={itemStyle}>
    <a href={"/groups/" + (i+1).toString()} style={{textDecoration: "none", color: "black"}}>
    <ListItemText primary={groupName} />
    </a>
  </ListItem>
));

const listConvos = convos.map((convo, i) => (
  <ListItem style={itemStyle}>
    <ListItemText primary={convo} />
  </ListItem>
));

export default function SideBar() {
  return (
    <div style={listStyle}>
      <div style={sideTitleStyle}>
        <a href="/groups" style={{textDecoration: "none"}}>
        <Typography sx={{ mt: 2, mb: 2, fontWeight: "bold", color: "#33363F" }} variant="h6">
          Groups
        </Typography>
        </a>
        <a href="/editGroup"><Button style={addStyle}>+</Button></a>
      </div>
      <List>{listItems}</List>
      
      <div style={sideTitleStyle}>
        <Typography sx={{ mt: 2, mb: 2, fontWeight: "bold", color: "#33363F" }} variant="h6">
          Top Conversations
        </Typography>
      </div>
      <List>{listConvos}</List>
    </div>
  );
}
