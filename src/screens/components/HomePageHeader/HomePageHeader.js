import React from 'react';
import {
  Header, HeaderContainer, HeaderName, HeaderNavigation,
  HeaderMenuButton, HeaderMenuItem, HeaderGlobalBar, HeaderGlobalAction, 
  SkipToContent, SideNav, SideNavItems, SideNavMenu,
  Search, SideNavMenuItem, SideNavLink,  HeaderMenu
} from 'carbon-components-react';
import {
 NotificationNew32, Notification32, DotMark32, Home32, User32
  } from '@carbon/icons-react';
import jsCookie from 'js-cookie';
import "./homepage.scss";

export default function HomePageHeader() {
    

    function signOut() {
        jsCookie.remove('id', { path: "/" });
        jsCookie.remove('role', { path: "/" });
        jsCookie.remove('user', { path: "/" });
        localStorage.clear();
        window.location.href='/';
    }
    
    const userName = jsCookie.get("user");
    const role = jsCookie.get("role");

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
            <HeaderGlobalBar >
                <HeaderNavigation aria-label='Global Header Navigation' className='glblHeaderNav'>
                    <HeaderMenu menuLinkName='' aria-label={'Notifications'}
                    renderMenuContent={() => {
                        return (
                            <Notification32 className='Notifications' />
                        );
                    }}>
                    </HeaderMenu>
                    <HeaderMenu menuLinkName='' aria-label={'UserName'}
                    renderMenuContent={() => {
                        return(
                            <>
                                <User32 className='userIcon' />
                                <div className='userName'>{userName}</div>
                            </>
                        );
                    }}>
                        <HeaderMenuItem aria-label='Account Settings'>
                            Account Settings
                        </HeaderMenuItem>
                        <HeaderMenuItem aria-label='Sign Out' onClick={signOut}>
                            Sign Out
                        </HeaderMenuItem>
                    </HeaderMenu>
                </HeaderNavigation>
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
                    renderIcon={Home32}
                    href="/myPeripherals">
                    My Peripherals Asigned
                </SideNavLink>
                {/* <SideNavLink
                    renderIcon={App32}
                    href="">
                    Recursos
                </SideNavLink> */}
                {role !== '1' ? (
                <SideNavMenu renderIcon={DotMark32} title="PERIPHERALS">
                    {(role === '4' || role === '2') ? (
                        <SideNavMenuItem href="/peripheralList">
                        Periféricos
                        </SideNavMenuItem>
                    ): (<></>)}
                    {/* <SideNavMenuItem href="">
                    Tipos de Periféricos
                    </SideNavMenuItem> */}
                    {(role === '4' || role === '3') ? (
                        <SideNavMenuItem href="/requestScreen">
                        Peripherals Requests
                        </SideNavMenuItem>
                       
                    ) : (<></>)}
                    {(role === '4' || role === '3') ? (
                        <SideNavMenuItem href="/ticketReader">
                            Scan Peripheral QR Code
                        </SideNavMenuItem>
                    ) : (<></>)}
                </SideNavMenu>
                ): (<></>)}
                {role === '4' ? (
                    <SideNavMenu renderIcon={DotMark32} title="ADMIN">
                        <SideNavMenuItem href="/userList">
                        User Managment
                        </SideNavMenuItem>
                    </SideNavMenu>
                ): (<></>)}
                </SideNavItems>
            </SideNav>
            </Header>
            </>
        )}
    />
    )
};