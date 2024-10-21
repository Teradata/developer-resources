
import clsx from 'clsx';
import styles from './styles.module.css';
import DataScientist from '@site/static/img/developers/DataScientist.webp'
import businessLeader from '@site/static/img/developers/businessLeader.webp'
import DataLeader from '@site/static/img/developers/DataLeader.webp'
import Developer from '@site/static/img/developers/Developer.webp'
import dataEngineer from  '@site/static/img/developers/dataEngineer.webp'
import React from 'react';
import Link from '@docusaurus/Link';
import { Typography, TabBar, Tab, Banner, Button } from '@teradata-web/react-components';
import { translate } from '@docusaurus/Translate';

export default function GetStarted() {                
  return (
    <>
    <section className={styles.features}>
      <div className={clsx('container', styles.container)}>
        <div className={clsx('row', styles.row)}>
          <div className={clsx('col', styles.col2)}>
            <Typography scale="eyebrow">
              {translate({ message: 'developers.solutions-for-you' })}
            </Typography>
            
            <p className={clsx(styles.secondSubheading, styles.eyebrow)}>
              <Typography scale="headline2">
                {translate({ message: 'developers.get-started-with-teradata' })}
              </Typography>
            </p>
          </div>
        </div>
      </div>
    </section>
    
 
     

        <div className={clsx('row', styles.row)}>
          <div className='col'>
            <TabBar className={clsx(styles.chipSet)}>
              <Tab label={translate({ message: 'developers.data-scientist' })}>
              <div className={clsx(styles.container)}>
                <Banner
                  content={<>
                    <p>
                      <React.Fragment key=".0">
                        {translate({ message: 'developers.data-scientist-text' })}
                      </React.Fragment>
                    </p>
                    <br/>
                    <Link to="/quickstarts/analyze-data/ml/">
                      <Button
                        label={translate({ message: 'developers.getting_started_button' })}
                        primary={false}
                        icon="fa fa-arrow-right"
                        trailingIcon={true}
                      />
                    </Link>
                  </>}
                  imageSrc={DataScientist}
                  title={translate({ message: 'developers.data-scientist-title' })}
                />
              </div>
              </Tab>
              <Tab label={translate({ message: 'developers.data-engineer' })}>
              <div className={clsx(styles.container)}>
                <Banner
                  content={<>
                    <p>
                      <React.Fragment key=".0">
                      {translate({ message: 'developers.data-engineer-text' })}
                      </React.Fragment>
                    </p>
                    <br/>
                    <Link to="/quickstarts/manage-data/dbt/">
                      <Button
                        label={translate({ message: 'developers.getting_started_button' })}
                        primary={false}
                        icon="fa fa-arrow-right"
                        trailingIcon={true}
                      />
                    </Link>
                  </>}
                  imageSrc={DataLeader}
                  title={translate({ message: 'developers.data-engineer-title' })}
                />
                </div>
              </Tab>
              <Tab label={translate({ message: 'developers.developer' })}>
              <div className={clsx(styles.container)}>
              <Banner
                  content={<>
                    <p>
                      <React.Fragment key=".0">
                        {translate({ message: 'developers.developer-text' })}
                      </React.Fragment>
                    </p>
                    <br/>
                    <Link to="/quickstarts/create-applications/jdbc/">
                      <Button
                        label={translate({ message: 'developers.getting_started_button' })}
                        primary={false}
                        icon="fa fa-arrow-right"
                        trailingIcon={true}
                      />
                    </Link>
                  </>}
                  imageSrc={Developer}
                  title={translate({ message: 'developers.developer-title' })}
                />
                </div>
              </Tab>
              <Tab label={translate({ message: 'developers.database-administrator' })}>
              <div className={clsx(styles.container)}>
              <Banner
                  content={<>
                    <p>
                      <React.Fragment key=".0">
                        {translate({ message: 'developers.database-administrator-text' })}
                      </React.Fragment>
                    </p>
                    <br/>
                    <Link to="/quickstarts/manage-data/run-bulkloads-efficiently-with-teradata-parallel-transporter/">
                      <Button
                        label={translate({ message: 'developers.getting_started_button' })}
                        primary={false}
                        icon="fa fa-arrow-right"
                        trailingIcon={true}
                      />
                    </Link>
                  </>}
                  imageSrc={businessLeader}
                  title={translate({ message: 'developers.database-administrator-title' })}
                />
                </div>
              </Tab>
              <Tab label={translate({ message: 'developers.it-operations' })}>
              <div className={clsx(styles.container)}>
              <Banner
                  content={<>
                    <p>
                      <React.Fragment key=".0">
                       {translate({ message: 'developers.it-operations-text' })}  
                      </React.Fragment>
                    </p>
                    <br/>
                    <Link to="/quickstarts/manage-data/nos/">
                      <Button
                        label={translate({ message: 'developers.getting_started_button' })}
                        primary={false}
                        icon="fa fa-arrow-right"
                        trailingIcon={true}
                      />
                    </Link>
                  </>}
                  imageSrc={dataEngineer}
                  title={translate({ message: 'developers.it-operations-title' })}  
                />
                </div>
              </Tab>
            </TabBar>
          </div>
        </div>
    </>
  );
}
