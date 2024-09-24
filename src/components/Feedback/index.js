import clsx from 'clsx';
import styles from './styles.module.css';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { useLocation } from 'react-router-dom';

export default function FeedbackComponent() {
  const location = useLocation();
  const handleFeedback = (feedback) => {
    const articleUrl = location.pathname;
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'feedback_click', {
        event_category: 'Feedback',
        event_label: `Feedback Type: ${feedback}`,
        event_value: articleUrl,
      });
    }
  };

  return (
    <BrowserOnly>
      {() => {
        const Feedback = require('@teradata-web/react-components')?.Feedback;
        const translate = require('@docusaurus/Translate').translate;

        return (
          <div className={clsx(styles.feedbackContainer)}>
            <Feedback
              label={translate({ message: 'feedback.did_page_help' })}
              labelForFeedback={translate({ message: 'feedback.thank_you' })}
              onFeedBack={handleFeedback}
            />
          </div>
        );
      }}
    </BrowserOnly>
  );
}
