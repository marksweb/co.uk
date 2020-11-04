import React from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Col } from "react-bootstrap"

import config from "../../data/SiteConfig";

import "../styles/style.scss";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Container fluid className="px-0 main layout-container">
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <html lang="en" />
        </Helmet>
        {children}
      </Container>
    );
  }
}
