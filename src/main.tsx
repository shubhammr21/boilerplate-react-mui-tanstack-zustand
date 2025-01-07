import { CssBaseline } from "@mui/material"
import { ThemeProvider } from "@mui/material/styles"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import "./index.css"
import theme from "./theme"

const rootElement = document.getElementById("root")
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </StrictMode>,
  )
} else {
  console.error("Root element not found")
}
