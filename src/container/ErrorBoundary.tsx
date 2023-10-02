import { Component, ErrorInfo, ReactNode } from "react";
import { ViewOutlet } from "./ViewOutlet";

export default class ErrorBoundary extends Component<any, any, any> {
  constructor(props) {
    super(props);
    this.state = { errorOccured: false };
  }

  static getDerivedStateFromError() {
    return { errorOccured: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.errorOccured) {
      return (
        <ViewOutlet>
          <h5>Well, that was unexpected...</h5>
          <a onClick={() => window.location.reload()}>Try to refresh?</a>
        </ViewOutlet>
      );
    }
    return this.props.children;
  }
}
