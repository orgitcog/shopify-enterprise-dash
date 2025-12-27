import React from 'react';
import { Button, Toast } from '@shopify/polaris';
import { RefreshCw } from 'lucide-react';
import { Form } from '@remix-run/react';

export function ShopifySyncButton() {
  const [showToast, setShowToast] = React.useState(false);
  const [toastContent, setToastContent] = React.useState({
    message: '',
    error: false
  });
  
  const [isSyncing, setIsSyncing] = React.useState(false);

  const handleSync = () => {
    setIsSyncing(true);
    // In a real implementation, we'd use a Form with action to handle the sync
    setTimeout(() => {
      setIsSyncing(false);
      setToastContent({
        message: 'Sync completed successfully',
        error: false
      });
      setShowToast(true);
    }, 1500);
  };

  const toggleToast = () => setShowToast((active) => !active);

  return (
    <>
      <Button 
        onClick={handleSync} 
        disabled={isSyncing}
        icon={<RefreshCw className="w-4 h-4" />}
      >
        {isSyncing ? 'Syncing...' : 'Sync Shopify Data'}
      </Button>
      
      {showToast && (
        <Toast
          content={toastContent.message}
          error={toastContent.error}
          onDismiss={toggleToast}
          duration={4500}
        />
      )}
    </>
  );
}