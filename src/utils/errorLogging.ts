/**
 * Error Logging Utility
 * 
 * Handles error logging for production environments
 * Can be extended to send errors to external services
 */

interface ErrorInfo {
  componentStack?: string;
  errorBoundary?: string;
  timestamp: string;
  userAgent: string;
  url: string;
}

export function logError(error: Error, errorInfo?: any) {
  const errorData: ErrorInfo = {
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
    url: window.location.href,
    ...errorInfo
  };

  // In development, log to console
  if (import.meta.env.DEV) {
    console.group("🚨 Error Boundary Caught Error");
    console.error("Error:", error);
    console.error("Error Info:", errorData);
    console.groupEnd();
    return;
  }

  // In production, you can send to external services
  // Example implementations:

  // 1. Send to logging service (e.g., Sentry, LogRocket, etc.)
  // sendToLoggingService(error, errorData);

  // 2. Send to analytics service
  // sendToAnalytics('error', { error: error.message, ...errorData });

  // 3. Store locally for later analysis
  // storeErrorLocally(error, errorData);

  // For now, we'll just log to console in production too
  // In a real application, you'd want to implement proper error reporting
  console.error("Production Error:", error.message, errorData);
}

export function sendToLoggingService(error: Error, errorInfo: ErrorInfo) {
  // Example implementation for external logging service
  // This would typically be an API call to your logging service
  
  try {
    // Example: Send to Sentry
    // Sentry.captureException(error, { extra: errorInfo });
    
    // Example: Send to custom API
    // fetch('/api/log-error', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ error: error.message, stack: error.stack, ...errorInfo })
    // });
    
    console.log("Error logged to external service:", error.message);
  } catch (loggingError) {
    console.error("Failed to log error to external service:", loggingError);
  }
}

export function storeErrorLocally(error: Error, errorInfo: ErrorInfo) {
  // Store errors locally for later analysis
  try {
    const errors = JSON.parse(localStorage.getItem('app-errors') || '[]');
    errors.push({
      message: error.message,
      stack: error.stack,
      ...errorInfo
    });
    
    // Keep only the last 50 errors
    if (errors.length > 50) {
      errors.splice(0, errors.length - 50);
    }
    
    localStorage.setItem('app-errors', JSON.stringify(errors));
  } catch (storageError) {
    console.error("Failed to store error locally:", storageError);
  }
}
