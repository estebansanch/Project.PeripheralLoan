import React from 'react'
import { Button, Content, Breadcrumb, BreadcrumbItem, Tabs, Tab, Grid, Row, Column, Link} from 'carbon-components-react';
import '../assets/LandingPage.scss';
import LandingPageHeader from './components/LandingPageHeader/';


export default function LandingPageScreen() {
  
  const props = {
    tabs: {
      selected: 0,
      role: 'navigation',
    },
    tab: {
      role: 'presentation',
      tabIndex: 0,
    },
  };
  
  
  return (
      <>
        <LandingPageHeader/>
          <Grid narrow className="landing-page">
            <Grid className="landing-page__banner">
              <Column max={16}>
                <Breadcrumb noTrailingSlash>
                  <BreadcrumbItem>
                    <a href="/loginPage">Ask for a device</a>
                  </BreadcrumbItem>
                </Breadcrumb>
              </Column>
              <Column span={16}>
                <h1 className="landing-page__heading">Hardware at a few clicks away</h1>
              </Column>
            </Grid>
            <Grid className='landing-page__r2'>
                <h2 className="landing-page__subheading">Powered by IBM Technology</h2>
                <Column fullWidth> 
                    <Tabs {...props.tabs}>
                      <Tab {...props.tab} label="IBM Cloud Foundry">
                        <Grid className="landing-page__tab-content">
                          <Column lg={16}>
                            <p className="landing_page__p">
                            Webapp hosted on IBM's Cloud Foundry. Allowing for a quick, consistant, 
                            reliable, serverless, and secure connection that can help easily migrate
                            the webapp if ever needed.
                            </p>
                          </Column>
                          <Column lg={16}>
                            <Link href="https://www.ibm.com/cloud/cloud-foundry">
                              Learn more.
                            </Link>  
                          </Column>
                        </Grid>
                      </Tab>
                      <Tab {...props.tab} label="IBM Db2onCloud">
                      <Grid className="landing-page__tab-content">
                          <Column lg={16}>
                            <p className="landing_page__p">
                            A secure and confident way to have an agile cloud database for any
                            enterprise workload. Db2 on Cloud is a fully managed SQL cloud database
                            that offers reliable serivce, AI and Enterprise ready tools for any webapp.
                            </p>
                          </Column>
                          <Column lg={16}>
                            <Link href="https://www.ibm.com/cloud/db2-on-cloud">
                              Learn more.
                            </Link>  
                          </Column>
                        </Grid>
                      </Tab>
                      <Tab {...props.tab} label="Carbon Design Systems">
                        <Grid className="landing-page__tab-content">
                          <Column lg={16}>
                            <p className="landing_page__p">
                            This webapp was designed using IBM's open source design system for all
                            their products. Using working code and professional design tools, CDS 
                            facilitates creating great web apps with components designed with IBM's
                            Design Language.
                            </p>
                          </Column>
                          <Column lg={16}>
                            <Link href="https://carbondesignsystem.com">
                              Learn more.
                            </Link>  
                          </Column>
                        </Grid>
                      </Tab>
                    </Tabs>
                </Column>
              </Grid>
              <Grid className="landing-page__r3">
                <Column>
                  <h3 className="landing-page__label">Resources</h3>
                </Column>
                <Column>Help Center</Column>
                <Column>Contact Us</Column>
                <Column>Become </Column>
              </Grid>
        </Grid>
      </>
    );
};
