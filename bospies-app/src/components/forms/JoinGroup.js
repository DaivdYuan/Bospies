import { Box, Button, FormControl, InputLabel, TextField, Select, MenuItem, Chip, OutlinedInput, Typography } from '@mui/material';
import * as React from 'react';

import { SUBMIT_NEW_GROUP_API } from '../../api';

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

let sameLine = {
    display: "flex",
    width: "95%",
    margin: "auto",
    marginTop: "15px",
    justifyContent: "space-between"
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

export default function JoinGroup() {
    const groupRef = React.useRef();

    const handleJoinGroup = async () => {
        let groupName = groupRef.current.value;

        if (groupName === "") {
            alert("Please enter a group name.");
            return false;
        }

        let group = {
            name: groupName
        }

        let response = await fetch(SUBMIT_NEW_GROUP_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(group)
        });

        alert("Request submitted!");
        return true;
    }

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
                <TextField id="standard-basic" label="Group Name" variant="standard" 
                    style={{width: "95%", margin: "auto", marginTop: "30px"}} 
                    inputRef={groupRef}    
                />
                
                <div style={buttonsDiv}>
                    <Button 
                        style={discardButtonStyle}
                        onClick={() => {window.location.href = "/"}}
                    >Discard</Button>
                    <Button 
                        style={postButtonStyle}
                        onClick={async () => {
                            if (await handleJoinGroup()) {
                                window.location.href = "/";
                            }                        
                        }}
                    >Join Group</Button>
                </div>
            </Box>
        </div>
    )
}