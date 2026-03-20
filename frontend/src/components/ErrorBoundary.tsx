import { Component, type ReactNode } from 'react';

interface Props { children: ReactNode; }
interface State { hasError: boolean; }

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State { return { hasError: true }; }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px', padding: '40px' }}>
          <span style={{ fontSize: '3rem' }}>⚠️</span>
          <h2 style={{ color: 'var(--primary)', fontFamily: 'var(--font-display)' }}>Something went wrong</h2>
          <p style={{ color: 'var(--text-muted)' }}>Please refresh the page or try again later.</p>
          <button className="btn btn-dark" onClick={() => window.location.reload()}>Refresh Page</button>
        </div>
      );
    }
    return this.props.children;
  }
}
