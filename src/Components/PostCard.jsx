import React from "react";
import useGetPost from "../Utility/useGetPost";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// import SkeletonLoading from "./SkeletonLoading";

const PostCard = () => {
  // creating custom hooks
  const post = useGetPost();
  console.log(post);
  if (Object.keys(post).length === 0 || undefined)
    return (
      <div className="loading">
         <h1>Loading....</h1>
      </div>
    )

  return (
    <Box className="box">
      {post.map((post) => {
        return (
          <Card sx={{ maxWidth: 355 }} key={post?.id}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Title : {post?.title}
              </Typography>
              <hr />
              <Typography variant="body2" color="text.secondary">
                <h2>Discription</h2>
                {post?.body}
              </Typography>
            </CardContent>
            <hr />
            <CardActions>
              <Typography variant="body2" color="text.secondary">
                {post?.tags?.join(", ")}
              </Typography>
            </CardActions>
            <Button size="small"> Reaction : {post?.reactions}/10</Button>
          </Card>
        );
      })}
    </Box>
  );
};

export default PostCard;
