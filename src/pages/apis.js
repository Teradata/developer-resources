import Link from "@docusaurus/Link";
import { Card, Typography } from "@teradata-web/react-components";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import clsx from "clsx";
import Translate, { translate } from "@docusaurus/Translate";

const apiContent = [
  {
    title: translate({ message: "apis.query_service" }),
    body: translate({ message: "apis.query_service_description" }),
    href: "/api/teradata_query_service",
  },
  {
    title: translate({ message: "apis.data_labs" }),
    body: translate({ message: "apis.data_labs_description" }),
    href: "/api/teradata_datalabs",
  },
];

function CardContent({ title, body }) {
  return (
    <>
      <Typography scale="headline3">{title}</Typography>
      <p>{body}</p>
    </>
  );
}

export default function Apis() {
  return (
    <Layout>
      <main className={styles.features}>
        <section className={clsx("container", styles.container)}>
          <div>
            <Typography scale="headline2">
              <Translate id="apis.title" />
            </Typography>
            <br />
            <Typography scale="body1">
              <Translate id="apis.description" />
            </Typography>
            <div className={clsx("row", styles.row, styles.apiContainer)}>
              {apiContent.map((content, index) => (
                <Link
                  key={index}
                  to={content.href}
                  className={clsx("col col--4", styles.col)}
                >
                  <Card
                    content={
                      <CardContent title={content.title} body={content.body} />
                    }
                  ></Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
