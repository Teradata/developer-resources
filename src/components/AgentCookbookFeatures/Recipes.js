import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from '../HomepageFeatures/styles.module.css';
import Link from '@docusaurus/Link';

const RecipesList = [
  {
    name: 'Data Analyst',
    status: 'Available',
    port: '8001',
    description: 'SQL generation and data analysis agent for interactive multi-turn queries.',
    href: '/agent-cookbook/running-the-recipes/data-analyst-recipe/',
  },
  {
    name: 'Multi-Turn Agent',
    status: 'Coming Soon',
    port: '8002',
    description: 'Extended data analyst with conversation memory and stateful interactions.',
    href: '/agent-cookbook/running-the-recipes/',
  },
  {
    name: 'DBT Integration',
    status: 'Coming Soon',
    port: '8003',
    description: 'Data build tool integration for pipeline orchestration and testing.',
    href: '/agent-cookbook/running-the-recipes/',
  },
  {
    name: 'Model Context Protocol',
    status: 'Coming Soon',
    port: '8004',
    description: 'MCP servers for standardized tool and resource integration.',
    href: '/agent-cookbook/running-the-recipes/',
  },
  {
    name: 'Governed Analytics',
    status: 'Coming Soon',
    port: '8005',
    description: 'Role-based access control and audit logging for enterprise deployments.',
    href: '/agent-cookbook/running-the-recipes/',
  },
  {
    name: 'Vector Search',
    status: 'Coming Soon',
    port: '8006',
    description: 'Semantic search and RAG patterns for knowledge retrieval.',
    href: '/agent-cookbook/running-the-recipes/',
  },
  {
    name: 'Open Analytics',
    status: 'Coming Soon',
    port: '8007',
    description: 'Extensible recipe framework for custom agent builders.',
    href: '/agent-cookbook/running-the-recipes/',
  },
  {
    name: 'Enterprise Patterns',
    status: 'Coming Soon',
    port: '8008',
    description: 'Production-ready patterns for scaling agents across organizations.',
    href: '/agent-cookbook/running-the-recipes/',
  },
];

function RecipeCard({ name, status, port, description, href }) {
  const isAvailable = status === 'Available';
  const statusColor = isAvailable ? '#4CAF50' : '#FF9800';
  
  return (
    <Link to={href} className={clsx('col col--4', styles.col)} style={{ opacity: isAvailable ? 1 : 0.7 }}>
      <div className={clsx('doc-card', styles.card)} style={{ '--td-web-typography-eyebrow-alignment': 'start' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <Heading as="h3" className={clsx(styles.marginTitle)} style={{ margin: 0, flex: 1 }}>
            {name}
          </Heading>
          <span style={{ 
            fontSize: '12px', 
            padding: '4px 8px', 
            backgroundColor: statusColor, 
            color: 'white', 
            borderRadius: '4px',
            whiteSpace: 'nowrap',
            marginLeft: '8px'
          }}>
            {status}
          </span>
        </div>
        <p style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>
          <strong>Port:</strong> {port}
        </p>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default function Recipes() {
  return (
    <section className={styles.features}>
      <div className={clsx('container', styles.container)}>
        <div className={clsx('row', styles.row)}>
          {RecipesList.map((props, idx) => (
            <RecipeCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
