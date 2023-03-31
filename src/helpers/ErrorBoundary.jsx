// Components
import { ErrorPage } from "../pages/Error/ErrorPage";
// Packages
import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can customize the fallback UI here
      return <ErrorPage />;
    }

    // If there's no error, render the children
    return this.props.children;
  }
}

export default ErrorBoundary;
