import axios from "axios";
import moment from "moment";
import React from "react";
import ReactHtmlParser from "react-html-parser";

function Blog({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <img src={post.uagb_featured_image_src.full[0]} alt={post.title.rendered} style={{width:'383px'}} />
          <p>{post.categories["0"]}</p>
          <h2>{post.title.rendered}</h2>
          <p>{moment(post.date).format("DD/MM/YYYY")}</p>
          <p>{ReactHtmlParser(post.excerpt.rendered.slice(0, 200))}...</p>
          <a href={post.link}>Leia mais</a>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const response = await axios.get(
    "https://americasoftalmocenter.com/wp-json/wp/v2/posts?per_page=2&?_embed"
  );
  const posts = response.data;
  return {
    props: {
      posts,
    },
  };
}

export default Blog;
