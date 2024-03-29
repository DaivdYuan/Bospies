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
};

let addStyle = {
  border: "none",
  backgroundColor: "white",
  fontSize: "25px",
};

let itemStyle = {
  borderBottom: "solid gray",
};

const groupNames = [
  "",
];


export default function GroupSideBar(props) {
  const {group} = props;

  const listItems = group.usernames.map((user, i) => (
    <ListItem style={itemStyle}>
      <ListItemText primary={user} />
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

  return (
    <div style={listStyle}>
      <div style={sideTitleStyle}>
        <a href="/groups" style={{textDecoration: "none"}}>
        <Typography sx={{ mt: 2, mb: 2, fontWeight: "bold", color: "#33363F" }} variant="h6">
          Members
        </Typography>
        </a>
        <Button style={addStyle}>+</Button>
      </div>
      <List>{listItems}</List>
      <br/>
      <br/>

      <div style={sideTitleStyle}>
        <a  style={{textDecoration: "none"}}>
        <Typography sx={{ mt: 2, mb: 2, fontWeight: "bold", color: "#33363F" }} variant="h6">
          Rules
        </Typography>
        </a>
        <Button style={addStyle}>+</Button>
      </div>
      <List>{ruleItems}</List>
      <br/>
      <br/>

      {/* <div style={sideTitleStyle}>
                <Typography sx={{ mt: 4, mb: 2 }} variant="h6">
                    Top Conversations
                </Typography>
            </div>
            <List>
                {generate(
                    <ListItem>
                    <ListItemText
                        primary="Placeholder"
                    />
                    </ListItem>,
                )}
            </List> */}
    </div>
  );
}
