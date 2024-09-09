import clsx from 'clsx';
import styles from './styles.module.css';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function FeedbackComponent() {

    return (
      <BrowserOnly>
      {() => {
        const Feedback = require('@teradata-web/react-components')?.Feedback;
        <div  className={clsx(styles.feedbackContainer)}>
          <Feedback 
              label="Did this page help?"
              labelForFeedback="Thank you for your feedback!"
              onFeedBack={us}
          />       
        </div>
      }}
    </BrowserOnly>
    );
}