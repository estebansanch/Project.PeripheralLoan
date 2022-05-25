import React from 'react';
import {
  Header, HeaderContainer, HeaderName, HeaderNavigation,
  HeaderMenuButton, HeaderMenuItem, HeaderGlobalBar, HeaderGlobalAction, 
  SkipToContent, SideNav, SideNavItems, HeaderSideNavItems, SideNavMenu,
  Search, SideNavMenuItem, SideNavLink, Content, HeaderMenu
} from 'carbon-components-react';
import {
 Notification32, UserAvatar32, DotMark32, Home32, App32
  } from '@carbon/icons-react';
import jsCookie from 'js-cookie';

export default function HomePageHeader() {
    
    function LogOut() {
        jsCookie.remove('user', { path: "/"});
        jsCookie.remove('role', { path: "/"});
        localStorage.clear();
        window.location.href='/';
    }

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
            </HeaderNavigation >
            <HeaderGlobalBar style={{flex:6}}>
                <HeaderGlobalAction
                aria-label="Notifications">
                <Notification32 />
                </HeaderGlobalAction >
            </HeaderGlobalBar>
            <HeaderGlobalBar >
                <HeaderMenu style={{marginRight:20, borderWidth:40}} aria-label="Account" menuLinkName=" My Account"> 
                    <HeaderMenuItem style={{marginTop:40}} href="#">Account Settings</HeaderMenuItem>
                    <HeaderMenuItem onClick={LogOut}>Log out</HeaderMenuItem>
                </HeaderMenu>
            </HeaderGlobalBar>
            <SideNav
                aria-label="Side navigation"
                isRail
                expanded={isSideNavExpanded}
                onOverlayClick={onClickSideNavExpand}>
                <SideNavItems>
                <SideNavLink
                    renderIcon={Home32}
                    href="/mainPage">
                    Panel
                </SideNavLink>
                <SideNavLink
                    renderIcon={App32}
                    href="">
                    Recursos
                </SideNavLink>
                <SideNavMenu renderIcon={DotMark32} title="PERIPHERALS">
                    <SideNavMenuItem href="/peripheralList">
                    Periféricos
                    </SideNavMenuItem>
                    <SideNavMenuItem href="">
                    Tipos de Periféricos
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