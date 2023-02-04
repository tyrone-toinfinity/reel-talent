// CSS
import "./Blog.css";
// Components
import { Navbar } from "../../components/Navbar";
import { SiteFooter } from "../../components/SiteFooter";
import { db } from "../../firebaseConfig";
// Packages
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate, Outlet, Link, useLocation } from "react-router-dom";
import { BlogPost } from "./BlogPost";

const hardcodedData = [
  {
    id: 1,
    title: "First Blog Post",
    body: "This is the first blog post",
    author: "John Doe",
    published_date: "2022-01-01",
  },
  {
    id: 2,
    title: "Secon Blog Post",
    body: "This is the second blog post",
    author: "John Doe",
    published_date: "2022-01-01",
  },
  {
    id: 3,
    title: "third Blog Post",
    body: "This is the 3 blog post",
    author: "Nike Doe",
    published_date: "2022-01-01",
  },
  {
    id: 4,
    title: "four Blog Post",
    body: "This is the four blog post",
    author: "Janny Doe",
    published_date: "2022-02-01",
  },
];

export const Blog = () => {
  // const [posts, setPosts] = useState([]);
  // const postCol = collection(db, "posts");
  const navigate = useNavigate();

  // useEffect(() => {
  //   getDocs(postCol).then((ss) => {
  //     setPosts(ss.docs);
  //   });
  // }, [postCol]);

  return (
    <div>
      <Navbar />
      <Outlet />
      <h2>Blog Posts</h2>
      <ul>
        {hardcodedData.map((post) => (
          <li key={post.id}>
            <Link
              to={{
                pathname: `/blog/${post.title}`,
                state: { post },
              }}
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>

      {/* <ul>
        {hardcodedData.map((post) => (
          <li
            key={post.id}
            className="nav__links"
            onClick={() => history.push(`/blog/${post.title}`)}
          >
            {post.title}
          </li>
        ))} 
      </ul>*/}

      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate(`/blog/${post.data().title}`, { state: { post } });
              }}
            >
              {post.data().title}
            </a>
          </li>
        ))}
      </ul> */}
      <SiteFooter />
    </div>
  );
};
