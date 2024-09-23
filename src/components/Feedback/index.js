import clsx from 'clsx';
import styles from './styles.module.css';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { useLocation } from 'react-router-dom';
import { translate } from '@docusaurus/Translate';

export default function FeedbackComponent() {
  const location = useLocation();

  const feedbackLabel = translate({ message: 'feedback.did_page_help' });
  const thankYouLabel = translate({ message: 'feedback.thank_you' });

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

        return (
          <div className={clsx(styles.feedbackContainer)}>
            <Feedback
              label={feedbackLabel}
              labelForFeedback={thankYouLabel}
              onFeedBack={handleFeedback}
            />
          </div>
        );
      }}
    </BrowserOnly>
  );
}
