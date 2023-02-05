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
    body: "The Moon is a celestial body that orbits the Earth and is the Earth's only permanent natural satellite. It is the fifth largest moon in the solar system and is approximately one-quarter the size of Earth. The Moon was formed about 4.5 billion years ago, shortly after the formation of the solar system. It is believed to have been created from debris that was left over after a massive impact between Earth and a Mars-sized object. The surface of the Moon is heavily cratered and is covered in a layer of fine dust called regolith. The largest impact crater on the Moon is the South Pole-Aitken Basin, which is over 2,500 km wide and 13 km deep. The Moon's surface is also dotted with large, flat areas known as maria, which are the result of ancient volcanic eruptions. The Moon has a very weak atmosphere, known as an exosphere, which consists of a small amount of gases such as helium and argon. There is no water on the Moon's surface, but there is evidence of frozen water in the shadows of craters near the poles. In 2009, NASA's Lunar CRater Observing and Sensing Satellite (LCROSS) mission confirmed the presence of water on the Moon. The Moon's gravitational pull causes the tides on Earth and also affects the Earth's rotation. The Moon's gravity also creates a phenomenon known as lunar libration, which causes the Moon to appear to wobble slightly as it orbits the Earth. This makes it possible to see slightly more or less of the Moon's far side from Earth. The first humans set foot on the Moon on July 20, 1969, during the Apollo 11 mission. Since then, there have been six manned missions to the Moon, all of which were part of the Apollo program. The last time humans visited the Moon was during the Apollo 17 mission in December 1972. Since the end of the Apollo program, there have been numerous unmanned missions to the Moon, including the Lunar Reconnaissance Orbiter (LRO) and the Chinese Chang'e missions. In recent years, there has been a resurgence of interest in exploring and potentially colonizing the Moon. NASA has plans to send astronauts back to the Moon as part of the Artemis program, and private companies such as SpaceX and Blue Origin have also expressed interest in lunar exploration. Since the end of the Apollo program, there have been numerous unmanned missions to the Moon, including the Lunar Reconnaissance Orbiter (LRO) and the Chinese Chang'e missions. In recent years, there has been a resurgence of interest in exploring and potentially colonizing the Moon. NASA has plans to send astronauts back to the Moon as part of the Artemis program, and private companies such as SpaceX and Blue Origin have also expressed interest in lunar exploration.",
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
