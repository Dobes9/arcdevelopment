import React from "react";
import { AppBar, Toolbar, useScrollTrigger, Tabs, Tab } from "@mui/material";
import { makeStyles } from "@mui/styles"
import { styled } from "@mui/material/styles";
import logo from "../../assets/logo.svg";

const useStyles = makeStyles(theme => ({
    // toolbarMargin: {
    //     ...theme.mixins.toolbar,
    //     marginBottom: "3em"
    // },
    // logo: {
    //     height: "7em"
    // },
    // tabContainer: {
    //     marginLeft: "auto"
    // },
    // tab: {
    //     ...theme.typography.tab,
    //     minWidth: 10,
    //     marginLeft: "25px"
    // }
}))

const NavTab = styled(Tab)(({ theme }) => ({
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px"
}))

const ToolbarMargin = styled("div")(({ theme }) => ({
    ...theme.mixins.toolbar,
    marginBottom: "3em"
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
                    <Toolbar disableGutters>
                        <img style={{ height: "7em" }} alt="company logo" src={logo} />
                        <Tabs sx={{ marginLeft: "auto" }} >
                            <NavTab label="Home" />
                            <NavTab label="Services" />
                            <NavTab label="The Revolution" />
                            <NavTab label="About Us" />
                            <NavTab label="Contact" />
                        </Tabs>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <ToolbarMargin />
        </React.Fragment>
    )
}