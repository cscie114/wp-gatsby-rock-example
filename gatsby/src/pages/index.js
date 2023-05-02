import * as React from "react"
import Layout from '../components/layout';
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout>
      <p><b>Pandemic goal:</b> watch all of <a href="https://www.imdb.com/name/nm0425005/">Dwayne <i>The Rock</i> Johnson's</a> movies</p>
      <StaticImage src="../images/dwayne-the-rock-johnson.jpg" alt="Dwayne The Rock Johnson"></StaticImage>
      <p style={{marginLeft:"2rem"}}>We failed.</p>
      <p style={{marginLeft:"2rem"}}>But, we did watch a bunch! And here are our thoughts.</p>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
