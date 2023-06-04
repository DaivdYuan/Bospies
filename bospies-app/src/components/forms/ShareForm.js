import { Box, Button, FormControl, InputLabel, TextField, Select, MenuItem, Chip, OutlinedInput, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import prompts from './../../json/prompts.json';
import * as React from 'react';
import { Navigate } from 'react-router-dom';
import * as api from './../../api';

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

function getStyles(name, promptName, theme) {
  return {
    fontWeight:
      promptName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function ShareForm() {
    const theme = useTheme();
    const [promptName, setPrompt] = React.useState([]);

    const postTitleRef = React.useRef();
    const postBodyRef = React.useRef();
    const postProgramRef = React.useRef();

    const handleChange = (event) => {
        const {
        target: { value },
        } = event;
        setPrompt(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
        );
    };

    async function handlePost(){
        let postTitle = postTitleRef.current.value;
        let postBody = postBodyRef.current.value;
        let postProgram = postProgramRef.current.value;
        let postUser = "TestUser"

        let post = {
            title: postTitle,
            body: postBody,
            program: postProgram,
            username: postUser,
            type: "Sharing"
        }

        console.log(post);

        if (postTitle === "" || postBody === "" || postProgram === "") {
            alert("Please fill out all fields!");
            return false;
        }

        let response = await fetch(api.SUBMIT_POST_API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(post),
        });

        if (response.status !== 200) {
            alert("Error submitting post!");
            return false;
        }

        alert("Post submitted!");
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
                <TextField 
                    id="standard-basic" label="Post Title" variant="standard" 
                    style={{width: "95%", margin: "auto", marginTop: "30px"}} 
                    inputRef={postTitleRef}
                />

                <div style={{width: "95%", margin: "auto", marginTop: "20px"}} >
                    <Typography sx={{ fontSize: "15px", color: "#33363F", fontWeight: 400 }} align="left">
                        Fun fact about yourself related to study abroad!
                    </Typography>
                    <TextField 
                        id="outlined-basic" 
                        label="I am a CASK member" variant="outlined" style={{width: "100%"}}
                    />
                </div>
                <div style={sameLine}>
                    <div style={{width: "47%"}}>
                        <Typography sx={{ fontSize: "15px", color: "#33363F", fontWeight: 400}} align="left">Program Name</Typography>
                        <TextField 
                            id="outlined-basic" label="Oxford" 
                            variant="outlined" style={{width: "100%"}}
                            inputRef={postProgramRef}
                        />
                    </div>
                    <div style={{width: "47%"}}>
                        <Typography sx={{ fontSize: "15px", color: "#33363F", fontWeight: 400 }} align="left">Quarter</Typography>
                        <TextField id="outlined-basic" label="Fall 2022" variant="outlined" style={{width: "100%"}}/>
                    </div>
                </div>

                <FormControl sx={{ m: 1, width: 300 }} style={dropDown} >
                    <InputLabel id="demo-multiple-chip-label">Prompts</InputLabel>
                    <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={promptName}
                    onChange={handleChange}
                    input={<OutlinedInput id="select-multiple-chip" label="Prompts" />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                            <Chip key={value} label={value} />
                        ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                    >
                    {prompts.map((prompt) => (
                        <MenuItem
                        key={prompt}
                        value={prompt}
                        style={getStyles(prompt, promptName, theme)}
                        >
                        {prompt}
                        </MenuItem>
                    ))}
                    </Select>
                </FormControl>

                <TextField
                    id="outlined-multiline-flexible"
                    label="Your Response Here"
                    multiline
                    maxRows={4}
                    style={{width: "95%", margin: "auto", marginTop: "30px"}}
                    inputRef={postBodyRef}    
                />
                <div style={buttonsDiv}>
                    <Button 
                        style={discardButtonStyle}
                        onClick={() => {
                            window.location.href = "/";
                        }}
                    >Discard</Button>
                    <Button 
                        style={postButtonStyle}
                        onClick={async () => {
                            if (await handlePost()) {
                                window.location.href = "/";
                            }
                        }}
                    
                    >Post</Button>
                </div>
            </Box>
        </div>
    )
}