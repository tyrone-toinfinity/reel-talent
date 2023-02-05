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

const hardcodedData = [
  {
    id: 1,
    title: "The sun",
    body: "The sun is a magnificent and beautiful celestial object, radiating warmth, light, and life onto the earth. Its vibrant golden hues, shimmering rays, and awe-inspiring presence in the sky make it an incomparable sight to behold.",
    author: "John Doe",
    published_date: "2022-01-01",
    image_url:
      "https://images.unsplash.com/photo-1575881875475-31023242e3f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 2,
    title: "The Moon",
    body: "The Moon is a celestial body that orbits the Earth to the Moon as part ofte companies such as SpaceX and Blue Origin have also expressed interest in lunar exploration.",
    author: "John Doe",
    published_date: "2022-01-01",
    image_url:
      "https://images.unsplash.com/photo-1479090793912-eb9929f4fdb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1268&q=80",
  },
  {
    id: 3,
    title: "The Ocean",
    body: "The ocean is a vast and captivating body of water, filled with an abundance of life, diverse landscapes, and beautiful sunsets.",
    author: "Nike Doe",
    published_date: "2022-01-01",
    image_url:
      "https://images.unsplash.com/photo-1559825481-12a05cc00344?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",
  },
  {
    id: 4,
    title: "The ground",
    body: "The ground, a solid foundation that provides stability and growth, nurturing plants and animals, and shaping the natural beauty of the earth.",
    author: "Janny Doe",
    published_date: "2022-02-01",
    image_url:
      "https://images.unsplash.com/photo-1547235001-d703406d3f17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80",
  },
];

export const Blog = () => {
  // const [posts, setPosts] = useState([]);
  // const postCol = collection(db, "posts");

  // useEffect(() => {
  //   getDocs(postCol).then((ss) => {
  //     setPosts(ss.docs);
  //   });
  // }, [postCol]);

  const lastElement = hardcodedData[hardcodedData.length - 1];

  // Date
  // Hero date
  const date = new Date(lastElement.published_date);
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div>
      <Navbar />
      {/* <Outlet /> */}
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
        <Link to={`/blog/${lastElement.title}`} state={lastElement}>
          <div class="blog__heroContainer">
            <img
              className="blog__heroImg"
              src={lastElement.image_url}
              alt=""
              srcset=""
            />
            <div class="blog__heroInfo">
              <div class="blog__date">
                <span className="blog__author"> {lastElement.author}</span>
                {formattedDate}
              </div>
              <div class="blog__title">{lastElement.title}</div>
            </div>
          </div>
        </Link>
        <div class="card card__main d-flex flex-wrap">
          {hardcodedData.map((post) => (
            <div
              class="card blog__cardContainer col-xl-3 col-lg-4 col-md-6 col-sm-12"
              key={post.id}
            >
              <Link to={`/blog/${post.id}`} state={post}>
                <img src={post.image_url} class="card-img-top" alt="..." />
                <div class="card-body">
                  <div class="d-flex justify-content-between">
                    <span class="card-text"> {post.author} • </span>
                    <span class="card-text">{post.published_date}</span>
                  </div>
                  <h5 class="card-title">{post.title}</h5>
                  <p class="card-text">{post.body}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link
                to={`/blog/${post.data().title}`}
                state={{ post: post.data() }}
              >
                {post.data().title}
              </Link>
            </li>
          ))}
        </ul> */}
      </section>
      <SiteFooter />
    </div>
  );
};
