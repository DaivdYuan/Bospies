import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import * as React from "react";
import { useParams } from "react-router-dom";
import { styled } from "@mui/system";
import NavBar from "../components/NavBar";
import Post from "../components/Post";
import Comment from "../components/Comment";
import homepagePosts from "../json/homepage_posts.json";
import groupPosts from "../json/group_posts.json";

import { GET_POST_API, SUBMIT_COMMENT_API } from "../api";

const PostBox = styled(Box)({
  padding: "32px",
  backgroundColor: "#F5F5F5",
  borderRadius: 8,
  marginBottom: "20px",
});

const PostLayout = (props) => {
  const { isGrp = false, groupName } = props;
  const postId = useParams().id;
  const [post, setPost] = React.useState(null);
  const [comments, setComments] = React.useState(post?.comments);
  const [newComment, setNewComment] = React.useState("");

  const handleNewComment = () => {
    let newPost = post;
    let comment = {
      username: "testingstudent",
      date: new Date(Date.now()).toLocaleString().split(",")[0],
      time: new Date(Date.now()).toLocaleString().split(",")[1],
      body: newComment,
      post_id: postId,
    };
    newPost.comments = [comment, ...post.comments];
    setNewComment("");
    setPost(post);
    setComments(newPost.comments);

    fetch(SUBMIT_COMMENT_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    });

  };

  
  React.useEffect(() => {
    let cur = isGrp
      ? groupPosts.find((x) => String(x.id) === postId)
      : homepagePosts.find((x) => String(x.id) === postId);
    if (!cur) return;
    setPost(cur);
    setComments(cur.comments);
  });
  

  React.useEffect(() => {
    if (isGrp || post) return;
    // fetch from api
    fetch(GET_POST_API + postId)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.post);
        setPost(data.post);
        setComments(data.post.comments);
      });
  }, []);

  return (
    <>
      <NavBar title={post ? post.title : "Error"} />
      <Grid
        container
        justifyContent="center"
        sx={{
          padding: "32px",
        }}
      >
        {post ? (
          <Box 
            maxWidth="md"
            minWidth="70%"
          >
            <Post post={post} />

            <div sx={{ height: "16px" }} />
            <PostBox justifyContent="flex-start">
              <Grid container direction="column">
                <Typography
                  sx={{
                    fontSize: "24px",
                    color: "#33363F",
                    fontWeight: 700,
                    marginBottom: "8px",
                  }}
                  textAlign="left"
                >
                  Conversation
                </Typography>
                <Typography textAlign="left" sx={{ color: "#545563" }}>
                  Add a comment...
                </Typography>
                <TextField
                  fontSize="small"
                  multiline
                  sx={{ backgroundColor: "white" }}
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                />
                {newComment.length > 0 && (
                  <Grid
                    container
                    sx={{ marginTop: "8px" }}
                    justifyContent="flex-end"
                  >
                    <Button onClick={handleNewComment}>Post comment</Button>
                  </Grid>
                )}
                <div style={{ height: "16px" }} />
                {comments &&
                  comments.length > 0 &&
                  comments.map((comment, index) => {
                    return <Comment comment={comment} key={index} />;
                  })}
              </Grid>
            </PostBox>
          </Box>
        ) : (
          <Typography
            sx={{
              fontSize: "24px",
              color: "#33363F",
              fontWeight: 700,
              marginBottom: "8px",
            }}
            textAlign="left"
          >
            Loading or Post not found!
          </Typography>
        )
      }
      </Grid>
    </>
  );
};

export default PostLayout;
