import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { container } from "./layout.module.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={container}>
      <header>
        <h1>{data.site.siteMetadata.title}</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/reviews">Hot Takes</Link>
          <Link to="/oeuvre">Oeuvre</Link>
        </nav>
      </header>
      <main>
        {children}
      </main>
      <footer>
        Disclaimer: Demo for CSCI E-114 Spring 2023 (not an actual website)
      </footer>
    </div>
  );
};

export default Layout;