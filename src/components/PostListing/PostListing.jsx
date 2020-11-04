import React from "react";
import { Button, Card, Row } from "react-bootstrap"
import moment from "moment"

import "../../styles/style.scss";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: moment(postEdge.node.fields.date).format("Do MMMM YYYY"),
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }

  render() {
    const postList = this.getPostList();
    return (
      <Row className="posts fluid">
        {/* Your post list here. */
        postList.map(post => (
          <Card style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src="{post.cover}" /> */}
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>
                {post.excerpt}
              </Card.Text>
              <Button href={post.path} variant="primary">
                Read
              </Button>
            </Card.Body>
            <Card.Footer className="text-muted">{post.date}</Card.Footer>
          </Card>

        ))
}
      </Row>
    );
  }
}

export default PostListing;
