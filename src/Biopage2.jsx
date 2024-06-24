import "./BioPage.css";

import "./App.css";
import "./card.css";
import Alert from "@mui/material/Alert";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./Main.css";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Input, Stack } from "@chakra-ui/react";

import * as React from "react";
import "@fontsource/roboto";

import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Autocomplete from "@mui/material/Autocomplete";

import PhoneUI from "./PhoneUI";

import img from "../public/defaultImage.jpg";
import Navbar from "./Navbar.jsx";
import LinkIcon from "@mui/icons-material/Link";

// import { createContext } from "react";

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

import BasicModal from "./Loader";
import FullScreenDialog from "./Modals";

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

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { Chip } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const BioPage2 = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [toggleState, setToggleState] = useState(1);
  const [Name, setNameValue] = useState("");
  const [username, setUsername] = useState("");
  const [Social, setsocial] = useState([]);
  const [color, setColor] = useState("white");
  const [About, setAbout] = useState("");
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

  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");

  const [producturl, setproducturl] = useState("");
  const [productname, setproductname] = useState("");
  const [productvideo, setproductvideo] = useState("");
  const [productimage, setproductimage] = useState();
  const [productdata, setproductdata] = useState([]);

  const [open1, setOpen1] = React.useState(false);
  const [activeButton, setActiveButton] = useState("social");
  const [flag, setflag] = useState(false);

  const [open4, setOpen4] = React.useState(false);

  const [outline, setOutline] = useState("");
  const [fontColor, setFontColor] = useState("black");
  const [fontfamily, setfontfamily] = useState("");
  const [selectedBgColor, setSelectedBgColor] = useState("#fffff");
  const [error, seterror] = useState(false);
  const [errorother, seterrorother] = useState(false);
  const [error2, seterror2] = useState(false);
  const [errorsocial, seterrorsocial] = useState(false);
  const [errorproduct, seterrorproduct] = useState(false);
  const [error3, seterror3] = useState(false);

  const handleClickOpen4 = () => {
    setOpen4(true);
  };

  const handleClose4 = () => {
    setOpen4(false);
  };

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

  // let dataredux=createContext();

  //  dataredux={  name : Name,
  //                     data: data,
  //                     lstoflinks:listOfLinks,
  //                     lstofotherlinks: listOfOtherLinks,
  //                     lstofproducts:productdata,
  //                     username: username,
  //                     selectedImage:selectedImage,
  //                     handleImageChange:handleImageChange(),
  //                     setSelectedImage:selectedImage,
  //                     about:About
  // }

  const inputRef = useRef(null);

  // token check
  // useEffect(() => {
  //   const token = localStorage.getItem("token");

  //   if (!token) {
  //     window.location.href = "/";
  //   }
  // }, []);

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
          setSelectedImage(response.data``);
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
        setproductname("");
        setproducturl("");
        setproductvideo("");
        seterror3(false);
      })
      .catch((error) => {
        console.log(error);
        // alert(error.response.data.errorMessage);
        seterrorproduct(error.response.data.errorMessage);

        seterror3(true);
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

        setOutline(response.data.outline);
        setFontColor(response.data.fontColor);
        setfontfamily(response.data.fontStyle);
        setSelectedBgColor(response.data.background);

        if (response.data.image) {
          setSelectedImage(response.data.image);
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
      alert("Fill something");
      return;
    }

    const token = localStorage.getItem("token");

    const newLink = { name, url };
    setLinkss([...links, newLink]);

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
        setName(""); // Reset the name input field
        setUrl(""); // Reset the url input field
        seterror(false);
      })
      .catch((error) => {
        console.log(error);
        // alert(error.response.data.errorMessage)

        seterrorother(error.response.data.errorMessage);

        seterror(true);
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
        setflag(true);
        seterror2(false);
      })

      .catch((error) => {
        console.log(error);
        seterrorsocial(error.response.data.errorMessage);

        seterror2(true);
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

  return (
    <>
      <div className="parent">
        <div
          className="div1"
          style={{ position: "fixed", right: "0", left: "0" }}
        >
          <Navbar
            clickopen={handleClickOpen}
            imagechange={handleImageChange}
            name={Name}
            about={About}
            updateinfo={handleUpdateInfo}
            setNameValue={setNameValue}
            setAbout={setAbout}
            setAbout1={setAbout1}
            setName1={setName1}
            about1={about1}
            name1={name1}
            selectedImage={selectedImage}
          />

          <div
            className=" sm:w-[51%]"
            style={{ display: error === true ? "block" : "none" }}
          >
            {error && (
              <Alert
                severity="error"
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      seterror(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
              >
                {errorother}
              </Alert>
            )}
          </div>

          <div
            className=" sm:w-[51%]"
            style={{ display: error2 === true ? "block" : "none" }}
          >
            {error2 && (
              <Alert
                severity="error"
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      seterror2(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
              >
                {errorsocial}
              </Alert>
            )}
          </div>

          <div
            className=" sm:w-[51%]"
            style={{ display: error3 === true ? "block" : "none" }}
          >
            {error3 && (
              <Alert
                severity="error"
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      seterror3(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
              >
                {errorproduct}
              </Alert>
            )}
          </div>
        </div>

        <div className="div2">
          {/* <div className=" ml-[40vw]  block sm:hidden">
            <Fab variant="extended">
              <RemoveRedEyeIcon />
              Preview
            </Fab>
          </div> */}

          <div className="div2-first mt-16 ">
            <div className=" justify-center mx-2 sm:ml-4  ">
              <div
                className="bg-[#eeeeee] rounded-[13px] justify-between items-center h-full min-h-[620px] sm:min-h-[600px] mt-8 sm:ml-8 top-[55px] "
                style={{ backgroundColor: "#83c5be" }}
              >
                <div className="flex justify-center gap-2 p-8">
                  <button
                    type="button"
                    className={` rounded-[8px] h-[78px] w-[219px] border-r-4   border-b-4 border-black p-2 ${
                      activeButton === "social"
                        ? " bg-[#006d77] text-white"
                        : "bg-zinc-50"
                    }`}
                    onClick={handleSocialLink}
                  >
                    Social Links
                  </button>

                  <button
                    type="button"
                    className={` rounded-[8px]  h-[78px] w-[219px] border-r-4 border-b-4 border-black p-2 ${
                      activeButton === "other"
                        ? " bg-[#006d77] text-white"
                        : "bg-zinc-50"
                    }`}
                    onClick={handleOtherLink}
                  >
                    Other Links
                  </button>
                  {/* <button
                    type="button"
                    className={`rounded-[8px]  h-[78px] w-[219px] border-r-4 border-b-4 border-black p-2 ${
                      activeButton === "product"
                        ? "bg-[#006d77] text-white"
                        : "bg-zinc-50"
                    }`}
                    onClick={handleProductLink}
                  >
                    Product Links
                  </button> */}
                </div>
                <div className="flex justify-center">
                  <Stack spacing={4}>
                    {activeButton === "social" && (
                      <>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            width: "100%",
                          }}
                        >
                          <Autocomplete
                            value={value}
                            onChange={(event, newValue) => {
                              setValue(newValue);
                            }}
                            selectedSocialMedia={inputValue}
                            onInputChange={(event, newInputValue) => {
                              setSelectedSocialMedia(newInputValue);
                            }}
                            id="controllable-states-demo"
                            options={data}
                            renderInput={(params) => (
                              <TextField
                                style={{ width: "35vmax" }}
                                {...params}
                                label="Social Media Name"
                                className="mx-14  h-14 bg-white rounded-[8px]"
                                variant="filled"
                                value={data}
                              />
                            )}
                          />
                        </div>
                        <br />
                        <Input
                          className=" w-[240px] mx-14 sm:w-[35vw] h-14 rounded-[8px] pl-3 "
                          htmlSize={4}
                          variant="filled"
                          placeholder="   Social Media Link"
                          value={selectedLink}
                          onChange={(evt) => setSelectedLink(evt.target.value)}
                        />
                        <div className=" flex justify-center sm:w-[100%]">
                          <button
                            className=" bg-green-500 w-[14vmax] h-[40px]  rounded-lg mt-2 mb-2"
                            onClick={handleAddButtonClick}
                          >
                            <BasicModal name="Add Link" />
                          </button>
                        </div>

                        <div className="links-container">
                          {listOfLinks.map((link, index) => (
                            <div key={index} className="links-div">
                              <div
                                className="label-div"
                                style={{
                                  marginTop: "1vh",
                                  fontWeight: "600",
                                  display: "flex",
                                  alignItems: "baseline",
                                  justifyContent: "space-between",
                                }}
                              >
                                <label style={{ fontSize: "2vh" }}>
                                  {renderSocialMediaIcon(link.name)}
                                </label>
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
                          className="rounded-[8px] w-[240px] mx-14 sm:w-[35vw] h-14 pl-3"
                          htmlSize={4}
                          variant="filled"
                          placeholder="   Other Media Platform"
                          onChange={handleNameChange}
                          value={name}
                        />
                        <br />
                        <Input
                          className="rounded-[8px] w-[240px] mx-14 sm:w-[35vw] h-14 pl-3 "
                          htmlSize={4}
                          variant="filled"
                          placeholder="   Other Link"
                          value={url}
                          onChange={handleUrlChange}
                        />
                        <div className=" flex justify-center  sm:w-[100%]">
                          <button
                            className=" bg-green-500 w-[14vmax] h-[40px] text-yellow-50 text-lg font-bold rounded-lg  mt-2 mb-2 "
                            onClick={addLink}
                          >
                            <BasicModal name="Add Link" />
                          </button>
                        </div>

                        <div className="links-container">
                          {listOfOtherLinks.map((link, index) => (
                            <div key={index} className="links-div">
                              <div
                                className="label-div"
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                }}
                              >
                                <label>
                                  {" "}
                                  <LinkIcon />
                                </label>
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
                                onClick={() =>
                                  deleteotherLink(link.name, link.url)
                                }
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
                          className="rounded-[8px] w-[240px] mx-14 sm:w-[35vw] h-14 pl-3"
                          htmlSize={4}
                          variant="filled"
                          value={productname}
                          placeholder="   Product Platform"
                          onChange={(evt) => setproductname(evt.target.value)}
                        />
                        <br />
                        <Input
                          className="rounded-[8px] w-[240px] mx-14 sm:w-[35vw] h-14 pl-3 "
                          htmlSize={4}
                          variant="filled"
                          placeholder="   Product URL"
                          value={producturl}
                          onChange={(evt) => setproducturl(evt.target.value)}
                        />
                        <br />
                        <Input
                          className="rounded-[8px] w-[240px] mx-14 sm:w-[35vw] h-14 pl-3 "
                          htmlSize={4}
                          variant="filled"
                          placeholder=" Youtube Videos Link Only"
                          value={productvideo}
                          onChange={(evt) => setproductvideo(evt.target.value)}
                        />
                        <br />
                        {/* <div  className=" w-full flex justify-center">
                        </div> */}
                        <div className=" flex flex-col justify-center items-center sm:w-[100% ]">
                          <input
                            type="file"
                            name="productimage"
                            id=""
                            style={{ width: "30%" }}
                            onChange={handleproduct}
                          />{" "}
                          <br />
                          <button
                            className=" bg-green-500 w-[14vmax] h-[40px] text-yellow-50 text-lg font-bold rounded-lg  mt-2 mb-2"
                            onClick={addproductlink}
                          >
                            <BasicModal name="Add Link" />
                          </button>
                        </div>
                        <div className="links-container">
                          {productdata.map((product, index) => (
                            <div key={index} className="links-div">
                              <div
                                className="label-div"
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                }}
                              >
                                <label>
                                  {" "}
                                  <ShoppingCartOutlinedIcon />
                                </label>
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
                <div
                  className="justify-center flex sm:hidden"
                  style={{
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                    left: "10px",
                    zIndex: "1000",
                  }}
                >
                  {/* <Chip
                    icon={<VisibilityIcon />}
                    label="Preview"
                    onClick={handleClickOpen4}
                    variant="outlined"
                    style={{ border: "2px solid black", fontWeight: "bolder",marginBottom:'2vh' }}
                  /> */}
                  <Chip
                    icon={<VisibilityIcon style={{ color: "white" }} />}
                    label="Preview"
                    onClick={handleClickOpen4}
                    variant="outlined"
                    style={{
                      border: "1px #006d77",
                      marginBottom: "5vh",
                      fontWeight: "bold",
                      backgroundColor: "#006d77",
                      color: "white",
                      borderRadius: "20px",
                      padding: "10px 20px",
                      cursor: "pointer",
                      height: "2.5rem",
                      filter: "drop-shadow( 0px 0px 8px #00663d)",
                    }}
                  />

                  <Dialog
                    fullScreen
                    open={open4}
                    onClose={handleClose4}
                    TransitionComponent={Transition}
                  >
                    <AppBar
                      sx={{ position: "relative" }}
                      style={{ backgroundColor: "#006d77" }}
                    >
                      <Toolbar>
                        <IconButton
                          edge="start"
                          color="inherit"
                          onClick={handleClose4}
                          aria-label="close"
                        >
                          <CloseIcon />
                        </IconButton>
                        <Typography
                          sx={{ ml: 2, flex: 1 }}
                          variant="h6"
                          component="div"
                        >
                          Preview
                        </Typography>
                      </Toolbar>
                    </AppBar>
                    <div style={{ marginRight: "50vw", position: "relative" }}>
                      <PhoneUI
                        name={Name}
                        lstoflinks={listOfLinks}
                        lstofotherlinks={listOfOtherLinks}
                        lstofproducts={productdata}
                        username={username}
                        selectedImage={selectedImage}
                        handleImageChange={handleImageChange}
                        about={About}
                        bgColor={selectedBgColor}
                        fontColor={fontColor}
                        fontfamily={fontfamily}
                        outline={outline}
                      />{" "}
                    </div>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>

          <div
            className="div2-second"
            style={{
              justifyContent: "center",
              position: "fixed",
              right: "200px",
              top: "45px",
              zIndex: "0",
            }}
          >
            {/* <dataredux.Provider value={dataredux}>          */}
            <PhoneUI
              name={Name}
              data={data}
              lstoflinks={listOfLinks}
              lstofotherlinks={listOfOtherLinks}
              lstofproducts={productdata}
              username={username}
              selectedImage={selectedImage}
              handleImageChange={handleImageChange}
              setSelectedImage={setSelectedImage}
              about={About}
              bgColor={selectedBgColor}
              fontColor={fontColor}
              fontfamily={fontfamily}
              outline={outline}
            />

            {/* </dataredux.Provider> */}
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};
export default BioPage2;
