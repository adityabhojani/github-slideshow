import React from 'react';
import type { ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
          <h1 className="text-3xl font-bold mb-4 text-red-600">Oops, something went wrong.</h1>
          <p className="text-gray-600 mb-8 max-w-md">
            We're sorry, but an unexpected error occurred. You can try refreshing the page or returning to the homepage.
          </p>
          <div className="flex space-x-4">
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition"
            >
              Try again
            </button>
            <a
              href="/"
              className="px-6 py-2 border border-teal-600 text-teal-600 rounded hover:bg-teal-50 transition"
            >
              Go to homepage
            </a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;