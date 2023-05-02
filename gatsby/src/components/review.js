import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "./review.module.css";

const processTag = (tag) => {
  if (tag.startsWith("imdb:")) {
    const imdb_id = tag.split(":")[1];
    const url = `https://www.imdb.com/title/${imdb_id}`;
    return <a href={url}>{url}</a>;
  } else if (tag.startsWith("rqd:")) {
    const rqd = parseInt(tag.split(":")[1], 10);
    if(!isNaN(rqd)) {
      return `Rock Quality Designation: ${'🪨'.repeat(rqd)}`
    }
  }
  return null;
};

const Review = ({ post }) => {
  // adapted from https://github.com/gatsbyjs/gatsby-starter-wordpress-blog
  const featuredImage = {
    data: post.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
    alt: post.featuredImage?.node?.alt || ``,
  };
  return (
    <article className={styles.review}>
      <header>
        <h1>{post.title}</h1>
        <p className={styles.date}>{post.date}</p>
        <ul className={styles.tags}>
          {post.tags.nodes
            .map((node) => processTag(node.name))
            .filter((item) => item !== null)
            .map((item) => {
              return <li>{item}</li>;
            })}
        </ul>
      </header>
      {/* if we have a featured image for this post let's display it */}
      {featuredImage?.data && <GatsbyImage image={featuredImage.data} alt={featuredImage.alt} />}
      <section dangerouslySetInnerHTML={{ __html: post.content }}></section>
    </article>
  );
};

export default Review;
