import clsx from 'clsx';
import styles from './styles.module.css';
import { useLocation } from 'react-router-dom';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function FeedbackComponent() {
    const location = useLocation();

    function us(feedbackType) {
        const articleUrl = location.pathname; 
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'feedback_click', {
            event_category: 'Feedback',
            event_label: `Feedback Type: ${feedbackType}`, 
            event_value: articleUrl, 
          });
        }
      }

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