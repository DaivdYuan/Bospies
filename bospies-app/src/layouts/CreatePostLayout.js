import { Typography, Button } from '@mui/material';
import * as React from 'react';
import QuestionForm from '../components/forms/QuestionForm';
import ShareForm from '../components/forms/ShareForm';
import NavBar from './../components/NavBar.js'

const buttonStyles = {
    base: {
        borderRadius: "20px",
        padding: "3px 15px",
        marginLeft: "20px",
        color: "black",
        borderWidth: "thin"
    }, 
    sharing: {
        border: "solid #FF8B49"
    },
    question: {
        border: "solid #58C5BE"
    }
}

let optionsBox = {
    display: "flex",
    width: "70%",
    margin: "auto",
    marginTop: "50px"
}

export default function CreatePostLayout() {
    const [isSharing, setIsSharing] = React.useState(true);

    let form;
    if (isSharing) {
        form = <ShareForm />
        buttonStyles.sharing.backgroundColor = "#FF8B49"
        buttonStyles.question.backgroundColor = "white"
    } else {
        form = <QuestionForm />
        buttonStyles.sharing.backgroundColor = "white"
        buttonStyles.question.backgroundColor = "#58C5BE"
    }

    return (
        <div>
            <NavBar title="Create a Post" post="false"/>
            <div style={optionsBox}>
                <Typography sx={{ fontSize: "20px", color: "#a6a6a6", fontWeight: 400}} align="left">Category</Typography>
                <Button style={Object.assign({}, buttonStyles.base, buttonStyles.sharing)} onClick={() => setIsSharing(!isSharing)}>Sharing</Button>
                <Button style={Object.assign({}, buttonStyles.base, buttonStyles.question)} onClick={() => setIsSharing(!isSharing)}>Question</Button>
            </div>
            {form}
        </div>
    )
}