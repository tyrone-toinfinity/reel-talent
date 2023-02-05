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
    body: "The moon illuminates the night sky with a serene beauty, its soft light dances on the waves and brings a peaceful atmosphere to the world below.",
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

  return (
    <div>
      <Navbar />
      {/* <Outlet /> */}
      <section className="blog__main">
        <h2>Blog Posts</h2>
        <ul>
          {hardcodedData.map((post) => (
            <li key={post.id}>
              <Link to={`/blog/${post.id}`} state={post}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
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
