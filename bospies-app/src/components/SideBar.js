import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/base";

import { GET_ALL_GROUPS_API } from "../api";

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

const rules = [
  "Please avoid using derogatory language or making offensive comments about others.",
  "We ask that you keep all comments and sharing relevant to the purpose of this group.",
  "Please ensure that all comments and sharing are appropriate and not offensive, discriminatory, or defamatory in any way.",
]

const ruleItems = rules.map((rule, i) => (
  <ListItem style={itemStyle}>
    <ListItemText primary={rule} />
  </ListItem>
));

export default function SideBar() {

  const [groups, setGroups] = React.useState([]);

  React.useEffect(() => {
    fetch(GET_ALL_GROUPS_API)
      .then((response) => response.json())
      .then((data) => {
        setGroups(data.groups);
      });
  }, []);

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
      <List>
        {
          groups.map((groupName, i) => (
            <ListItem style={itemStyle}>
              <a href={"/groups/" + (i+1).toString()} style={{textDecoration: "none", color: "black"}}>
              <ListItemText primary={groupName} />
              </a>
            </ListItem>
          ))
        }
      </List>
      
      <div style={sideTitleStyle}>
        <Typography sx={{ mt: 2, mb: 2, fontWeight: "bold", color: "#33363F" }} variant="h6">
          Top Conversations
        </Typography>
      </div>
      <List>{listConvos}</List>

      <div style={sideTitleStyle}>
        <Typography sx={{ mt: 2, mb: 2, fontWeight: "bold", color: "#33363F" }} variant="h6">
          Rules
        </Typography>
      </div>
      <List>{ruleItems}</List>
    </div>
  );
}
