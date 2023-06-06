import { Container } from "@mui/system";
import { Grid, Typography, Button, ButtonBase } from "@mui/material";
import * as React from "react";
import FilterButton from "../components/FilterButton";
import Post from "../components/Post";
import programs from "../json/programs.json";
import typeOptions from "../json/type.json";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import sortOptions from "../json/sort_options.json";
import homepagePosts from "../json/homepage_posts.json";
import * as api from "../api";

const HomepageLayout = (props) => {
  const [allPosts, setAllPosts] = React.useState([]);
  const [posts, setPosts] = React.useState([]);
  const [program, setProgram] = React.useState("View All");
  const [type, setType] = React.useState("View All");
  const [sort, setSort] = React.useState("View All");

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

  React.useEffect(() => {
    // fetch all posts from database
    fetch(api.GET_ALL_POSTS_API)
      .then((response) => response.json())
      .then((data) => {
        setAllPosts([...data.posts].reverse());
        setPosts([...data.posts].reverse());
      });
  }, []);

  const handleProgramChange = (event) => {
    let temp = allPosts;
    console.log(type);
    if (type !== "View All") {
      temp = temp.filter((post) => post.type === type);
    }
    if (sort !== "View All") {
      // DO SORTING HERE
    }
    if (event.target.value === "View All") {
      setPosts(temp);
      setProgram(event.target.value);
    } else {
      temp = temp.filter((post) => post.program === event.target.value);
      setPosts(temp);
      setProgram(event.target.value);
    }
  };

  const handleTypeChange = (event) => {
    let temp = allPosts;
    if (program !== "View All") {
      temp = temp.filter((post) => post.program === program);
    }
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
    <div>
      <NavBar title="Home" post="true" type="home" />
      <div style={{ height: "32px" }} />
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} md={9}>
            <Grid item xs={12} fullWidth justifyContent="flex-start">
              <Typography
              variant="h4"
              align="left"
              sx={{
                fontSize: "20px",
                color: "#33363F",
                fontWeight: 700,
                marginBottom: "16px",
                paddingLeft: "32px"
              }}>
                Have a study-abroad question or experience you want to share? 
              </Typography>
              <a href="/createPost">
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
                        Create a post..
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
              <Grid item xs={5} sm={4} md={2.5}>
                <FilterButton
                  filterName="Program"
                  filterSelected={program}
                  handleFilterSelected={handleProgramChange}
                  filterOptions={programs}
                />
              </Grid>
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
                return <Post post={post} isHomepage={true} key={post.id} />;
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
            <SideBar />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HomepageLayout;
