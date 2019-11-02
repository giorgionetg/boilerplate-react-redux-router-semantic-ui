import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Container, Segment, Responsive } from 'semantic-ui-react';

class NavBar extends React.Component {

  render() {
    return(
      <Segment vertical>

          <Menu size='large' fixed='top'>
            <Container text>
              <Menu.Item><Link to='/'>Template Boiler Plate</Link></Menu.Item>
              <Menu.Item><Link to='/about-me'>About Me</Link></Menu.Item>
            </Container>
          </Menu>

      </Segment>
    );
  }
}

export default NavBar;
