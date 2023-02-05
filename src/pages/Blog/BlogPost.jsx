import "./BlogPost.css";
// Component
import { Link, useParams, useLocation } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { SiteFooter } from "../../components/SiteFooter";

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
  // Calculate Reading Time
  const words = post.body.split(" ").length;
  const readingSpeed = 250; // 250 words per minute
  const readingTimeInMinutes = Math.ceil(words / readingSpeed);
  // const readingTimeInSeconds = readingTimeInMinutes * 60;

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
        <p className="blogPost__readTime">
          {`${readingTimeInMinutes} ${
            readingTimeInMinutes === 1 ? "min" : "mins"
          }`}{" "}
          read time
        </p>
        <p className="blogPost__date">{formattedDate}</p>

        <p className="blogPost__pg">{post.body}</p>
        <p className="blogPost__author">Author: {post.author}</p>

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
