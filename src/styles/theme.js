import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        brick: '#D87D4A',
        lightBrick: '#FBAF85',
        black: '#101010',
        blacker: '#000000',
        white: '#F1F1F1',
        whiter: '#FAFAFA',
        whitest: '#FFFFFF'
    }
}

function Theme({ children }) {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

export default Theme;