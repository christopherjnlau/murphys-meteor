import React from 'react';
import { Menu, Image, Container, Icon } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    return (
        <div className='tops'>
          <Container>
            <Menu white relaxed borderless secondary>
              <Menu.Item>
                <Image src='http://murphyshawaii.com/media/2014/04/murphyshawaii.png' right inline />
              </Menu.Item>
              <Menu.Menu position='right'>
                <Menu.Item>Home</Menu.Item>
                <Menu.Item>About us</Menu.Item>
                <Menu.Item>St. Patrick's Day</Menu.Item>
                <Menu.Item>Menus</Menu.Item>
                <Menu.Item>Bar</Menu.Item>
                <Menu.Item><Icon name='search' /></Menu.Item>
              </Menu.Menu>
            </Menu>
          </Container>
        </div>
    )
  }
}