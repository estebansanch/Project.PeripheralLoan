import React from 'react';
import {
  Header, HeaderContainer, HeaderName, HeaderNavigation,
  HeaderMenuButton, HeaderMenuItem, HeaderGlobalBar, HeaderGlobalAction, 
  SkipToContent, SideNav, SideNavItems, HeaderSideNavItems, SideNavMenu,
  Search, SideNavMenuItem, SideNavLink, Content, 
} from 'carbon-components-react';
import {
 Notification, UserAvatar, DotMark, Home, App
  } from '@carbon/icons-react';

export default function HomePageHeader() {
    
    return(
    <HeaderContainer
        render={({ isSideNavExpanded, onClickSideNavExpand }) => (
            <>
            <Header aria-label="Peripheral Loan">
            <SkipToContent />
            <HeaderMenuButton
                aria-label="Open menu"
            isCollapsible
                onClick={onClickSideNavExpand}
                isActive={isSideNavExpanded}
            />
            <HeaderName href="#" prefix="IBM">
                Peripheral Loan
            </HeaderName>
            <HeaderNavigation aria-label="IBM [Platform]">
                <Search />
            </HeaderNavigation>
            <HeaderGlobalBar>
                <HeaderGlobalAction
                aria-label="Notifications">
                <Notification />
                </HeaderGlobalAction>
                <HeaderGlobalAction aria-label="User Avatar">
                <UserAvatar />
                </HeaderGlobalAction>
            </HeaderGlobalBar>
            <SideNav
                aria-label="Side navigation"
                isRail
                expanded={isSideNavExpanded}
                onOverlayClick={onClickSideNavExpand}>
                <SideNavItems>
                <SideNavLink
                    renderIcon={Home}
                    href="">
                    Panel
                </SideNavLink>
                <SideNavLink
                    renderIcon={App}
                    href="">
                    Recursos
                </SideNavLink>
                <SideNavMenu renderIcon={DotMark} title="DEVICES">
                    <SideNavMenuItem href="">
                    Dispositivos
                    </SideNavMenuItem>
                    <SideNavMenuItem href="">
                    Tipos de Dispositivos
                    </SideNavMenuItem>
                </SideNavMenu>
                </SideNavItems>
            </SideNav>
            </Header>
            </>
        )}
    />
    )
};