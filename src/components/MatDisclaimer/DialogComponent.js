import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function DialogComponent({ onClose, dialogHeading, dialogContent, buttonLabel }) {
  return (
    <BrowserOnly>
      {() => {
        const Dialog = require('@teradata-web/react-components')?.Dialog;
        const Button = require('@teradata-web/react-components')?.Button;

        return Dialog ? (
          <Dialog
            open
            scrimClickAction=""
            escapeKeyAction=""
            heading={dialogHeading}
            onClose={onClose}
          >
            {dialogContent}
            <div slot="primaryAction">
              <Button 
                label={buttonLabel}
                primary={true}
                slot="primaryAction" 
                onClick={onClose}
              />
            </div>
          </Dialog>
        ) : (
          <></>
        );
      }}
    </BrowserOnly>
  );
}
