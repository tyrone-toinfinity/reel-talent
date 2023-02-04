// CSS
import "./BlogPost.css";
// Packages
import React, { useParams, useLocation } from "react";
import { Link, Route } from "react-router-dom";

export const BlogPost = ({ location }) => {
  const post = location.state.post;
  console.log("brick");
  return (
    <div>
      <h1>{post.data().title}</h1>
      <p>{post.data().body}</p>
      <p>Author: {post.data().author}</p>
      <p>Published Date: {post.data().published_date}</p>
    </div>
  );
};

// };
// export const BlogPost = () => {
//   const location = useLocation();
//   const post = location.state.post;

//   console.log("props", newBlog);

//   return (
//     <div>
//       <h1>blog post</h1>
//       <hr />
//       <Link to={"/blog"}>back</Link>
//     </div>
//   );
// };
