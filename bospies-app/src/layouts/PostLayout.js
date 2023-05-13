import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import * as React from "react";
import { useParams } from "react-router-dom";
import { styled } from "@mui/system";
import NavBar from "../components/NavBar";
import Post from "../components/Post";
import Comment from "../components/Comment";
import homepagePosts from "../json/homepage_posts.json";

const PostBox = styled(Box)({
  padding: "32px",
  backgroundColor: "#F5F5F5",
  borderRadius: 8,
  marginBottom: "20px",
});

const PostLayout = (props) => {
  // const {post} = props;
  const postId = useParams().id;
  const [post, setPost] = React.useState(homepagePosts.find(x => String(x.id) === postId));
  const [comments, setComments] = React.useState(post?.comments);
  const [newComment, setNewComment] = React.useState('');

  const handleNewComment = () => {
    let newPost = post;
    let comment = {
      "username": "testingstudent",
      "date": new Date(Date.now()).toLocaleString().split(',')[0],
      "time": new Date(Date.now()).toLocaleString().split(',')[1],
      "body": newComment,
    };
    newPost.comments = [comment, ...post.comments];
    setNewComment("");
    setPost(post);
    setComments(newPost.comments);
  };

  React.useEffect(() => {
    let cur = homepagePosts.find(x => String(x.id) === postId)
    setPost(cur);
    setComments(cur.comments);
  });

  return (
    <>
      <NavBar title={post.title} />
      <Grid container justifyContent="center" sx={{
        padding: "32px",
      }}>
        <Box maxWidth="md">
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
              <Typography textAlign="left" sx={{color: "#545563"}}>Add a comment...</Typography>
              <TextField 
                fontSize="small" 
                multiline sx={{backgroundColor: "white"}}
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              {newComment.length > 0 &&
              <Grid container sx={{marginTop: "8px"}} justifyContent="flex-end">
                <Button onClick={handleNewComment}>Post comment</Button>
              </Grid>
              }
              <div style={{height: "16px"}}/>
              {comments.length > 0 &&
              comments.map((comment, index) => {
                return (
                  <Comment comment={comment} key={index}/>
                )
              })
              }
            </Grid>
          </PostBox>
        </Box>
      </Grid>
    </>
  )
}

export default PostLayout;