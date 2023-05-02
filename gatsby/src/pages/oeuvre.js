import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import * as styles from "./oeuvre.module.css";

const OuevrePage = ({ data }) => {
  const nodes = data.allRockMoviesJson.nodes;
  return (
    <Layout>
        <div className={styles.movies}>
        {nodes.map((node) => {
          const image = getImage(node.localImage)
          return (
            <div key={node.id}>
                {/* {node.Year} {node.Title} */}
                <a href={"https://www.imdb.com/title/"+node.imdbID}>
                    <GatsbyImage image={image} alt={node.Title}></GatsbyImage>
                </a>
            </div>);
        })}
        </div>
    </Layout>
  );
};

export const query = graphql`
  query AllRockMovies {
    allRockMoviesJson(sort: { Year: ASC }) {
      nodes {
        id
        Title
        imdbID
        Genre
        Actors
        Poster
        Year
        localImage {
          childImageSharp {
            gatsbyImageData(width: 200)
          }
        }
      }
    }
  }
`;

export const Head = () => <title>Home Page</title>;

export default OuevrePage;