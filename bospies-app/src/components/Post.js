import * as React from "react";
import { Box, Typography, Grid, Stack, ButtonBase } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/system";
import colors from "../json/colors.json";

const PostBox = styled(Box)({
  padding: "32px",
  backgroundColor: "#F5F5F5",
  // opacity: 0.4,
  borderRadius: 8,
  // justifyContent: "flex-start"
  marginBottom: "20px",
});

const thumbnailImage = {
  width: "100%",
  height: "160px",
  borderRadius: "8px",
};

const Post = (props) => {
  const { post, isHomepage = false } = props;

  return (
    <PostBox justifyContent="flex-end">
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ marginBottom: "8px" }}
      >
        <Grid item>
          <Grid container columnGap={1} alignItems="center">
            <AccountCircleIcon sx={{ color: "#C16D68" }} fontSize="large" />
            <Typography sx={{ fontSize: "16px" }}>{post.username}</Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Stack direction="row" columnGap={1}>
            <Box
              sx={{
                backgroundColor: colors[post.type],
                padding: "4px 12px",
                borderRadius: 40,
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  textTransform: "uppercase",
                  fontSize: "12px",
                }}
              >
                {post.type}
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: colors[post.program],
                padding: "4px 12px",
                borderRadius: 40,
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  textTransform: "uppercase",
                  fontSize: "12px",
                }}
              >
                {post.program}
              </Typography>
            </Box>
          </Stack>
        </Grid>
      </Grid>
      <Typography
        sx={{
          fontSize: "24px",
          color: "#33363F",
          fontWeight: 700,
          marginBottom: "8px",
        }}
        textAlign="left"
      >
        {post.title}
      </Typography>
      {isHomepage ? (
        <>
          {post.images.length === 0 ? (
            <Typography
              sx={{
                fontSize: "18px",
                color: "#33363F",
                fontWeight: 400,
                textOverflow: "ellipsis",
                overflow: "hidden",
                display: "-webkit-box",
                WebkitLineClamp: 4,
                WebkitBoxOrient: "vertical",
              }}
              textAlign="left"
            >
              {post.body}
            </Typography>
          ) : (
            <Grid container justifyContent="space-between">
              <Grid item xs={8} sx={{ paddingRight: "20px" }}>
                <Typography
                  sx={{
                    fontSize: "18px",
                    color: "#33363F",
                    fontWeight: 400,
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: 5,
                    WebkitBoxOrient: "vertical",
                  }}
                  textAlign="left"
                >
                  {post.body}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <div style={{ position: "relative" }}>
                  <img src={post.images[0]} style={thumbnailImage}></img>
                  {post.images.length > 1 && (
                    <div
                      style={{
                        position: "absolute",
                        bottom: "10px",
                        right: "10px",
                        backgroundColor: "#F5F5F5",
                        width: "28px",
                        height: "28px",
                        borderRadius: 4,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontWeight: 600,
                      }}
                    >
                      +{post.images.length - 1}
                    </div>
                  )}
                </div>
              </Grid>
            </Grid>
          )}
        </>
      ) : (
        <Typography
          sx={{ fontSize: "18px", color: "#33363F", fontWeight: 400 }}
          textAlign="left"
        >
          {post.body}
        </Typography>
      )}
      <Grid container justifyContent="flex-end" sx={{ marginTop: "12px" }}>
        <ButtonBase>
          <AddIcon
            sx={{ color: "#33363F", stroke: "#33363F", marginRight: "4px" }}
          />
          <Typography
            sx={{ fontSize: "18px", fontWeight: "bold", color: "#33363F" }}
          >
            Join Convo
          </Typography>
        </ButtonBase>
      </Grid>
    </PostBox>
  );
};

export default Post;
