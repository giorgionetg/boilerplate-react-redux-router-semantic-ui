import React from 'react';

import { Header, Button, Segment, Container } from 'semantic-ui-react';


class AboutMe extends React.Component {


  render() {
    return (
      <Segment vertical>
        <Container text>
          <br />
          <Header>About me</Header>
          <p>Giorgio Tedesco is a web dev fullstack based in Rome Italy, specialized on:</p>
          <ul>
            <li>Php/Apache/MySql</li>
            <li>Node Js (React)</li>
          </ul>
        </Container>
      </Segment>
    );
  }
}

export default AboutMe;
