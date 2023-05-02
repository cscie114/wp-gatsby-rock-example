import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Review from "../components/review";

const ReviewsPage = ({ data }) => {
  return (
    <Layout>
      {data.allWpPost.nodes.map((node) => {
        return <Review key={node.id} post={node}></Review>;
      })}
    </Layout>
  );
};

export const query = graphql`
  query AllPosts {
    allWpPost(
      filter: { status: { eq: "publish" }, categories: { nodes: { elemMatch: { name: { eq: "reviews" } } } } }
      sort: { date: DESC }
    ) {
      nodes {
        id
        databaseId
        status
        title
        date(formatString: "MMMM DD, YYYY")
        content
        tags {
          nodes {
            name
          }
        }
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], width: 200)
              }
            }
          }
        }
      }
    }
  }
`;

export const Head = () => <title>Reviews</title>;

export default ReviewsPage;
