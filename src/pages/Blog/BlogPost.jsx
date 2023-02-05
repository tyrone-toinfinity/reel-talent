// CSS
import "./BlogPost.css";
// Component
import { Link, useParams, useLocation } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { SiteFooter } from "../../components/SiteFooter";

//Package
// import readingTime from "reading-time";

export const BlogPost = () => {
  const { id } = useParams();
  const location = useLocation();
  const post = location.state;

  // Date
  const date = new Date(post.published_date);
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  // const readingTimeResult = readingTime(post.body);
  // const readingTimeInMinutes = readingTimeResult.text;

  return (
    <div>
      <Navbar />
      <section className="blogPost__main">
        <div className="blogPost__header">
          <h1>{post.title}</h1>
          <img
            className="blogPost__image"
            src={post.image_url}
            alt={post.title}
          />
        </div>

        <p className="blogPost__pg">{post.body}</p>
        <p className="blogPost__author">Author: {post.author}</p>
        {/* <p className="blogPost__read-time">{readTime.text}</p> */}
        <p className="blogPost__date">{formattedDate}</p>
        <Link className="blogPost__back" to={"/blog"}>
          back
        </Link>
      </section>
      <SiteFooter />
    </div>
  );
};

// export const BlogPost = () => {
//   const { id } = useParams();
//   const location = useLocation();
//   const post = location.state.post;
//   console.log(post);
//   return (
//     <div>
//       <Navbar />
//       <h1>test</h1>
//       <img src={post.image_url} alt={post.title} />
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>
//       <p>Author: {post.author}</p>
//       <p>Published Date: {post.published_date}</p>
//       <Link to={"/blog"}>back</Link>
//     </div>
//   );
// };
