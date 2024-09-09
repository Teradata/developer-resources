import clsx from 'clsx';
import styles from './styles.module.css';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function FeedbackComponent() {

    const handleFeedback = (feedback) => {
        console.log("Feedback recibido:", feedback);
    };

    return (
      <BrowserOnly>
      {() => {
        const Feedback = require('@teradata-web/react-components')?.Feedback;

        return (
          <div className={clsx(styles.feedbackContainer)}>
            <Feedback 
              label="Did this page help?"
              labelForFeedback="Thank you for your feedback!"
              onFeedBack={handleFeedback}  
            />       
          </div>
        );
      }}
    </BrowserOnly>
    );
}
