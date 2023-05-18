import { Box, Grid, Typography, Link, ButtonBase, Container } from "@mui/material";
import * as React from "react";
import { useParams } from "react-router-dom";
import { styled } from "@mui/system";
import NavBar from "../components/NavBar";
import Post from "../components/Post";
import Comment from "../components/Comment";
import homepagePosts from "../json/homepage_posts.json";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const PostBox = styled(Box)({
  padding: "32px",
  backgroundColor: "#F5F5F5",
  borderRadius: 8,
  // marginBottom: "100px",
  // height: "100%"
});

const GroupCard = (props) => {
  const { group } = props;
  return (
    <PostBox sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <div>
        <Typography
          sx={{
            fontSize: "24px",
            color: "#33363F",
            fontWeight: 700,
            marginBottom: "8px",
          }}
          textAlign="left"
        >
          <Link href={"/group/" + group.id} underline="hover" sx={{ color: "#33363F" }}>
            {group.name}
          </Link>
        </Typography>
        <Typography
          sx={{ fontSize: "18px", color: "#33363F", fontWeight: 400 }}
          textAlign="left"
        >
          {group.description}
        </Typography>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Grid container columnGap={1} alignItems="center">
          <AccountCircleIcon sx={{ color: "#C16D68" }} fontSize="large" />
          <Typography sx={{ fontSize: "16px" }}>{group.numUsers} people</Typography>
        </Grid>
        <ButtonBase href={"/groups/" + group.id}>
          {/* <AddIcon
            sx={{ color: "#33363F", stroke: "#33363F", marginRight: "4px" }}
          /> */}
          <NavigateNextIcon
            sx={{ color: "#33363F", stroke: "#33363F", marginRight: "4px" }}
          />
          {/* <Typography
            sx={{ fontSize: "18px", fontWeight: "bold", color: "#33363F" }}
          >
            
          </Typography> */}
        </ButtonBase>
      </div>

    </PostBox>
  )
}

const CreateGroupCard = (props) => {
  const { group } = props;
  return (
    <PostBox sx={{ height: "100%", position: "relative" }}>
      <Typography
        sx={{
          fontSize: "24px",
          color: "#33363F",
          fontWeight: 700,
          marginBottom: "8px",
        }}
        textAlign="left"
      >
        <Link href={"/editGroup/"} underline="hover" sx={{ color: "#33363F" }}>
          New group
        </Link>
      </Typography>
      <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
      <AddRoundedIcon
        sx={{ color: "#33363F", stroke: "#33363F", marginRight: "4px", fontSize: "48px", fontWeight: 300 }}
        />
      </div>
    </PostBox>
  )
}

const GroupSelectLayout = () => {
  return (
    <>
      <NavBar title="Groups" />
      <div style={{ height: "32px" }} />
      <Container maxWidth="md">
        <Grid container rowSpacing={10} columnSpacing={2}>
          {groupData.map((group, index) => {
            return (
              <Grid item xs={6}>
                <GroupCard group={group} key={index} />
              </Grid>
            )
          })}
          <Grid item xs={6}>
            <CreateGroupCard />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

const groupData = [
  {
    id: "1",
    name: "BOSP Kyoto Fall '22",
    description: "This group is for all participants of the BOSP Kyoto program in Fall 2022.",
    numUsers: "32",
  },
  {
    id: "2",
    name: "BOSP Ambassadors",
    description: "Welcome! This is a hub for all student ambassadors of all BOSP programs.",
    numUsers: "17",
  },
  {
    id: "3",
    name: "Doshisha Fall '22",
    description: "This is a group that includes both Stanford and Doshisha students in Kyoto Fall '22.",
    numUsers: "41",
  }
]

export default GroupSelectLayout;