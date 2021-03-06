import React from 'react'
import {Tabs, Tab, Grid, Column, Link, Button
} from 'carbon-components-react';
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
        <div className="landing-page">
          <div className="landing-page__banner">
            <h1 className="landing-page__heading">Welcome To Peripheral Loan By IBM</h1>
            <p> Peripheral Loan is an IBM platform that allows IBM employees to ask for any necessary
              equipment that they may need for their work. Simply request a loan of one or more items
              that can be found in the requesters IBM campus.
            </p>
          </div>
          <div className="landing-page__log-in">
            <h2 className="landing-page__log-in__heading">Log In To Request A Loan</h2>
            <p> Click the button below to log in using your IBM credentials.</p>
            <Button className='landing-page__log-in__button' href="/loginPage">Log In</Button>
          </div>
          <div className="landing-page__r2">
          <h2 className="landing-page__r2__heading">Powered by IBM Technology</h2>
          <p>Peripheral Loan is built and maintained using IBM's proprietary software tools. For 
            the interested, here is a short guide of the tools used when building and hosting 
            IBM Peripheral Loan.
          </p>
            <div className='landing-page__r2__content'>
              <Tabs {...props.tabs} className='tabBox'>
                <Tab {...props.tab} className='tabLabels' label="IBM Cloud Foundry">
                  <Grid fullWidth className="landing-page__tab-content">
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
                <Tab {...props.tab} className='tabLabels' label="IBM DB2 Cloud">
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
                <Tab {...props.tab} className='tabLabels' label="Carbon Design Systems">
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
            </div>
          </div>
          <footer>
            <Grid className="landing-page__r3">
              <Column lg={4} className='colStack'>
                <h3 className="landing-page__label">Resources</h3>
              </Column>
              <Column lg={4} className='colStack'>Help Center</Column>
              <Column lg={4} className='colStack'>Contact Us</Column>
            </Grid>
          </footer>
        </div>
        
      </>
    );
};