import { Component, type ErrorInfo, type ReactNode } from 'react'

interface Props { children: ReactNode }
interface State { failed: boolean }

export class ErrorBoundary extends Component<Props, State> {
  state: State = { failed: false }

  static getDerivedStateFromError(): State {
    return { failed: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Stroma interface error', error, info.componentStack)
  }

  render() {
    if (this.state.failed) {
      return (
        <main className="fatal-error">
          <span>Interface interrupted</span>
          <h1>The workspace could not be rendered.</h1>
          <p>Your task and provider credentials have not been sent.</p>
          <button onClick={() => window.location.reload()}>Reload workspace</button>
        </main>
      )
    }

    return this.props.children
  }
}
