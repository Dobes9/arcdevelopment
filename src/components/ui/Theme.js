import { ThemeContext } from "@emotion/react";
import { createTheme } from "@mui/material";

const arcBlue = "#0b72b9"
const arcOrange = "#ffba60"

export default createTheme({
    palette: {
        common: {
            blue: arcBlue,
            orange: arcOrange
        },
        primary: {
            main: arcBlue
        },
        secondary: {
            main: arcOrange
        }
    },
    typography: {
        tab: {
            fontFamily: "Raleway",
            textTransform: "none",
            fontWeight: 700,
            fontSize: "1rem",
            color: "whitesmoke"
        }
    }
})