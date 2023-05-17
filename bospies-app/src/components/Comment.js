import * as React from "react";
import { Box, Typography, Grid, Stack, ButtonBase, Link, Modal, TextField, Button, IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/system";
import colors from "../json/colors.json";
import CloseIcon from '@mui/icons-material/Close';

const PostBox = styled(Box)({
  padding: "32px",
  backgroundColor: "#F5F5F5",
  borderRadius: 8,
  marginBottom: "20px",
  // display: "block",
  // marginLeft: "auto",
  // marginRight: "auto",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
});

const Comment = (props) => {
  const { comment } = props;
  const [showReport, setShowReport] = React.useState(false);
  return (
    <Grid container sx={{ borderTop: "2px solid #DFDFDF", padding: "16px 0px" }}>
      <Grid container columnGap={1} alignItems="center">
        <AccountCircleIcon sx={{ color: "#7458C3" }} fontSize="large" />
        <Typography sx={{ fontSize: "16px" }}>{comment.username}</Typography>
      </Grid>
      <Typography
        sx={{ fontSize: "16px", color: "#33363F", fontWeight: 400, marginTop: "4px" }}
        textAlign="left"
      >
        {comment.body}
      </Typography>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography
            sx={{ fontSize: "16px", color: "#ABABAB", fontWeight: "bold", marginTop: "4px", textTransform: "uppercase" }}
            textAlign="left"
          >
            {comment.date}, {comment.time}
          </Typography>
        </Grid>
        <Grid item>
          <ButtonBase onClick={() => setShowReport(!showReport)}>
            <Typography
              sx={{ fontSize: "12px", color: "#ABABAB", fontWeight: "bold", marginTop: "4px", textTransform: "uppercase" }}
              textAlign="left"
            >
              REPORT
            </Typography>
          </ButtonBase>
        </Grid>
      </Grid>
      <Modal open={showReport} onClose={() => setShowReport(!showReport)}>
        <PostBox maxWidth="md">
          <Grid container justifyContent="space-between" alignItems="center">
            <Typography
              sx={{
                fontSize: "24px",
                color: "#33363F",
                fontWeight: 700,
                marginBottom: "8px",
              }}
              textAlign="left"
            >
              Report Comment
            </Typography>
            <IconButton onClick={() => setShowReport(!showReport)}>
              <CloseIcon/>
            </IconButton>
          </Grid>
          <Typography textAlign="left" sx={{ color: "#545563" }}>Please explain below why you would like to report the following comment...</Typography>
          <TextField fullWidth multiline sx={{ backgroundColor: "white", marginBottom: "16px" }} />
          <Button onClick={() => setShowReport(!showReport)}>Submit Report</Button>
        </PostBox>
      </Modal>
    </Grid>
  )
}

export default Comment;