import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image"
import * as styles from "./review.module.css";

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
        <p>{post.date}</p>
      </header>
      {/* if we have a featured image for this post let's display it */}
      {featuredImage?.data && (
        <GatsbyImage image={featuredImage.data} alt={featuredImage.alt} />
      )}
      <section dangerouslySetInnerHTML={{ __html: post.content }}></section>
    </article>
  );
};

export default Review;
