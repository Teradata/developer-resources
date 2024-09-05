import clsx from 'clsx';
import styles from './styles.module.css';
import { Feedback } from '@teradata-web/react-components';
import { useLocation } from 'react-router-dom';

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
      <div  className={clsx(styles.feedbackContainer)}>
        <Feedback 
            label="Did this page help?"
            labelForFeedback="Thank you for your feedback!"
            onFeedBack={us}
        />       
      </div>

   
    );
}