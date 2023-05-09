import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/base';


let listStyle = {
    display: "flex",
    width: "300px",
    flexDirection: "column"
}

let sideTitleStyle = {
    borderBottom: "solid black",
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: "15px",
}

let addStyle = {
    border: "none",
    backgroundColor: "white",
    fontSize: "25px",
}

let itemStyle = {
    borderBottom: "solid gray",
}

const groupNames = ["BOSP Kyoto Fall ‘22", "BOSP Ambassadors", "Doshisha Fall ‘22"];
const listItems = groupNames.map((groupName) =>
    <ListItem style={itemStyle}>
        <ListItemText primary={groupName} />
    </ListItem>
);

export default function SideBar() {
    return (
        <div style={listStyle}>
            <div style={sideTitleStyle}>
                <Typography sx={{ mt: 2, mb: 2 }} variant="h6">
                    Groups
                </Typography>
                <Button style={addStyle}>+</Button>
            </div>
            <List>
                {listItems}
            </List>

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
    )
}