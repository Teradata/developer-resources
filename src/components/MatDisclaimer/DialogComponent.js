import React from 'react';
import { Dialog, Button } from '@teradata-web/react-components';

export default function DialogComponent({ onClose, dialogHeading, dialogContent, buttonLabel  }) {
  return (
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
  );
}