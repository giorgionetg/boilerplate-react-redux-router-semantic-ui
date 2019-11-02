import React from 'react';

import { Header, Button, Container, Segment } from 'semantic-ui-react';


class HomePage extends React.Component {


  render() {
    return (
      <Segment vertical>
        <Container text>
          <br />
          <Header>Base App Template</Header>
          <p>Based on Semantic UI (React version) with:</p>
          <ul>
            <li>React Redux</li>
            <li>React Router</li>
          </ul>
        </Container>
      </Segment>
    );
  }
}

export default HomePage;
