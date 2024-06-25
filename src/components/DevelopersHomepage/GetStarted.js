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


export default function GetStarted() {
                      
  return (
    <>
    <section className={styles.features}>
      <div className={clsx('container', styles.container)}>
        <div className={clsx('row', styles.row)}>
          <div className={clsx('col', styles.col, styles.col2)}>
            <Typography scale="eyebrow">
              Solutions for you
            </Typography>
            
            <p className={clsx(styles.secondSubheading)}>
              <Typography scale="headline2">
                Get started with Teradata
              </Typography>
            </p>
          </div>
        </div>
        <div className={clsx('row', styles.row)}>
          <div className='col'>
            <TabBar>
              <Tab label='Data Scientist'>
                <Banner
                  content={<>
                    <p><React.Fragment key=".0">There are situations when you want to quickly validate a machine learning model idea. You have a model type in mind. You don’t want to operationalize with an ML pipeline just yet. You just want to test out if the relationship you had in mind exists. Also, sometimes even your production deployment doesn’t require constant relearning with MLops. In such cases, you can use Vantage Analytics Library (VAL) and multiple ML model types it supports.</React.Fragment></p>
                    <br/>
                    <Link to="/quickstarts/analyze-data/ml/">
                      <Button
                        label="Get started"
                        primary={true}
                        icon="fa fa-arrow-right"
                        trailingIcon={true}
                      />
                    </Link>
                  </>}
                  imageSrc={DataScientist}
                  title="Train ML models in Vantage"
                />
              </Tab>
              <Tab label='Data Engineer'>
                <Banner
                  content={<>
                    <p><React.Fragment key=".0">This tutorial demonstrates how to use dbt (Data Build Tool) with Teradata Vantage. It’s based on the original dbt Jaffle Shop tutorial. A couple of models have been adjusted to the SQL dialect supported by Vantage.</React.Fragment></p>
                    <br/>
                    <Link to="/quickstarts/manage-data/dbt/">
                      <Button
                        label="Get started"
                        primary={true}
                        icon="fa fa-arrow-right"
                        trailingIcon={true}
                      />
                    </Link>
                  </>}
                  imageSrc={DataLeader}
                  title="dbt with Teradata Vantage"
                />
              </Tab>
              <Tab label='Developer'>
              <Banner
                  content={<>
                    <p><React.Fragment key=".0">This how-to demonstrates how to connect to Teradata Vantage using JDBC using a sample Java application: https://github.com/Teradata/jdbc-sample-app.</React.Fragment></p>
                    <br/>
                    <Link to="/quickstarts/create-applications/jdbc/">
                      <Button
                        label="Get started"
                        primary={true}
                        icon="fa fa-arrow-right"
                        trailingIcon={true}
                      />
                    </Link>
                  </>}
                  imageSrc={Developer}
                  title="Connect to Vantage using JDBC"
                />
              </Tab>
              <Tab label='Database Administrator'>
              <Banner
                  content={<>
                    <p><React.Fragment key=".0">We often have a need to move large volumes of data into Vantage. Teradata offers Teradata Parallel Transporter (TPT) utility that can efficiently load large amounts of data into Teradata Vantage. This how-to demonstrates how to use TPT. In this scenario,</React.Fragment></p>
                    <br/>
                    <Link to="/quickstarts/manage-data/run-bulkloads-efficiently-with-teradata-parallel-transporter/">
                      <Button
                        label="Get started"
                        primary={true}
                        icon="fa fa-arrow-right"
                        trailingIcon={true}
                      />
                    </Link>
                  </>}
                  imageSrc={businessLeader}
                  title="Database Run large bulkloads efficiently with Teradata Parallel Transporter (TPT)"
                />
              </Tab>
              <Tab label='IT Operations'>
              <Banner
                  content={<>
                    <p><React.Fragment key=".0">Native Object Storage (NOS) is a Vantage feature that allows you to query data stored in files in object storage such as AWS S3, Google GCS, Azure Blob or on-prem implementations. It’s useful in scenarios where you want to explore data without building a</React.Fragment></p>
                    <br/>
                    <Link to="/quickstarts/manage-data/nos/">
                      <Button
                        label="Get started"
                        primary={true}
                        icon="fa fa-arrow-right"
                        trailingIcon={true}
                      />
                    </Link>
                  </>}
                  imageSrc={dataEngineer}
                  title="Query data stored in object storage"
                />
              </Tab>
            </TabBar>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
