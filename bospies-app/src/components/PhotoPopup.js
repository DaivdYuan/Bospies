import * as React from "react";
import { Box, Typography, Grid, Stack, ButtonBase, Link, Modal, TextField, Button, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import CloseIcon from '@mui/icons-material/Close';

const PostBox = styled(Box)({
  padding: "32px",
  backgroundColor: "#F5F5F5",
  borderRadius: 8,
  marginBottom: "20px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
});

const imageStyle = {
  width: '100%',
  height: undefined,
  // aspectRatio: 1,
  borderRadius: "8px",
  // aspectRatio: 1/1,
  // objectFit: "cover",
};

const PhotoPopup = (props) => {
  const { photo, handleClose, open } = props;

  return (
    <Modal open={open} onClose={handleClose}>
      <PostBox>
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
            View Photo
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Grid>
        <Grid container sx={{mt: 2}}>
          <img src={photo} style={imageStyle} />
        </Grid>
      </PostBox>
    </Modal>
  )
};

export default PhotoPopup;