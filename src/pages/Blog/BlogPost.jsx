// CSS
import "./BlogPost.css";
// Packages
import { Link, useParams, useLocation } from "react-router-dom";
import { Navbar } from "../../components/Navbar";

// export const BlogPost = ({ location }) => {
//   const post = location.state.post;
//   console.log("brick");
//   return (
//     <div>
//       <h1>{post.data().title}</h1>
//       <p>{post.data().body}</p>
//       <p>Author: {post.data().author}</p>
//       <p>Published Date: {post.data().published_date}</p>
//     </div>
//   );
// };
// };

export const BlogPost = () => {
  const { id } = useParams();
  const location = useLocation();
  const post = location.state;
  console.log(post);

  return (
    <div>
      <Navbar />
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <p>Author: {post.author}</p>
      <p>Published Date: {post.published_date}</p>
      <Link to={"/blog"}>back</Link>
    </div>
  );
};
