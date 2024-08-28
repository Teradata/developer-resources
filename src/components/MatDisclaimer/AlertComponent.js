import React from 'react';
import { Alert, IconButton, Button } from '@teradata-web/react-components';

export default function AlertComponent({ onClose, onOpenDialog, alertDescription, linkLabel  }) {
  return (
    <Alert
      icon="language"
      titleText=""
      descriptionText={alertDescription}
      state="active"
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

  );
}