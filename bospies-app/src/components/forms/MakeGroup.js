import { Box, Button, FormControl, InputLabel, TextField, Select, MenuItem, Chip, OutlinedInput, Typography } from '@mui/material';
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

export default function MakeGroup() {

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
                    style={{width: "95%", margin: "auto", marginTop: "30px"}} />

                <div style={{width: "95%", margin: "auto", marginTop: "20px"}} >
                    <Typography sx={{ fontSize: "15px", color: "#33363F", fontWeight: 400 }} align="left">
                        Description of Group
                    </Typography>
                    <TextField id="outlined-basic" label="BOSP Oxford" variant="outlined" style={{width: "100%"}}/>
                </div>

                
                <div style={buttonsDiv}>
                    <Button style={discardButtonStyle}>Discard</Button>
                    <Button style={postButtonStyle}>Create Group</Button>
                </div>
            </Box>
        </div>
    )
}