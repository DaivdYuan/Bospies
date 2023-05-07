import * as React from 'react';
import { Box, Typography, Grid, Stack, ButtonBase } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { styled } from "@mui/system";
import colors from "../json/colors.json"

const PostBox = styled(Box)({
  padding: "32px",
  backgroundColor: "#F5F5F5",
  // opacity: 0.4,
  borderRadius: 4,
  // justifyContent: "flex-start"
});

const Post = (props) => {
  const { post } = props; 

  return (
    <PostBox justifyContent="flex-end">
      <Grid container direction="row" alignItems="center" justifyContent="space-between" sx={{marginBottom: "8px"}}>
        <Grid item direction="row">
          <Grid container columnGap={1} alignItems="center">
            <AccountCircleIcon sx={{color: "#C16D68"}} fontSize="large"/>
            <Typography sx={{fontSize: "16px"}}>
              {post.username}
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Stack direction="row" columnGap={1}>
          <Box sx={{
            backgroundColor: colors[post.type],
            padding: "4px 12px",
            borderRadius: 40
          }}>
            <Typography sx={{fontWeight: 700, textTransform: "uppercase", fontSize: "12px"}}>
              {post.type}
            </Typography>
          </Box>
          <Box sx={{
            backgroundColor: colors[post.program],
            padding: "4px 12px",
            borderRadius: 40
          }}>
            <Typography sx={{fontWeight: 700, textTransform: "uppercase", fontSize: "12px"}}>
              {post.program}
            </Typography>
          </Box>
          </Stack>
        </Grid>
      </Grid>
      <Typography sx={{fontSize: "24px", color: "#33363F", fontWeight: 700, marginBottom: "8px"}} textAlign="left">
        {post.title}
      </Typography>
      <Typography sx={{fontSize: "18px", color: "#33363F", fontWeight: 400}} textAlign="left">
        {post.body}
      </Typography>
      {/* <Grid justifyContent="flex-end">
        <ButtonBase>
          <Typography sx={{fontSize: "18px", fontWeight: "bold", color: "#33363F",}}>
            Join Convo
          </Typography>
        </ButtonBase>
      </Grid> */}
      
    </PostBox>
  )
}

export default Post