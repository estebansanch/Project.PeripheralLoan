import React from 'react';
import {
  Header, HeaderContainer, HeaderName, HeaderMenuButton, SkipToContent,
} from 'carbon-components-react';

export default function LandingPageHeader() {
 
  // function action() {
  //   //window.location.href='/loginPage';
  // }

  return(
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <Header aria-label="Peripheral Loan">
          <SkipToContent />
          <HeaderMenuButton
            aria-label="Open menu"
            onClick={onClickSideNavExpand}
            isActive={isSideNavExpanded}
          />
          <HeaderName href="/" prefix="IBM">
            Peripheral Loan
          </HeaderName>
          {/* <HeaderNavigation aria-label="Carbon Tutorial">
            <HeaderMenuItem href="/">Home</HeaderMenuItem>
            <HeaderMenuItem href="LandWorks">How it Works</HeaderMenuItem>  
          </HeaderNavigation>
          <SideNav
            aria-label="Side navigation"
            expanded={isSideNavExpanded}
            isPersistent={false}>
            <SideNavItems>
              <HeaderSideNavItems>
                <HeaderMenuItem href="/">Home</HeaderMenuItem>
                <HeaderMenuItem href="Works">How it Works</HeaderMenuItem>
              </HeaderSideNavItems>
            </SideNavItems>
          </SideNav>
          <HeaderGlobalBar style={{marginBottom:30}}>
          <HeaderMenuItem href="/loginPage">Log In</HeaderMenuItem>
          </HeaderGlobalBar>          */}
        </Header>
      )}
    />)
};