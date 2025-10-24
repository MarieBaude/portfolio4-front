/**
 * ErrorBoundary Component
 * 
 * Catches JavaScript errors anywhere in the child component tree,
 * logs those errors, and displays a fallback UI instead of crashing
 */

import { ErrorBoundary as SolidErrorBoundary } from "solid-js";
import ErrorFallback from "./ErrorFallback";
import { logError } from "~/utils/errorLogging";

interface ErrorBoundaryProps {
  children: any;
  fallback?: (error: Error, reset: () => void) => any;
  onError?: (error: Error, errorInfo: any) => void;
}

export default function ErrorBoundary({ 
  children, 
  fallback = ErrorFallback,
  onError 
}: ErrorBoundaryProps) {
  const handleError = (error: Error, errorInfo: any) => {
    // Log error using our utility
    logError(error, errorInfo);
    
    // Call custom error handler if provided
    onError?.(error, errorInfo);
  };

  return (
    <SolidErrorBoundary fallback={fallback} onError={handleError}>
      {children}
    </SolidErrorBoundary>
  );
}
