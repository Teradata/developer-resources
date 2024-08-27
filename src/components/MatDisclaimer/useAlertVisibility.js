import { useState } from 'react';

export default function useAlertVisibility() {
  const [isVisible, setIsVisible] = useState(true);
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  const hideAlert = () => setIsVisible(false);
  const showDialog = () => setIsDialogVisible(true);
  const hideDialog = () => setIsDialogVisible(false);

  return {
    isVisible,
    isDialogVisible,
    hideAlert,
    showDialog,
    hideDialog,
  };
}
