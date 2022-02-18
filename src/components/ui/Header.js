import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Tabs,
  Tab,
  Button,
  Menu,
  MenuItem,
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

const LogoContainer = styled(Button)(({ theme }) => ({
  padding: 0,
  "&: hover": {
    backgroundColor: "transparent",
  },
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
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleChange = (e, value) => {
    setValue(value);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false);
  };

  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) setValue(0);
    else if (window.location.pathname === "/services" && value !== 1)
      setValue(1);
    else if (window.location.pathname === "/revolution" && value !== 2)
      setValue(2);
    else if (window.location.pathname === "/about" && value !== 3) setValue(3);
    else if (window.location.pathname === "/contact" && value !== 4)
      setValue(4);
    else if (window.location.pathname === "/estimate" && value !== 5)
      setValue(5);
  }, [value, window.location.pathname]);
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <LogoContainer
              disableFocusRipple
              onClick={() => setValue(0)}
              component={Link}
              to="/"
            >
              <img style={{ height: "8em" }} alt="company logo" src={logo} />
            </LogoContainer>
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
                aria-owns={anchorEl ? "services-menu" : undefined}
                aria-haspopup={anchorEl ? "true" : undefined}
                onMouseOver={handleClick}
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
              <NavTab
                value={4}
                label="Contact Us"
                to="contact"
                component={Link}
              />
            </Tabs>
            <EstimateButton
              component={Link}
              to="estimate"
              variant="contained"
              color="secondary"
            >
              Free Estimate
            </EstimateButton>
            <Menu
              id="services-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{ onMouseLeave: handleClose }}
            >
              <MenuItem
                onClick={() => {
                  handleClose();
                  setValue(1);
                }}
                component={Link}
                to="services"
              >
                Services
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  setValue(1);
                }}
                component={Link}
                to="customsoftware"
              >
                Custom Software Development
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  setValue(1);
                }}
                component={Link}
                to="mobileapps"
              >
                Mobile App Development
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  setValue(1);
                }}
                component={Link}
                to="websites"
              >
                Website Development
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <ToolbarMargin />
    </React.Fragment>
  );
}
