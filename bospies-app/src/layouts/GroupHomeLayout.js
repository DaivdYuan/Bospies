import { Grid, Typography, Container, ButtonBase } from "@mui/material";
import * as React from "react";
import FilterButton from "../components/FilterButton";
import Post from "../components/Post";
import typeOptions from "../json/type.json";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import sortOptions from "../json/sort_options.json";
import groupPosts from "../json/group_posts.json";
import { useParams } from "react-router-dom";
import GroupSideBar from "../components/GroupSideBar";
import * as api from "../api";

let buttonStyle = {
  // padding: "5px 20px",
  // color: "black",
  // marginLeft: "auto"
  backgroundColor: "#ECECEC",
  width: "100%",
  height: "60px",
  borderRadius: 4,
  marginBottom: "32px",
  justifyContent: "left",
  paddingLeft: "32px",
  paddingRight: "32px",
  paddingTop: "8px",
  alignItems: "center"
};

const GroupHomeLayout = () => {
  const [allPosts, setAllPosts] = React.useState([]);
  const [posts, setPosts] = React.useState([]);
  const [type, setType] = React.useState("View All");
  const [sort, setSort] = React.useState("View All");
  const grpId = useParams().id;
  const [group, setGroup] = React.useState(null);

  React.useEffect(() => {
    // fetch all posts from database
    fetch(api.GET_GROUP_ALL_POSTS_API(grpId))
      .then((response) => response.json())
      .then((data) => {
        setAllPosts([...data.posts].reverse());
        setPosts([...data.posts].reverse());
        setGroup(data.group);
      });
  }, []);

  const handleTypeChange = (event) => {
    let temp = allPosts;
    if (sort !== "View All") {
      // DO SORTING HERE
    }
    if (event.target.value === "View All") {
      setPosts(temp);
      setType(event.target.value);
    } else {
      temp = temp.filter((post) => post.type === event.target.value);
      setPosts(temp);
      setType(event.target.value);
    }
  };

  const handleSortChange = (event) => {
    // Do the filtering here
    setSort(event.target.value);
  };

  return (
    <>
      <NavBar title={group ? group.name : "Loading"} post="true" type="group" />
      <div style={{ height: "32px" }} />
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} md={9}>
          <Grid item xs={12} fullWidth justifyContent="flex-start">
              <a href="/createGroupPost">
                <ButtonBase style={buttonStyle}>
                  <Grid container justifyContent="space-between" alignItems="center">
                    <Grid item>
                      <Typography
                        variant="h4"
                        align="left"
                        sx={{
                          fontSize: "20px",
                          color: "#33363F",
                          fontWeight: 700,
                          marginBottom: "8px",
                        }}
                      >
                        Post to this group..
                      </Typography>
                    </Grid>
                    <Grid item>
                    <Typography
                        variant="h4"
                        align="left"
                        sx={{
                          fontSize: "28px",
                          color: "#33363F",
                          fontWeight: 500,
                          marginBottom: "8px",
                        }}
                      >
                        +
                      </Typography>
                    </Grid>
                  </Grid>

                </ButtonBase>
              </a>
            </Grid>
            <Grid
              container
              direction="row"
              rowGap={2}
              justifyContent="flex-start"
            >
              {/* <Grid item xs={5} sm={4} md={2.5}>
                <FilterButton
                  filterName="Program"
                  filterSelected={program}
                  handleFilterSelected={handleProgramChange}
                  filterOptions={programs}
                />
              </Grid> */}
              <Grid item xs={5} sm={4} md={2.5}>
                <FilterButton
                  filterName="Type"
                  filterSelected={type}
                  handleFilterSelected={handleTypeChange}
                  filterOptions={typeOptions}
                />
              </Grid>
              <Grid item xs={5} sm={4} md={2.5}>
                <FilterButton
                  filterName="Sort"
                  filterSelected={sort}
                  handleFilterSelected={handleSortChange}
                  filterOptions={sortOptions}
                />
              </Grid>
            </Grid>
            <div style={{ height: "32px" }} />
            {posts && posts.length > 0 ? (
              posts.map((post, index) => {
                return (
                  <Post
                    post={post}
                    isHomepage={true}
                    key={post.id}
                    isGroup={grpId}
                  />
                );
              })
            ) : (
              <Typography
                variant="h4"
                align="left"
                sx={{
                  fontSize: "24px",
                  color: "#33363F",
                  fontWeight: 700,
                  marginBottom: "8px",
                }}
              >
                No posts found.
              </Typography>
            )}
          </Grid>
          <Grid item xs={0} md={3}>
            {group && <GroupSideBar group={group} />}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

const groupData = [
  {
    id: "1",
    name: "BOSP Kyoto Fall '22",
    description:
      "This group is for all participants of the BOSP Kyoto program in Fall 2022.",
    numUsers: "5",
    usernames: ["Alex", "Kim", "Takashi", "John", "Hana"],
  },
  {
    id: "2",
    name: "BOSP Ambassadors",
    description:
      "Welcome! This is a hub for all student ambassadors of all BOSP programs.",
    numUsers: "4",
    usernames: ["Melody", "Axel", "Elliot", "Rosie"],
  },
  {
    id: "3",
    name: "Doshisha Fall '22",
    description:
      "This is a group that includes both Stanford and Doshisha students in Kyoto Fall '22.",
    numUsers: "6",
    usernames: ["Isla", "Nancy", "Gerald", "Takashi"],
  },
];

export default GroupHomeLayout;
