// CSS
import "./Blog.css";
// Components
import { Navbar } from "../../components/Navbar";
import { SiteFooter } from "../../components/SiteFooter";
import { db } from "../../firebaseConfig";
// Packages
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { Outlet, Link } from "react-router-dom";
import { BlogPost } from "./BlogPost";

// Assets
import paint_strokes from "../../assets/svg/paint_strokes.svg";

export const Blog = () => {
  const [posts, setPosts] = useState([]);
  const postCol = collection(db, "posts");

  useEffect(() => {
    getDocs(postCol).then((ss) => {
      setPosts(ss.docs);
    });
  }, []);

  // const lastElement = posts[posts.length - 1].data();

  return (
    <div>
      <Navbar />
      {/* Blog Hero */}
      <section className="blog__main">
        <div className="blog__header">
          {" "}
          <h3 className="blog__heading3">the reel Blog</h3>
          <div className="blog__heading-container">
            <h2 className="blog__heading2">Writings from our team</h2>
            <img src={paint_strokes} className="paint_strokes" alt="" />
          </div>
          <h4 className="blog__heading4">
            The latest industry news on best hiring practice in action and more
            on Reel Talent blog.
          </h4>
        </div>
        {/* <Link to={`/blog/${lastElement.title}`} state={lastElement}>
          <div class="blog__heroContainer">
            <img className="blog__heroImg" src={lastElement.image_url} alt="" />
            <div class="blog__heroInfo">
              <div class="blog__date">
                <span className="blog__author"> {lastElement.author}</span>
              </div>
              <div class="blog__title">{lastElement.title}</div>
            </div>
          </div>
        </Link> */}
        {/* Cards */}
        <div class="card card__main">
          {posts.map((post) => (
            <div class="row mb-3 blog__cardContainer" key={post.id}>
              <div class="col-md-8 listing__description">
                <div class="card-body">
                  <Link
                    to={`/blog/${post.data().title}`}
                    state={{ post: post.data() }}
                  >
                    <div class="d-flex justify-content-between">
                      <span class="card-text">{post.data().author} • </span>
                      <span class="card-text">
                        {new Date(
                          post.data().published_date.toDate()
                        ).toLocaleDateString("default", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <h5 class="card-title post__title">{post.data().title}</h5>
                  </Link>
                  <p class="card-text post__summary">{post.data().summary}</p>
                </div>
              </div>
              <div class="col-md-4">
                <Link
                  to={`/blog/${post.data().title}`}
                  state={{ post: post.data() }}
                >
                  <img
                    src={post.data().image_url}
                    class="card-img-top"
                    alt="..."
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
};
