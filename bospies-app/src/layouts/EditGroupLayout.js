import { Typography, Button } from '@mui/material';
import * as React from 'react';
import NavBar from './../components/NavBar.js'
import MakeGroup from './../components/forms/MakeGroup';
import JoinGroup from '../components/forms/JoinGroup.js';

const buttonStyles = {
    base: {
        borderRadius: "20px",
        padding: "3px 15px",
        marginLeft: "20px",
        color: "black",
        borderWidth: "thin"
    },
    join: {
        border: "solid #FF8B49"
    },
    make: {
        border: "solid #58C5BE"
    },
}

let optionsBox = {
    display: "flex",
    width: "70%",
    margin: "auto",
    marginTop: "50px"
}

export default function CreatePostLayout(props) {
    const [isJoin, setIsJoin] = React.useState(true);
    const [isMake, setIsMake] = React.useState(false);

    let form;
    if (isJoin) {
        form = <JoinGroup />
        buttonStyles.join.backgroundColor = "#FF8B49"
        buttonStyles.make.backgroundColor = "white"
    } else if (isMake) {
        form = <MakeGroup />
        buttonStyles.join.backgroundColor = "white"
        buttonStyles.make.backgroundColor = "#58C5BE"
    }

    return (
        <div>
            <NavBar title="Join or Create a Group" post="false"/>
            <div style={optionsBox}>
                <Typography sx={{ fontSize: "20px", color: "#a6a6a6", fontWeight: 400}} align="left">Type</Typography>
                <Button style={Object.assign({}, buttonStyles.base, buttonStyles.join)} onClick={() => 
                        {   
                            setIsJoin(true)
                            setIsMake(false)
                        }
                    }
                    >Join an Existing Group</Button>
                <Button style={Object.assign({}, buttonStyles.base, buttonStyles.make)} onClick={() => {   
                            setIsJoin(false)
                            setIsMake(true)
                        }}>Make a New Group</Button>
            </div>
            {form}
        </div>
    )
}