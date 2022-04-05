import React from 'react'
import { Button, Content } from 'carbon-components-react';
import LandingPageHeader from './components/LandingPageHeader/';

export default function LandingPageScreen() {
  return (
      <>
        <LandingPageHeader/>
        <Content>
          <div>
          <h1>Si entre a la main page</h1>
          <Button>Button</Button>
          </div>
        </Content>
      </>
    );
};
