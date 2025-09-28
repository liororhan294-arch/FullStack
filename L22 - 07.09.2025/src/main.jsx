import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App_01 from './EX_01/App'
import App_02 from "./EX_02/App"
import App_03 from "./EX_03/App"
import App_05 from "./EX_05/App"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App_01 /> */}
    {/* <App_02 /> */}
    {/* <App_03 /> */}
    <App_05 />
  </StrictMode>,
)