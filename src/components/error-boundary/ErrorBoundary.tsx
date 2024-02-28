import { Paper, Typography } from '@mui/material'
import { Component, ErrorInfo } from 'react'
import classes from './ErrorBoundary.module.scss'
import { TProps, TState } from './types'

class ErrorBoundary extends Component<TProps, TState> {
  public state: TState = {
    hasError: false,
  }

  public static getDerivedStateFromError(_: Error): TState {
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log('Uncaught error:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Paper className={classes.paper}>
          <Typography variant='h2'>Упс... Что-то пошло не так, перезагрузите страницу</Typography>
        </Paper>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
