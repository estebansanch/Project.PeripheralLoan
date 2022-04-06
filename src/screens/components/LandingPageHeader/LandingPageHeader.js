import React from 'react';
import {
  Header, HeaderContainer, HeaderName, HeaderNavigation,
  HeaderMenuButton, HeaderMenuItem, HeaderGlobalBar, HeaderGlobalAction, 
  SkipToContent, SideNav, SideNavItems, HeaderSideNavItems,
} from 'carbon-components-react';
import { UserAvatar20 } from '@carbon/icons-react';

export default function LandingPageHeader() {
 
  function GoLogIn() {
    window.location.href='/loginPage';
  }

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
          <HeaderNavigation aria-label="Carbon Tutorial">
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
          <HeaderGlobalBar>
              <HeaderGlobalAction aria-label="User Avatar" onClick={GoLogIn}>
                  <UserAvatar20 />
              </HeaderGlobalAction>
          </HeaderGlobalBar>
        </Header>
      )}
    />)
};