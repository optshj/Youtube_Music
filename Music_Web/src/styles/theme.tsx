const widths = {
    xlarge: "min(calc(100vw - 452px),1478px)",
    large: "min(calc(100vw - 364px),1478px)",
    medium: "min(calc(100vw - 196px),1478px)",
    small: "calc(100vw - 32px)"
}
const colors = {
    backgroundColor: "#030303"
}
const theme = {
    widths,
    colors
}

export type ThemeTypes = typeof theme

export default theme
