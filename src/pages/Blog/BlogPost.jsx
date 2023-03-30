import "./BlogPost.css";
// Component
import { Link, useParams, useLocation } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { SiteFooter } from "../../components/SiteFooter";
import { ErrorPage } from "../Error/ErrorPage";
import { Loading } from "../../components/Loading";
// Assets
import { BsChevronLeft, BsLinkedin } from "react-icons/bs";
// Packages
import { useState, useEffect } from "react";

export const BlogPost = () => {
  const location = useLocation();
  const post = location.state.post;
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    // Fetch data here
    if (post.hasOwnProperty("body")) {
      setIsLoading(false);
    } else {
      setIsLoading(false);
      setError(true);
    }
  }, [post]);

  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  if (error) {
    return <ErrorPage />;
  }
  // Calculate Reading Time
  const fullText = post.body.join(" ");
  const words = fullText.split(" ").length;
  const readingSpeed = 250; // 250 words per minute
  const readingTimeInMinutes = Math.ceil(words / readingSpeed);

  // console.log(post);
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
              <Link to={post.linkedin_link}>
                <img
                  className="blogPost__authorImg"
                  src={post.author_image}
                  alt="author"
                />
              </Link>
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
                  <BsLinkedin className="author__social" />
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
