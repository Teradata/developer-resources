import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import '@covalent/components/icon';

export default function AlertComponent({ onClose, onOpenDialog, alertDescription, linkLabel }) {
  return (
    <BrowserOnly>
      {() => {
        const Alert = require('@teradata-web/react-components')?.Alert;
        const Button = require('@teradata-web/react-components')?.Button;
        const IconButton = require('@teradata-web/react-components')?.IconButton;

        return Alert ? (
          <Alert
            icon="language"
            titleText=""
            descriptionText={alertDescription}
            state="active"
            inline={true}
          >
            <div slot="action-items">
              <Button 
                label={linkLabel}  
                onClick={onOpenDialog}
                size="small"
                variant="text"
              /> 
            </div>
            <IconButton
              icon="close"
              slot="action-items"
              onClick={onClose}
            />
          </Alert>
        ) : (
          <></>
        );
      }}
    </BrowserOnly>
  );
}
