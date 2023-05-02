// CSS
import "./Blog.css";
// Components
import { ErrorPage } from "../Error/ErrorPage";
import { Loading } from "../../components/Loading";
import { db } from "../../firebaseConfig";
// Packages
import { useState, useEffect, useMemo } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { Link } from "react-router-dom";

// Assets
import paint_strokes from "../../assets/svg/paint_strokes.svg";

export const Blog = () => {
  // Fetch data
  const [posts, setPosts] = useState([]);
  const postCol = useMemo(() => collection(db, "posts"), []);
  // Error Handling
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch data and sort by published date in descending order
    const fetchPosts = async () => {
      try {
        const q = query(postCol, orderBy("published_date", "desc"));
        const ss = await getDocs(q);
        setPosts(ss.docs);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setError(true);
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, [postCol]);
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <ErrorPage />;
  }
  return (
    <div>
      {/* Blog Hero */}
      <section className="blog__main">
        <div className="blog__header">
          {" "}
          <h3 className="blog__heading3">the reel blog</h3>
          <div className="blog__heading-container">
            <h2 className="blog__heading2">Writings from our team</h2>
            <img
              src={paint_strokes}
              className="paint__strokes"
              height={30}
              alt=""
            />
          </div>
          <h4 className="blog__heading4">
            Stay informed with Reel Talent blog's latest industry news,
            including best hiring practices.
          </h4>
        </div>

        {/* Cards */}
        <div className="card card__main">
          {posts.map((post) => (
            <div className="row mb-3 blog__cardContainer" key={post.id}>
              <div className="col-md-8 col-sm-12 listing__description">
                <div className="card-body">
                  <Link
                    to={`/blog/${post.data().title}`}
                    state={{ post: post.data() }}
                  >
                    <div className="d-flex justify-content-between">
                      <span className="card-text">{post.data().author} • </span>
                      <span className="card-text">
                        {new Date(
                          post.data().published_date.toDate()
                        ).toLocaleDateString("default", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <h5 className="card-title post__title">
                      {post.data().title}
                    </h5>
                  </Link>
                  <p className="card-text post__summary">
                    {post.data().summary}
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 align-self-center ">
                <Link
                  to={`/blog/${post.data().title}`}
                  state={{ post: post.data() }}
                >
                  <img
                    src={post.data().image_url}
                    className="card-img-top "
                    alt="..."
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
