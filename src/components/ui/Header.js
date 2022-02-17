import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Tabs,
  Tab,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import logo from "../../assets/logo.svg";

const useStyles = makeStyles((theme) => ({
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
}));

const NavTab = styled(Tab)(({ theme }) => ({
  ...theme.typography.tab,
  minWidth: 10,
  marginLeft: "25px",
}));

const ToolbarMargin = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
  marginBottom: "3em",
}));

const EstimateButton = styled(Button)(({ theme }) => ({
  ...theme.typography.estimate,
  borderRadius: "50px",
  marginLeft: "50px",
  marginRight: "25px",
  height: "45px",
}));

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
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (e, value) => {
    setValue(value);
  };
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <img style={{ height: "7em" }} alt="company logo" src={logo} />
            <Tabs
              value={value}
              onChange={handleChange}
              sx={{
                marginLeft: "auto",
              }}
              textColor="secondary"
              indicatorColor="secondary"
            >
              <NavTab value={0} label="Home" to="/" component={Link} />
              <NavTab
                value={1}
                label="Services"
                to="services"
                component={Link}
              />
              <NavTab
                value={2}
                label="The Revolution"
                to="revolution"
                component={Link}
              />
              <NavTab value={3} label="About Us" to="about" component={Link} />
              <NavTab value={4} label="Contact" to="contact" component={Link} />
            </Tabs>
            <EstimateButton variant="contained" color="secondary">
              Free Estimate
            </EstimateButton>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <ToolbarMargin />
    </React.Fragment>
  );
}
