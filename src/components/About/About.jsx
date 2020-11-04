import React, { Component } from "react";
import { Container, Row } from "react-bootstrap"

import "../../styles/style.scss";

class About extends Component {
  render() {
    return (
      <Container className="about">
        <Row>
          <h1>Mark Walker</h1>
        </Row>
        
        <Row>
          <p>
            I'm a developer, usually writing python to create django applications running on Amazon Web Services (AWS).
          </p>

          <p>
            You'll also find me active on <a target="_blank" href="https://stackoverflow.com/users/1199464/markwalker">StackOverflow</a> and 
            <a target="_blank" href="https://github.com/marksweb">GitHub</a>.
          </p>
          
          <p>
            Speaking of which, I'm maintainer of <a href="https://github.com/marksweb/django-bleach">django-bleach</a> and 
            <a target="_blank" href="https://github.com/groveco/django-sql-explorer">django-sql-explorer</a>.
          </p>

          <p>
            If you'd like some help maintaining a project - let me know.
          </p>
        </Row>
      </Container>
    );
  }
}

export default About;
