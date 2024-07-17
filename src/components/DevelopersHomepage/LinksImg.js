
import clsx from 'clsx';
import styles from './styles.module.css';
import teradataCommunityUrl from '@site/static/img/developers/Community-icon.png';
import githubUrl from '@site/static/img/developers/Github-icon.png';
import stackoverflowUrl from '@site/static/img/developers/Stackoverflow-icon.png';
import mediumUrl from '@site/static/img/developers/Medium-icon.png';
import { Typography } from '@teradata-web/react-components';

export default function LinksImages() {
  return (
    <>
    <section className={styles.features}>
      <div className={clsx('container', styles.container)}>
        <div className={clsx('row', styles.row)}>
          <div className={clsx('col', styles.col, styles.col2)}>
            <p className={clsx(styles.secondSubheading)}>
              <Typography scale="headline2">
                Talk to Developers where you are
              </Typography>
            </p>
          </div>
        </div>
        <div className={clsx('row', styles.row)}>
          <div className='col'>
            <div className={styles.imgFoot}>
              <div className={styles.images}>
                <a href='https://support.teradata.com/community' target='_blank'>
                  <img src={teradataCommunityUrl} alt="Teradata Community" title="Teradata Community" width="208px" />
                </a>                
              </div>
              <div className={styles.images}>
                <a href='https://medium.com/teradata' target='_blank'>
                  <img src={mediumUrl} alt="Teradata Technical Blogs" title="Teradata Technical Blogs" width="154px"/>
                </a>            
              </div>
              <div className={styles.images}>
                <a href='https://github.com/Teradata' target='_blank'>
                  <img src={githubUrl} alt="GitHub" title="GitHub" width= "76px"/>
                </a>    
                <a href='https://stackoverflow.com/questions/tagged/teradata' target='_blank'>
                  <img src={stackoverflowUrl} alt="Stackoverflow" title="Stackoverflow" width="126px"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
