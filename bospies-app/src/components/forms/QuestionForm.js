import { Box, Button, TextField, Typography } from '@mui/material';
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

export default function QuestionForm() {

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

                <div style={{width: "95%", margin: "auto", marginTop: "20px"}} >
                    <Typography sx={{ fontSize: "15px", color: "#33363F", fontWeight: 400 }} align="left">
                        Fun fact about yourself related to study abroad!
                    </Typography>
                    <TextField id="outlined-basic" label="Interested in Florence and Oxford" variant="outlined" style={{width: "100%"}}/>
                </div>
                <div style={sameLine}>
                    <div style={{width: "47%"}}>
                        <Typography sx={{ fontSize: "15px", color: "#33363F", fontWeight: 400}} align="left">Program Name</Typography>
                        <TextField id="outlined-basic" label="Oxford" variant="outlined" style={{width: "100%"}}/>
                    </div>
                    <div style={{width: "47%"}}>
                        <Typography sx={{ fontSize: "15px", color: "#33363F", fontWeight: 400 }} align="left">Quarter (optional)</Typography>
                        <TextField id="outlined-basic" label="Fall 2022" variant="outlined" style={{width: "100%"}}/>
                    </div>
                </div>

                <div style={{width: "95%", margin: "auto", marginTop: "20px"}} >
                    <Typography sx={{ fontSize: "15px", color: "#33363F", fontWeight: 400}} align="left">What questions do you have regarding this program?</Typography>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Your Response Here"
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