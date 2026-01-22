/**
 * ErrorTest Component
 * 
 * Test component to demonstrate error boundary functionality
 * Only available in development mode
 */

import { createSignal } from "solid-js";

export default function ErrorTest() {
  const [shouldError, setShouldError] = createSignal(false);

  // This will throw an error when shouldError is true
  if (shouldError()) {
    throw new Error("This is a test error to demonstrate error boundaries!");
  }

  return (
    <div style="padding: 2rem; text-align: center;">
      <h2>Error Boundary Test</h2>
      <p>Click the button below to trigger an error and see the error boundary in action.</p>
      <button 
        onClick={() => setShouldError(true)}
        style="padding: 0.5rem 1rem; background: #ff4444; color: white; border: none; border-radius: 0.25rem; cursor: pointer;"
      >
        Trigger Error
      </button>
    </div>
  );
}
