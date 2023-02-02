import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { IssueProvider } from './contexts/IssueContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <IssueProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </IssueProvider>
    </ThemeProvider>
  )
}
