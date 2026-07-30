## Contributor Guidelines


### Tool Requirements

- Familiarity Markdown
- Familarity with GitHub and simple git branching principles. Teradata recommends installing [GitHub Desktop](https://desktop.github.com/download/) to help manage branch activity and to clone the repository.
- Teradata recommends using [VS Code](https://code.visualstudio.com/) with these extensions:
  - [MDX](https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)


### Write a New Article

...

### Validate Your Changes Locally

...

### Submit Your Contribution for Review

...

## How to Avoid Duplicating Content

To avoid duplicating content, follow these guidelines:

1. Search the repository to check if the content already exists.
1. If similar content exists, consider updating the existing content instead of creating new content.
1. Coordinate with other contributors to ensure consistency and avoid duplication.
1. Link to and cite related content on [docs.teradata.com](https://docs.teradata.com).

## Best Practices

To ensure high-quality contributions and maintain consistency across the project, please follow these best practices:

1. **Use Clear and Concise Language**: Write clearly and concisely to make the documentation easy to understand.
1. **Follow Markdown Standards**: Use standard Markdown syntax and conventions to ensure consistency across all documents.
1. **Keep It Simple**: Avoid overly complex explanations and technical jargon where possible. Aim to make the documentation accessible to a wide audience.
1. **Use Proper Formatting**: Use headings, lists, and code blocks appropriately to organize content and improve readability.
1. **Provide Examples**: Include examples and code snippets to illustrate concepts and make the documentation more practical.
1. **Review and Edit**: Before submitting a pull request, review your changes for accuracy, clarity, and completeness. Edit as needed to ensure high quality.
1. **Collaborate and Communicate**: Engage with other contributors and maintainers through comments, discussions, and reviews to ensure alignment and address any issues.

---

## TOC Generation

The [toc.yml](tech-guides/toc.yml) file determines the structure and order in which articles display in the left-hand navigation. Add new articles to this file.

```yml
metadata:
  - key: "ft:originId"
    value: "technical-articles"
  - key: "ft:title"
    value: "Technical Articles Library"
  - key: "ft:locale"
    value: "en-US"
  - key: "td:productName"
  - key: "td:contentType"
    value: "Technical Articles"
    
toc:
  - filepath: "introduction/teradata-engine-architecture-and-concepts.md"
  - filepath: "get-access-to-vantage/_index.md"
    children:
      - filepath: "get-access-to-vantage/on-your-local/_index.md"
        children:
          - filepath: "get-access-to-vantage/on-your-local/getting-started-vmware.md"
          - filepath: "get-access-to-vantage/on-your-local/getting-started-vbox.md"
          - filepath: "get-access-to-vantage/on-your-local/getting-started-utm.md"
      - filepath: "get-access-to-vantage/on-your-cloud-infrastructure/_index.md"
        children:
          - filepath: "get-access-to-vantage/on-your-cloud-infrastructure/run-vantage-express-on-aws.md"
          - filepath: "get-access-to-vantage/on-your-cloud-infrastructure/vantage-express-gcp.md"
          - filepath: "get-access-to-vantage/on-your-cloud-infrastructure/run-vantage-express-on-microsoft-azure.md"
      - filepath: "get-access-to-vantage/clearscape-analytics-experience/_index.md"
        children:
          - filepath: "get-access-to-vantage/clearscape-analytics-experience/getting-started-with-csae.md"
  - filepath: "connect-to-vantage/_index.md"
    children:
      - filepath: "connect-to-vantage/install-teradata-studio-on-mac-m1-m2.md"
      - filepath: "connect-to-vantage/configure-a-teradata-vantage-connection-in-dbeaver.md"
      - filepath: "connect-to-vantage/connect-teradata-dbeaver-okta-sso.md"
      - filepath: "connect-to-vantage/configure-odbc/_index.md"
        children:
          - filepath: "connect-to-vantage/configure-odbc/odbc.ubuntu.md"
  - filepath: "manage-data/_index.md"
    children:
      - filepath: "manage-data/nos.md"
      - filepath: "manage-data/select-the-right-data-ingestion-tools-for-teradata-vantage.md"
      - filepath: "manage-data/airflow.md"
      - filepath: "manage-data/fivetran-userguide.md"
      - filepath: "manage-data/airflow-azure-to-teradata-transfer-operator-doc.md"
      - filepath: "manage-data/execute-dbt-teradata-transformations-in-airflow-with-cosmos.md"
      - filepath: "manage-data/use-dagster-with-teradata-vantage.md"
      - filepath: "manage-data/dbt.md"
      - filepath: "manage-data/use-dbt-cloud-with-teradata-vantage.md"
      - filepath: "manage-data/dagster-teradata-s3-to-teradata-transfer.md"
      - filepath: "manage-data/dagster-teradata-azure-to-teradata-transfer.md"
      - filepath: "manage-data/advanced-dbt.md"
      - filepath: "manage-data/automate-data-movement-and-transformation-with-airflow-airbyte-and-dbt-in-teradata-vantage.md"
      - filepath: "manage-data/using-feast-feature-store-with-teradata-vantage.md"
      - filepath: "manage-data/getting-started-dbt-feast-teradata-pipeline.md"
      - filepath: "manage-data/use-airbyte-to-load-data-from-external-sources-to-teradata-vantage.md"
      - filepath: "manage-data/terraform-airbyte-provider.md"
      - filepath: "manage-data/transforming-external-data-loaded-via-airbyte-in-teradata-vantage-using-dbt.md"
      - filepath: "manage-data/run-bulkloads-efficiently-with-teradata-parallel-transporter.md"
      - filepath: "manage-data/create-parquet-files-in-object-storage.md"
      - filepath: "manage-data/execute-airflow-workflows-that-use-dbt-with-teradata-vantage.md"
      - filepath: "manage-data/integrate-teradata-vantage-to-salesforce-using-amazon-appflow.md"
      - filepath: "manage-data/segment.md"
      - filepath: "manage-data/connect-azure-data-share-to-teradata-vantage.md"
      - filepath: "manage-data/integrate-teradata-vantage-with-google-cloud-data-catalog.md"
      - filepath: "manage-data/configure-a-teradata-vantage-connection-in-datahub.md"
      - filepath: "manage-data/ingest-catalog-data-teradata-s3-with-glue.md"
      - filepath: "manage-data/Pushdown-feature.md"
      - filepath: "manage-data/Trino Installation & Setup.md"
  - filepath: "create-applications/_index.md"
    children:
      - filepath: "create-applications/jdbc.md"
      - filepath: "create-applications/teradatasql.md"
      - filepath: "create-applications/mule-dbc-example.md"
      - filepath: "create-applications/send-queries-using-rest-api.md"
      - filepath: "create-applications/examples-configuration.md"
      - filepath: "create-applications/teradata-connector-mule4-reference.md"
      - filepath: "create-applications/teradata-connector-mule4.md"
  - filepath: "analyze-data/_index.md"
    children:
      - filepath: "analyze-data/jupyter.md"
      - filepath: "analyze-data/local-jupyter-hub.md"
      - filepath: "analyze-data/ml.md"
      - filepath: "analyze-data/sto.md"
      - filepath: "analyze-data/perform-time-series-analysis-using-teradata.md"
      - filepath: "analyze-data/deploy-and-monitor-machine-learning-models-with-teradata-modelops-and-byom.md"
      - filepath: "analyze-data/deploy-and-monitor-machine-learning-models-with-teradata-modelops-and-git.md"
      - filepath: "analyze-data/execute-airflow-workflows-with-clearscape-analytics-modelops-model-factory-solution.md"
      - filepath: "analyze-data/sagemaker-with-teradata-vantage.md"
      - filepath: "analyze-data/use-teradata-vantage-with-azure-machine-learning-studio.md"
      - filepath: "analyze-data/integrate-teradata-jupyter-extensions-with-google-vertex-ai.md"
      - filepath: "analyze-data/integrate-teradata-jupyter-extensions-with-sagemaker.md"
      - filepath: "analyze-data/create-stunning-visualizations-in-power-bi-using-data-from-teradata-vantage.md"
      - filepath: "analyze-data/integrate-teradata-vantage-with-knime.md"
      - filepath: "analyze-data/geojson-to-vantage.md"
```