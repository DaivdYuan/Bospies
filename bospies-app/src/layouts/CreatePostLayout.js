import { Typography, Button } from '@mui/material';
import * as React from 'react';
import GroupPost from '../components/forms/GroupPost';
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
    },
    itinerary: {
        border: "solid #ACACAC"
    },
}

let optionsBox = {
    display: "flex",
    width: "70%",
    margin: "auto",
    marginTop: "50px"
}

export default function CreatePostLayout(props) {
    const { type } = props
    const [isSharing, setIsSharing] = React.useState(true);
    const [isQuestion, setIsQuestion] = React.useState(false);
    const [isItinerary, setIsItinerary] = React.useState(false);

    let form;
    if (isSharing) {
        form = <ShareForm />
        buttonStyles.sharing.backgroundColor = "#FF8B49"
        buttonStyles.question.backgroundColor = "white"
        buttonStyles.itinerary.backgroundColor = "white"
    } else if (isQuestion) {
        form = <QuestionForm />
        buttonStyles.sharing.backgroundColor = "white"
        buttonStyles.question.backgroundColor = "#58C5BE"
        buttonStyles.itinerary.backgroundColor = "white"
    } else if (isItinerary) {
        form = <GroupPost />
        buttonStyles.sharing.backgroundColor = "white"
        buttonStyles.question.backgroundColor = "white"
        buttonStyles.itinerary.backgroundColor = "#ACACAC"
    }

    if (type === "none") {
        return (
            <div>
                <NavBar title="Create a Post" post="false"/>
                <div style={optionsBox}>
                    <Typography sx={{ fontSize: "20px", color: "#a6a6a6", fontWeight: 400}} align="left">Category</Typography>
                    <Button style={Object.assign({}, buttonStyles.base, buttonStyles.sharing)} onClick={() => 
                            {   
                                setIsSharing(true)
                                setIsQuestion(false)
                                setIsItinerary(false)
                            }
                        }
                        >Sharing</Button>
                    <Button style={Object.assign({}, buttonStyles.base, buttonStyles.question)} onClick={() => {   
                                setIsSharing(false)
                                setIsQuestion(true)
                                setIsItinerary(false)
                            }}>Question</Button>
                </div>
                {form}
            </div>
        )
    } else if (type === "groupPost") {
        return (
            <div>
                <NavBar title="Create a Post to Group" post="false"/>
                <div style={optionsBox}>
                    <Typography sx={{ fontSize: "20px", color: "#a6a6a6", fontWeight: 400}} align="left">Category</Typography>
                    <Button style={Object.assign({}, buttonStyles.base, buttonStyles.sharing)} onClick={() => 
                            {   
                                setIsSharing(true)
                                setIsQuestion(false)
                                setIsItinerary(false)
                            }
                        }
                        >Sharing</Button>
                    <Button style={Object.assign({}, buttonStyles.base, buttonStyles.question)} onClick={() => {   
                                setIsSharing(false)
                                setIsQuestion(true)
                                setIsItinerary(false)
                            }}>Question</Button>
                    <Button style={Object.assign({}, buttonStyles.base, buttonStyles.itinerary)} onClick={() => {   
                                setIsSharing(false)
                                setIsQuestion(false)
                                setIsItinerary(true)
                            }}>Itinerary</Button>
                </div>
                {form}
            </div>
        )
    }
}