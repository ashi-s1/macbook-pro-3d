import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
    this.setState({ errorInfo })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '40px',
          color: '#ff4d4f',
          backgroundColor: '#141414',
          minHeight: '100vh',
          fontFamily: 'monospace',
          boxSizing: 'border-box'
        }}>
          <h1 style={{ color: '#fff', fontSize: '24px', marginBottom: '16px' }}>⚠️ Something went wrong</h1>
          <p style={{ color: '#ff7875', fontSize: '16px', marginBottom: '20px' }}>
            {this.state.error && this.state.error.toString()}
          </p>
          <pre style={{
            backgroundColor: '#1f1f1f',
            padding: '16px',
            borderRadius: '8px',
            overflowX: 'auto',
            color: '#d9d9d9',
            fontSize: '13px',
            lineHeight: '1.5'
          }}>
            {this.state.errorInfo?.componentStack || this.state.error?.stack}
          </pre>
          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              backgroundColor: '#0071e3',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            Reload Page
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary

