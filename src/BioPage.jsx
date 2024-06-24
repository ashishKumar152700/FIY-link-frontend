import "./App.css";
import "./card.css";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Input, Stack } from "@chakra-ui/react";
import { GrClose } from "react-icons/gr";
import * as React from "react";
import Button from "@mui/material/Button";
import "@fontsource/roboto";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Autocomplete from "@mui/material/Autocomplete";
import logo from "../public/cahrger.jpg";
import template1 from "../public/template1.png";
import template2 from "../public/template2.png";
import template3 from "../public/template3.png";
import { Component } from "react";
import ReactSearchBox from "react-search-box";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardActions } from "@mui/material";
import img2 from "../public/socialmedia.jpg";
import Analytics from "./Analytics";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

import img from "../public/defaultImage.jpg";

import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaTelegram,
  FaGithub,
  FaReddit,
  FaTwitch,
  FaWeixin,
  FaYoutube,
  FaTumblr,
  FaMedium,
  FaFlickr,
  FaLinkedin,
  FaTiktok,
  FaPinterest,
} from "react-icons/fa";

const options = [
  "Facebook",
  "Instagram",
  "Whatsapp",
  "Telegram",
  "Github",
  "Reddit",
  "Twitch",
  "WeChat",
  "YouTube",
  "Tumblr",
  "Medium",
  "Flickr",
  "LinkedIn",
  "TikTok",
  "Pinterest",
];

function Tabs() {
  const [toggleState, setToggleState] = useState(1);
  const [Name, setNameValue] = useState("");
  const [username, setUsername] = useState("");
  const [Social, setsocial] = useState([]);
  const [color, setColor] = useState("white");
  const [About, setAbout] = useState("");
  const [val, setval] = useState("");
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [links, setLinkss] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSocialMedia, setSelectedSocialMedia] = useState("");
  const [selectedLink, setSelectedLink] = useState("");
  const [listOfLinks, setListOfLinks] = useState([]);
  const [listOfOtherLinks, setListOfOtherLinks] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [name1, setName1] = useState("");
  const [about1, setAbout1] = useState("");
  const navigate = useNavigate();
  const [template, settemplate] = useState("");

  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");

  const [producturl, setproducturl] = useState("");
  const [productname, setproductname] = useState("");
  const [productvideo, setproductvideo] = useState("");
  const [productimage, setproductimage] = useState();
  const [productdata, setproductdata] = useState([]);

  const [open1, setOpen1] = React.useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const data = [
    "Facebook",
    "Instagram",
    "Whatsapp",
    "Telegram",
    "Github",
    "Reddit",
    "Twitch",
    "WeChat",
    "YouTube",
    "Tumblr",
    "Medium",
    "Flickr",
    "LinkedIn",
    "TikTok",
    "Pinterest",
  ];

  const inputRef = useRef(null);

  // token check
  //       useEffect(() => {
  //           const token = localStorage.getItem("token");

  //         if (!token) {
  //            window.location.href = "/";
  //           } else {
  // }
  //         }, []);

  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  function handleSocialLink() {
    setActiveButton("social");

    console.log("clicked social");
  }

  function handleOtherLink() {
    setActiveButton("other");
    console.log("clicked other");
  }

  function handleProductLink() {
    setActiveButton("product");
    console.log("clicked product");
  }

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const handleClickOpen = () => {
    setOpen(true);
    setAbout1(About);
    setName1(Name);
  };
  const handleClose = () => {
    setAbout(about1);
    setNameValue(name1);
    setOpen(false);
    setColor(false);
  };

  const handleUpdateInfo = () => {
    setOpen(false);
    const token = localStorage.getItem("token");

    const obj = {
      name: Name,
      about: About,
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

  const handleproduct = (event) => {
    const file = event.target.files[0];
    setproductimage(file);

    // setFormData(formData)
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));

    const form = new FormData();
    form.append("image", file);
    setFormData(formData);

    const token = localStorage.getItem("token");

    axios
      .post("http://192.168.0.118:5000/user/upload-image", form, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        console.log(response);

        if (response.data) {
          setSelectedImage(
            "http://192.168.0.118:5000/user/auth/get-user-image/" +
              response.data
          );
        } else {
          setSelectedImage(img);
        }
        // setSelectedImage(response.data);
        // Handle the response
      })
      .catch((error) => {
        console.log(error);
        // Handle the error
      });
  };

  const addproductlink = () => {
    const token = localStorage.getItem("token");

    const form = new FormData();
    form.append("productImage", productimage);
    form.append("productName", productname);
    form.append("productUrl", producturl);
    form.append("productVideo", productvideo);

    axios
      .post("http://192.168.0.118:5000/user/add-product", form, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        console.log(response);

        setproductdata(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (username === "") {
      callGetUserDetails();
    }
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
        setNameValue(response.data.name);
        setListOfLinks(response.data.listOfLinks);
        setUsername(response.data.username);
        setListOfOtherLinks(response.data.listOfOtherLinks);
        setAbout(response.data.bio);
        setproductdata(response.data.listOfProducts);
        if (response.data.image) {
          setSelectedImage(
            "http://192.168.0.118:5000/user/auth/get-user-image/" +
              response.data.image
          );
        } else {
          setSelectedImage(img);
        }
      })
      .catch((error) => {
        console.log("error...");
      });
  };

  const handlesubmit = () => {
    navigate(`/${username}`);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const addLink = () => {
    if (name.trim() === "" || url.trim() === "") {
      alert("fill something");
    }
    const token = localStorage.getItem("token");

    const newLink = { name, url };
    setLinkss([...links, newLink]);
    setName("");
    setUrl("");

    axios
      .post(
        "http://192.168.0.118:5000/user/add-other-link",
        { name: name, url: url },
        {
          headers: {
            "content-type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((response) => {
        console.log(response);
        setListOfOtherLinks(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteLink = (name, link) => {
    const token = localStorage.getItem("token");

    axios
      .post(
        "http://192.168.0.118:5000/user/delete-link",
        { name: name, link: link },
        {
          headers: {
            "content-type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((response) => {
        console.log(response);
        setListOfLinks(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteotherLink = (name, url) => {
    const token = localStorage.getItem("token");

    axios
      .post(
        "http://192.168.0.118:5000/user/delete-other-link",
        { name: name, url: url },
        {
          headers: {
            "content-type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((response) => {
        console.log(response);
        setListOfOtherLinks(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteProduct = (product) => {
    const token = localStorage.getItem("token");
    axios
      .post("http://192.168.0.118:5000/user/delete-product", product, {
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        console.log(response);
        setproductdata(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleanalytics = () => {
    navigate("/anaytics");
  };

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  const handleAddButtonClick = (evt) => {
    if (selectedSocialMedia && selectedLink) {
      const updatedSocialMedia = {
        name: selectedSocialMedia,
        icon: renderSocialMediaIcon(selectedSocialMedia),
        link: selectedLink,
      };
      setsocial((prevSocial) => [...prevSocial, updatedSocialMedia]);
      setSelectedSocialMedia("");
      setSelectedLink("");
      setValue("");
    }

    const token = localStorage.getItem("token");

    axios
      .post(
        "http://192.168.0.118:5000/user/add-link",
        { name: selectedSocialMedia, link: selectedLink },
        {
          headers: {
            "content-type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setListOfLinks(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const renderSocialMediaIcon = (socialMedia) => {
    switch (socialMedia) {
      case "Facebook":
        return <FaFacebook />;
      case "Instagram":
        return <FaInstagram />;
      case "Whatsapp":
        return <FaWhatsapp />;
      case "Telegram":
        return <FaTelegram />;
      case "Github":
        return <FaGithub />;
      case "Reddit":
        return <FaReddit />;
      case "Twitch":
        return <FaTwitch />;
      case "WeChat":
        return <FaWeixin />;
      case "YouTube":
        return <FaYoutube />;
      case "Tumblr":
        return <FaTumblr />;
      case "Medium":
        return <FaMedium />;
      case "Flickr":
        return <FaFlickr />;
      case "LinkedIn":
        return <FaLinkedin />;
      case "TikTok":
        return <FaTiktok />;
      case "Pinterest":
        return <FaPinterest />;
      default:
        return null;
    }
  };
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const signout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <div className="navbar-bio">
        <Box sx={{ flexGrow: 1 }} className="navbar-admin">
          <AppBar
            className="App-bar"
            style={{
              background: "rgba(22, 22, 23, 0.78)",

              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(11.4px)",
              WebkitBackdropFilter: "blur(11.4px)",
            }}
          >
            <Toolbar>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
                style={{ color: "black", fontSize: "5vh" }}
              ></Typography>

              <span className="submit-biopage">
                <Button
                  variant="contained"
                  color="success"
                  style={{
                    backgroundColor: "#00B4D8",
                    width: "30%",
                    marginLeft: "5vw",
                  }}
                  onClick={handlesubmit}
                >
                  Link
                </Button>
              </span>

              <span className="template" style={{ marginRight: "1vw" }}>
                <div>
                  <Button variant="contained" onClick={handleClickOpen1}>
                    Apperance
                  </Button>
                  <Dialog
                    open={open1}
                    onClose={handleClose1}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">
                      {"Customize Your FIY Link"}
                    </DialogTitle>
                    <DialogContent>
                      <div className="parent-templates">
                        <div className="first-templates">
                          <img
                            src={template1}
                            alt=""
                            id
                            height={100}
                            width={100}
                            onClick="settemplate('path/to/template1.jpg')"
                          />
                        </div>
                        <div className="second-templates">
                          <img
                            src={template2}
                            alt=""
                            height={100}
                            width={100}
                            onClick="settemplate('path/to/template2.jpg')"
                          />
                        </div>
                        <div className="third-templates">
                          <img
                            src={template3}
                            alt=""
                            height={100}
                            width={100}
                            onClick="settemplate('path/to/template3.jpg')"
                          />
                          `
                        </div>
                      </div>
                      <DialogContentText id="alert-dialog-description">
                        <p className="Color-biopage-background">
                          Change Your Background
                        </p>
                        <div
                          className="button-container-bio"
                          style={{ backgroundColor: "white" }}
                        >
                          {" "}
                          <br />
                          <button
                            className="btn-1"
                            style={{ backgroundColor: "#AAA7D4" }}
                            onClick={() => changeColor("#AAA7D4")}
                          >
                            Red
                          </button>{" "}
                          &nbsp; &nbsp;
                          <button
                            className="btn-1"
                            style={{ backgroundColor: "#BFD4C7" }}
                            onClick={() => changeColor("#BFD4C7")}
                          >
                            Green
                          </button>{" "}
                          &nbsp; &nbsp;
                          <button
                            className="btn-1"
                            style={{ backgroundColor: "#6c757d" }}
                            onClick={() => changeColor("#6c757d")}
                          >
                            Blue
                          </button>
                        </div>
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose1}>Disagree</Button>
                      <Button onClick={handleClose1} autoFocus>
                        Agree
                      </Button>
                    </DialogActions>
                  </Dialog>
                </div>
              </span>

              <span>
                <Button
                  variant="contained"
                  onClick={handleanalytics}
                  style={{
                    marginRight: "1vw",
                  }}
                >
                  Analytics
                </Button>
              </span>

              <span className="edit-biopage-span">
                <Button
                  variant="contained"
                  onClick={handleClickOpen}
                  style={{
                    marginRight: "1vw",
                  }}
                >
                  Edit
                </Button>{" "}
              </span>
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle className="edit-btn-biopage">Edit</DialogTitle>
                <DialogContent>
                  <span style={{ fontSize: "2vh" }}>
                    {" "}
                    <input type="file" onChange={handleImageChange} />{" "}
                  </span>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Name"
                    type="text"
                    defaultValue={Name}
                    fullWidth
                    variant="standard"
                    maxlength="19"
                    onChange={(evt) => setNameValue(evt.target.value)}
                  />
                  <br /> <br />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="About"
                    defaultValue={About}
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={(evt) => setAbout(evt.target.value)}
                  />
                  <hr />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button onClick={handleUpdateInfo}>Submit</Button>
                </DialogActions>
              </Dialog>

              <span className="signout-biopage">
                <Button
                  color="inherit"
                  onClick={signout}
                  style={{
                    backgroundColor: "red",
                    boxShadow: "4px 4px black",
                    borderRadius: "15px",
                  }}
                >
                  SignOut
                </Button>{" "}
              </span>
            </Toolbar>
          </AppBar>
        </Box>
      </div>

      {/* sidenav  */}

      <div
        className="bio-main"
        style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr" }}
      >
        {/* <div className="bio-card"> */}

        <div className=" bg-gray-200 rounded-[13px] justify-between items-center h-[580px] ">
          <div className="flex justify-center gap-2 p-8">
            <button
              type="button"
              className={` rounded-none h-[78px] w-[219px] border-r-4 border-b-4 border-black p-2 ${
                activeButton === "social"
                  ? " bg-blue-600 text-white"
                  : "bg-zinc-50"
              }`}
              onClick={handleSocialLink}
            >
              Social Links
            </button>

            <button
              type="button"
              className={` rounded-none  h-[78px] w-[219px] border-r-4 border-b-4 border-black p-2 ${
                activeButton === "other"
                  ? " bg-blue-600 text-white"
                  : "bg-zinc-50"
              }`}
              onClick={handleOtherLink}
            >
              Other Links
            </button>
            <button
              type="button"
              className={`rounded-none  h-[78px] w-[219px] border-r-4 border-b-4 border-black p-2 ${
                activeButton === "product"
                  ? " bg-blue-600 text-white"
                  : "bg-zinc-50"
              }`}
              onClick={handleProductLink}
            >
              Product Links
            </button>
          </div>
          <div className="flex justify-center">
            <Stack spacing={4}>
              {activeButton === "social" && (
                <>
                  <Input
                    className=" w-[240px] sm:w-[35vw] h-14 "
                    htmlSize={4}
                    variant="filled"
                    placeholder="   Social Media Platform"
                  />
                  <br />
                  <Input
                    className="w-[240px] sm:w-[35vw] h-14 "
                    htmlSize={4}
                    variant="filled"
                    placeholder="   Social Media Link"
                    onChange={(evt) => setSelectedLink(evt.target.value)}
                  />

                  <button
                    className=" bg-green-500 w-[11vmax] h-[40px] text-yellow-50 text-lg font-bold rounded-lg "
                    id="socialmedia-btn"
                    onClick={handleAddButtonClick}
                  >
                    ADD
                  </button>

                  <div className="links-container">
                    {listOfLinks.map((link, index) => (
                      <div key={index} className="links-div">
                        <div
                          className="label-div"
                          style={{ marginTop: "1vh", fontWeight: "600" }}
                        >
                          <label>{link.name}</label>
                          <br />
                          {/* <label>{link.link}</label> */}
                        </div>
                        <div
                          className="delete-div"
                          onClick={() => deleteLink(link.name, link.link)}
                        >
                          X
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {activeButton === "other" && (
                <>
                  <Input
                    className=" w-[240px] sm:w-[35vw] h-14 "
                    htmlSize={4}
                    variant="filled"
                    placeholder="   Other Media Platform"
                    onChange={handleNameChange}
                  />
                  <br />
                  <Input
                    className="w-[240px] sm:w-[35vw] h-14 "
                    htmlSize={4}
                    variant="filled"
                    placeholder="   Other Link"
                    onChange={handleUrlChange}
                  />
                  <button
                    className=" bg-green-500 w-[14vmax] h-[40px] text-yellow-50 text-lg font-bold rounded-lg"
                    onClick={addLink}
                  >
                    ADD
                  </button>

                  <div className="links-container">
                    {listOfOtherLinks.map((link, index) => (
                      <div key={index} className="links-div">
                        <div className="label-div">
                          <label
                            style={{
                              fontWeight: "600",
                              marginTop: "1vh",
                              fontFamily: "Roboto",
                              color: "#353535",
                            }}
                          >
                            {link.name}
                          </label>
                          <br />
                          {/* <label>{link.url}</label> */}
                        </div>
                        <div
                          className="delete-div"
                          onClick={() => deleteotherLink(link.name, link.url)}
                        >
                          X
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {activeButton === "product" && (
                <>
                  <Input
                    className=" w-[240px] sm:w-[35vw] h-14 "
                    htmlSize={4}
                    variant="filled"
                    placeholder="   Product Platform"
                    onChange={(evt) => setproducturl(evt.target.value)}
                  />
                  <br />
                  <Input
                    className="w-[240px] sm:w-[35vw] h-14 "
                    htmlSize={4}
                    variant="filled"
                    placeholder="   Product URL"
                    o
                    onChange={(evt) => setproducturl(evt.target.value)}
                  />

                  <Input
                    className="w-[240px] sm:w-[35vw] h-14 "
                    htmlSize={4}
                    variant="filled"
                    placeholder="   Product video url"
                    onChange={(evt) => setproductvideo(evt.target.value)}
                  />
                  <button
                    className=" bg-green-500 w-[14vmax] h-[40px] text-yellow-50 text-lg font-bold rounded-lg"
                    onClick={addproductlink}
                  >
                    ADD
                  </button>

                  <div className="links-container">
                    {productdata.map((product, index) => (
                      <div key={index} className="links-div">
                        <div className="label-div">
                          <label
                            style={{
                              fontWeight: "600",
                              marginTop: "1vh",
                              fontFamily: "Roboto",
                              color: "#353535",
                            }}
                          >
                            {product.productName}
                          </label>
                          <br />
                          {/* <label>{link.url}</label> */}
                        </div>
                        <div
                          className="delete-div"
                          onClick={() => deleteProduct(product)}
                        >
                          X
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </Stack>
          </div>
          <br />
          <div className="flex justify-center"></div>
        </div>

        <div className="bio-phone" style={{ zIndex: "3" }}>
          <div
            className="bio-mainphone"
            style={{
              marginTop: "10vh",
              border: "5px solid black",
              height: "70vh",
              width: "20vw",
              borderRadius: "6vh",
              flexWrap: "wrap",
              overflowWrap: "break-word",
              overflowY: "auto",
              background: color,
              // borderRadius: '16px',

              // border: '1px solid rgba(255, 255, 255, 0.25)',
            }}
          >
            <span style={{ marginLeft: "6vw", color: "black" }}>
              {" "}
              <b> FIY-LINK </b>
            </span>
            {/* <input type="file" name="image-upload" id="image-upload"  style={{borderRadius:'50%',backgroundColor:'red',width:'10vh'}} /> */}

            <div style={{ display: "flex" }}>
              {selectedImage && (
                <img
                  src={selectedImage}
                  alt="Selected"
                  onChange={handleImageChange}
                  style={{
                    height: "9vh",
                    width: "4vw",
                    marginLeft: "0.5vw",
                    borderRadius: "50%",
                  }}
                />
              )}

              <div className="name-icons" style={{ paddingLeft: "1vw" }}>
                <div
                  className="Name"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    overflowWrap: "break-word",
                    overflowY: "-moz-initial",
                  }}
                >
                  {Name}
                </div>
                <div className="social-container">
                  {listOfLinks.map((link) => (
                    <a
                      key={link.index}
                      target="_blank"
                      href={link.link}
                      className="social-icon-container"
                      style={{ fontSize: "2vh", color: "black", margin: "0" }}
                    >
                      {renderSocialMediaIcon(link.name)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ marginLeft: "1.5vw", marginRight: "1.5vw" }}>
              <span className="about-phone-bio">{About} </span> <hr />{" "}
            </div>

            <div
              className="card-div"
              style={{
                flexWrap: "wrap",
                overflowWrap: "break-word",
                overflowY: "auto",
              }}
            >
              {listOfOtherLinks.map((link, index) => (
                <div key={index}>
                  <div className="card-bar">
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="search-box"></div>

            <div className="product-section">
              {productdata.map((product, index) => (
                <div key={index}>
                  <Card sx={{ display: "flex", flexDirection: "column" }}>
                    <CardMedia
                      component="img"
                      image={
                        product.productImage
                          ? "http://192.168.0.118:5000/user/auth/get-product-image/" +
                            product.productImage
                          : img2
                      }
                      alt="Live from space album cover"
                    />
                    <span style={{ alignSelf: "center" }}>
                      {" "}
                      <b> {product.productName} </b>
                    </span>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tabs;
