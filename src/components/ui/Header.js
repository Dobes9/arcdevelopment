import React from "react";
import { AppBar, Toolbar, useScrollTrigger, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,

    }
}))

function ElevationScroll({ children }) {
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}


export default function Header() {
    const classes = useStyles()
    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position="fixed">
                    <Toolbar>
                        <Typography variant="h3">Arc Development</Typography>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}></div>
        </React.Fragment>
    )
}