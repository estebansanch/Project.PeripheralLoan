import React from 'react';
import {
  Header, HeaderContainer, HeaderName, HeaderNavigation,
  HeaderMenuButton, HeaderMenuItem, HeaderGlobalBar, HeaderGlobalAction, 
  SkipToContent, SideNav, SideNavItems, HeaderSideNavItems,
} from 'carbon-components-react';
import {
    AppSwitcher20, Notification20, UserAvatar20,
  } from '@carbon/icons-react';

const LandingPageHeader = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header aria-label="Peripheral Loan">
        <SkipToContent />
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />
        <HeaderName href="/LandHome" prefix="IBM">
          Peripheral Loan
        </HeaderName>
        <HeaderNavigation aria-label="Carbon Tutorial">
          <HeaderMenuItem href="/landingPage">Home</HeaderMenuItem>
          <HeaderMenuItem href="LandWorks">How it Works</HeaderMenuItem>
        </HeaderNavigation>
        <SideNav
          aria-label="Side navigation"
          expanded={isSideNavExpanded}
          isPersistent={false}>
          <SideNavItems>
            <HeaderSideNavItems>
              <HeaderMenuItem href="/landingPage">Home</HeaderMenuItem>
              <HeaderMenuItem href="Works">How it Works</HeaderMenuItem>
            </HeaderSideNavItems>
          </SideNavItems>
        </SideNav>
        <HeaderGlobalBar>
            <HeaderGlobalAction aria-label="Notifications">
                <Notification20 />
            </HeaderGlobalAction>
            <HeaderGlobalAction aria-label="User Avatar">
                <UserAvatar20 />
            </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
    )}
  />
);

export default LandingPageHeader;