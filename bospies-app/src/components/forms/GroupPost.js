import { Box, Button, FormControl, InputLabel, TextField, Select, MenuItem, Chip, OutlinedInput, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import groups from './../../json/userGroups.json';
import * as React from 'react';

let formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    margin: "auto",
    borderRadius: "20px",
    width: "70%",
    boxShadow: "1px 7px 6px #D3D3D3",
    marginTop: "30px"
}

let dropDown = {
    width: "95%",
    margin: "auto",
    marginTop: "30px"
}

let buttonsDiv = {
    margin: "auto",
    marginTop: "50px",
    padding: "30px 0px",
    borderTop: "solid #dbdbdb",
    width: "95%",
    display: "flex",
    justifyContent: "space-between"
}

let discardButtonStyle = {
    border: "solid gray",
    color: "gray",
    borderWidth: "thin"
}

let postButtonStyle = {
    backgroundColor: "#9F3434",
    color: "white"

}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, groupName, theme) {
  return {
    fontWeight:
      groupName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function GroupPost() {
    const theme = useTheme();
    const [groupName, setPrompt] = React.useState([]);

    const handleChange = (event) => {
        const {
        target: { value },
        } = event;
        setPrompt(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
            <Box
                style={formStyle}
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="standard-basic" label="Post Title" variant="standard" 
                    style={{width: "95%", margin: "auto", marginTop: "30px"}} />

                <FormControl sx={{ m: 1, width: 300 }} style={dropDown} >
                    <InputLabel id="demo-multiple-chip-label">Groups</InputLabel>
                    <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={groupName}
                    onChange={handleChange}
                    input={<OutlinedInput id="select-multiple-chip" label="Groups" />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                            <Chip key={value} label={value} />
                        ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                    >
                    {groups.map((group) => (
                        <MenuItem
                        key={group}
                        value={group}
                        style={getStyles(group, groupName, theme)}
                        >
                        {group}
                        </MenuItem>
                    ))}
                    </Select>
                </FormControl>


                <div style={{width: "95%", margin: "auto", marginTop: "20px"}} >
                    <Typography sx={{ fontSize: "15px", color: "#33363F", fontWeight: 400}} align="left">Describe your itinerary below!</Typography>
                    <TextField
                        id="outlined-multiline-flexible"
                        multiline
                        maxRows={4}
                        style={{width: "100%"}}
                    />
                </div>

                <div style={buttonsDiv}>
                    <Button style={discardButtonStyle}>Discard</Button>
                    <Button style={postButtonStyle}>Post</Button>
                </div>
            </Box>
        </div>
    )
}