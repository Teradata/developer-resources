/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {
  
  quickstarts: {
    'Introduction': [
      'introduction/teradata-vantage-engine-architecture-and-concepts'
    ],
    'Get access to Vantage':[
      {
        type: 'category',
        label: 'On your local',
        items: [
          'get-access-to-vantage/on-your-local/getting-started-vmware',
          'get-access-to-vantage/on-your-local/getting-started-vbox',
          'get-access-to-vantage/on-your-local/getting-started-utm'
        ],
      },
      {
        type: 'category',
        label: 'On your cloud infrastructure',
        items: [
          'get-access-to-vantage/on-your-cloud-infrastructure/run-vantage-express-on-aws',
          'get-access-to-vantage/on-your-cloud-infrastructure/vantage-express-gcp',
          'get-access-to-vantage/on-your-cloud-infrastructure/run-vantage-express-on-microsoft-azure'
        ],
      },
      {
        type: 'category',
        label: 'ClearScape Analytics Experience',
        items: [
          'get-access-to-vantage/clearscape-analytics-experience/getting-started-with-csae'
        ],
      }
    ],
    'Connect to Vantage': [
      'connect-to-vantage/install-teradata-studio-on-mac-m1-m2',
      'connect-to-vantage/configure-a-teradata-vantage-connection-in-dbeaver',
      {
        type: 'category',
        label: 'Configure ODBC',
        items: [
          'connect-to-vantage/configure-odbc/odbc.ubuntu',
        ],
      },
    ],
    'Manage Data': [
      'advanced-dbt',
      'airflow',
      'dbt',
      'nos',
      'select-the-right-data-ingestion-tools-for-teradata-vantage',
      'modelops/using-feast-feature-store-with-teradata-vantage',
      'other-integrations/getting.started.dbt-feast-teradata-pipeline',
      'elt/use-airbyte-to-load-data-from-external-sources-to-teradata-vantage',
      'elt/terraform-airbyte-provider',
      'elt/transforming-external-data-loaded-via-airbyte-in-teradata-vantage-using-dbt',
      {
        type: 'doc',
        id: 'tools-and-utilities/run-bulkloads-efficiently-with-teradata-parallel-transporter',
        label: 'Load data with TPT',
      },
      'create-parquet-files-in-object-storage',
      'other-integrations/execute-airflow-workflows-that-use-dbt-with-teradata-vantage',
      'cloud-guides/integrate-teradata-vantage-to-salesforce-using-amazon-appflow',
      'cloud-guides/connect-azure-data-share-to-teradata-vantage',
      'cloud-guides/integrate-teradata-vantage-with-google-cloud-data-catalog',
      'other-integrations/configure-a-teradata-vantage-connection-in-datahub'
    ],
    'Create applications': [
      'jdbc',
      'teradatasql',
      'mule-dbc-example',
      'query-service/send-queries-using-rest-api'
    ],
    'Analyze data': [
      'jupyter',
      'local-jupyter-hub',
      'ml',
      'sto',
      'perform-time-series-analysis-using-teradata-vantage',
      'modelops/deploy-and-monitor-machine-learning-models-with-teradata-modelops-and-byom',
      'modelops/deploy-and-monitor-machine-learning-models-with-teradata-modelops-and-git',
      'modelops/execute-airflow-workflows-with-clearscape-analytics-modelops-model-factory-solution',
      'cloud-guides/sagemaker-with-teradata-vantage',
      'cloud-guides/use-teradata-vantage-with-azure-machine-learning-studio',
      'cloud-guides/integrate-teradata-jupyter-extensions-with-google-vertex-ai',
      'cloud-guides/integrate-teradata-jupyter-extensions-with-sagemaker',
      'business-intelligence/create-stunning-visualizations-in-power-bi-using-data-from-teradata-vantage',
      'other-integrations/integrate-teradata-vantage-with-knime',
    ],
    'VantageCloud Lake':[
      'getting-started-with-vantagecloud-lake',
      'vantagecloud-lake/vantagecloud-lake-demo-jupyter-docker',
      'vantagecloud-lake/vantagecloud-lake-demos-visual-studio-code',
      'vantagecloud-lake/vantagecloud-lake-demo-jupyter-sagemaker',
      'vantagecloud-lake/vantagecloud-lake-demo-jupyter-google-cloud-vertex-ai',
      'vantagecloud-lake/vantagecloud-lake-demo-jupyter-azure'
    ]
  },
  
};

export default sidebars;
