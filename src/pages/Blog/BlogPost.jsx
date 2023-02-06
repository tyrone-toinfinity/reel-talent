import "./BlogPost.css";
// Component
import { Link, useParams, useLocation } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { SiteFooter } from "../../components/SiteFooter";
// Assets
import { BsChevronLeft, BsLinkedin } from "react-icons/bs";

export const BlogPost = () => {
  const { id } = useParams();
  const location = useLocation();
  const post = location.state.post;
  // Date
  // const date = post.published_date.toDate();
  // const formattedDate = date.toLocaleDateString("default", {
  //   month: "short",
  //   day: "numeric",
  //   year: "numeric",
  // });

  // Calculate Reading Time
  // const words = post.body.split(" ").length;
  // const readingSpeed = 250; // 250 words per minute
  // const readingTimeInMinutes = Math.ceil(words / readingSpeed);
  return (
    <div>
      <Navbar />

      <section className="blogPost__main">
        <div className="blogPost_wrapper">
          <Link className="blogPost__back" to={"/blog"}>
            <BsChevronLeft /> blog
          </Link>
          <div className="blogPost__header">
            <h1>{post.title}</h1>
            <img
              className="blogPost__image"
              src={post.image_url}
              alt={post.title}
            />
          </div>
          <p className="blogPost__date"></p>

          <div className="blogPost__body">
            {post.body.map((para, index) => (
              <p key={index} className="blogPost__pg">
                {para}
              </p>
            ))}
            <div className="author__container">
              <img
                className="blogPost__authorImg"
                src={post.author_image}
                alt="author"
              />
              <span>
                <Link to={"https://www.linkedin.com/in/bobbywoody/"}>
                  <p className="blogPost__pg"> {post.author}</p>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
};

{
  /* <p className="blogPost__readTime">
          {`${readingTimeInMinutes}${
            readingTimeInMinutes === 1 ? "min" : "mins"
          }`}{" "}
          read time
        </p> */
}
