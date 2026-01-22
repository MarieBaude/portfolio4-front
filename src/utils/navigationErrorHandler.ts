/**
 * Navigation Error Handler
 * 
 * Utility functions for handling errors with navigation
 * Integrates error boundaries with existing routing system
 */

import { Navigate } from "@solidjs/router";

export interface NavigationErrorOptions {
  redirectTo?: string;
  showErrorPage?: boolean;
  logError?: boolean;
}

/**
 * Creates a navigation-based error handler
 * Redirects to 404 page or custom route on error
 */
export function createNavigationErrorHandler(options: NavigationErrorOptions = {}) {
  const {
    redirectTo = "/404",
    showErrorPage = true,
    logError = true
  } = options;

  return (error: Error, errorInfo?: any) => {
    if (logError) {
      console.error("Navigation Error:", error, errorInfo);
    }

    if (showErrorPage) {
      // In a real app, you might want to use a more sophisticated approach
      // For now, we'll let the error boundary handle the display
      return;
    }

    // This would be used in a custom error boundary fallback
    return <Navigate href={redirectTo} />;
  };
}

/**
 * Error boundary fallback that redirects to 404
 */
export function NavigationErrorFallback(error: Error, reset: () => void) {
  return <Navigate href="/404" />;
}

/**
 * Checks if a route parameter is valid
 * Useful for validating dynamic routes
 */
export function isValidRouteParam(param: string | undefined, validValues: string[]): boolean {
  return param !== undefined && validValues.includes(param);
}

/**
 * Creates a route validator for skills
 */
export function createSkillRouteValidator() {
  const validSkillIds = [
    "angular", "spring", "react", "nest", "katalon", 
    "docker", "agile", "client", "qualite", "soon"
  ];

  return (skillId: string | undefined) => isValidRouteParam(skillId, validSkillIds);
}

/**
 * Creates a route validator for projects
 */
export function createProjectRouteValidator() {
  const validProjectIds = [
    "autonomie", "quality", "publicRelation", "scrum"
  ];

  return (projectId: string | undefined) => isValidRouteParam(projectId, validProjectIds);
}
