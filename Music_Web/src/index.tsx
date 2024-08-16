import React from "react"
import ReactDOM from "react-dom/client"
import { ThemeProvider } from "styled-components"
import "./index.css"
import reportWebVitals from "./reportWebVitals"

import { media } from "./styles/media"
import theme from "./styles/theme"
import App from "./App"
import Provider from "./context/Provider"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
    <React.StrictMode>
        <ThemeProvider theme={{ ...theme, ...media }}>
            <Provider>
                <App />
            </Provider>
        </ThemeProvider>
    </React.StrictMode>
)

reportWebVitals()
