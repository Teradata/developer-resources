
import clsx from 'clsx';
import styles from './styles.module.css';
import DataScientist from '@site/static/img/developers/DataScientist.png'
import businessLeader from '@site/static/img/developers/businessLeader.png'
import DataLeader from '@site/static/img/developers/DataLeader.png'
import Developer from '@site/static/img/developers/Developer.png'
import dataEngineer from  '@site/static/img/developers/dataEngineer.png'
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
                    <Link to="https://quickstarts.teradata.com/ml.html">
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
                    <Link to="https://quickstarts.teradata.com/dbt.html">
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
                    <Link to="https://quickstarts.teradata.com/jdbc.html">
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
                    <Link to="https://quickstarts.teradata.com/tools-and-utilities/run-bulkloads-efficiently-with-teradata-parallel-transporter.html">
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
                    <Link to="https://quickstarts.teradata.com/nos.html">
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
