import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import axios from "axios";
import BasicModal from "./Loader";
import { useState, useEffect } from "react";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Slide from "@mui/material/Slide";
import DialogContentText from "@mui/material/DialogContentText";
import "./navbar.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Navbar = ({
  imagechange,
  name,
  about,
  setNameValue,
  setAbout,
  setAbout1,
  setName1,
  about1,
  name1,
  selectedImage,
}) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [show, setshow] = useState(false);
  const [selectedimage, setSelectedImage] = useState(null);
  const [username, setusername] = useState(null);
  const [plan, setplan] = useState("");
  const [open25, setOpen25] = React.useState(false);

  const handleClickOpen25 = () => {
    setOpen25(true);
  };

  const handleClose25 = () => {
    setOpen25(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
    setAbout1(about);
    setName1(name);
  };
  const handleClose = () => {
    setAbout(about1);
    setNameValue(name1);
    setOpen(false);
  };

  useEffect(() => {
    callGetUserDetails();
  }, []);

  const callGetUserDetails = () => {
    const token = localStorage.getItem("token");

    axios
      .get("http://192.168.0.118:5000/user/get-user-info", {
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        if (response.data.image) {
          setSelectedImage(response.data.image);
        } else {
          setSelectedImage("image laga ");
        }
        console.log(response);
        console.log("radhe radhe");
        setusername(response.data.username);
        setplan(response.data.currentPlan);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleUpdateInfo = () => {
    setOpen(false);
    const token = localStorage.getItem("token");

    const obj = {
      name: name,
      about: about,
    };

    axios
      .post("http://192.168.0.118:5000/user/update-info", obj, {
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setNameValue(response.data.name);
        setAbout(response.data.about);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleanalytics = () => {
    navigate("/anaytics");
  };
  const handlepayment = () => {
    navigate("/payment");
  };
  const handlebacktomain = () => {
    navigate("/admin");
  };
  const handleapperance = () => {
    navigate("/apperance");
  };

  const handlesubmit = () => {
    setshow(true);

    navigate(`/${username}`);
  };

  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "#006d77",
        maxWidth: "auto",
        margin: "0",
        padding: "0",
      }}
    >
      <Container maxWidth="xl" style={{ margin: "0", padding: "0" }}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              color: "#80ed99",
            }}
          >
            FIY-LINK
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              style={{ color: "white" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu} >
                <Typography textAlign="center" >{page}</Typography>
              </MenuItem>


            ))} */}
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center" onClick={handleapperance}>
                  {" "}
                  <b> Apperance </b>
                </Typography>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center" onClick={handleanalytics}>
                  {" "}
                  <b> Analytics </b>
                </Typography>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center" onClick={handlepayment}>
                  {" "}
                  <b> Payment </b>
                </Typography>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center" onClick={handlesubmit}>
                  {" "}
                  <b> Get Your Link </b>
                </Typography>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center" onClick={handlebacktomain}>
                  {" "}
                  <b> Details </b>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              color: "#80ed99",
            }}
          >
            FIY-LINK
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {/* {pages.map((page) => (
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              {page}
            </Button>
          ))} */}
            <Button
              onClick={handleapperance}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <b> Apperance </b>
            </Button>

            <Button
              sx={{ my: 2, color: "white", display: "block" }}
              onClick={handleanalytics}
            >
              <b> Analytics </b>
            </Button>

            <Button
              sx={{ my: 2, color: "white", display: "block" }}
              onClick={handlesubmit}
            >
              <BasicModal name="Get Your Link" />
            </Button>

            <Button
              sx={{ my: 2, color: "white", display: "block" }}
              onClick={handlepayment}
            >
              <b> prices </b>
            </Button>

            <Button
              sx={{ my: 2, color: "white", display: "block" }}
              onClick={handlebacktomain}
            >
              <b> Details</b>
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0.01 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={selectedImage} />

                <KeyboardArrowDownIcon style={{ color: "white" }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem>
                <Typography textAlign="center" onClick={handleClickOpen25}>
                  {" "}
                  <b> Change your Profile </b>
                </Typography>

                <div>
                  <Dialog
                    open={open25}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose25}
                    aria-describedby="alert-dialog-slide-description"
                  >
                    <DialogTitle>{" Change your Profile ?"}</DialogTitle>
                    <DialogContent style={{ overflowX: "hidden" }}>
                      <span>
                        <input
                          type="file"
                          onChange={imagechange}
                          // style={{width:'30rem'}}
                        />
                      </span>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose25}>Close</Button>
                      <Button onClick={handleClose25}>Save</Button>
                    </DialogActions>
                  </Dialog>
                </div>
              </MenuItem>

              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">
                  <span onClick={handleClickOpen}>
                    <b> Edit </b>
                  </span>
                  <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Edit</DialogTitle>
                    <DialogContent>
                      <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        x
                        label="Name"
                        type="text"
                        defaultValue={name}
                        fullWidth
                        variant="standard"
                        inputProps={{ maxlength: 10 }}
                        onChange={(evt) => setNameValue(evt.target.value)}
                      />
                      <br /> <br />
                      <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="About"
                        defaultValue={about}
                        type="text"
                        fullWidth
                        // style={{width:'30rem'}}
                        variant="standard"
                        inputProps={{ maxlength: 50 }}
                        onChange={(evt) => setAbout(evt.target.value)}
                      />
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose}>Cancel</Button>
                      <Button onClick={handleUpdateInfo}>Submit</Button>
                    </DialogActions>
                  </Dialog>
                </Typography>
              </MenuItem>

              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center" onClick={signout}>
                  {" "}
                  <b> Log Out </b>
                </Typography>
              </MenuItem>

              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">
                  {" "}
                  CURRENT PLAN : <b style={{ color: "goldenrod" }}>
                    {" "}
                    {plan}{" "}
                  </b>{" "}
                  <WorkspacePremiumIcon />
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
