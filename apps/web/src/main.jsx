import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { restoreGithubPagesRoute } from './githubPages'
import { routerBaseName } from './router'
import './styles/gate1.css'

restoreGithubPagesRoute(routerBaseName)

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
