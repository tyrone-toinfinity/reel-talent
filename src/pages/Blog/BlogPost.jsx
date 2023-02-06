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

  // Calculate Reading Time
  const fullText = post.body.join(" ");
  const words = fullText.split(" ").length;
  const readingSpeed = 250; // 250 words per minute
  const readingTimeInMinutes = Math.ceil(words / readingSpeed);
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
            <div className="blogPost__pg blogPost__readTime">
              <p>
                {`${readingTimeInMinutes} ${
                  readingTimeInMinutes === 1 ? "min" : "mins"
                }`}{" "}
                read time
              </p>
            </div>
            <div
              style={{
                backgroundColor: "forestgreen",
                height: "1px",
                width: "50%",
                margin: "auto",
              }}
            />
          </div>

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
                <Link to={post.linkedin_link} className="blogPost__pg">
                  <p> {post.author}</p>
                  <p>
                    {new Date(
                      post.published_date.seconds * 1000
                    ).toLocaleDateString("default", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                  <BsLinkedin />
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
