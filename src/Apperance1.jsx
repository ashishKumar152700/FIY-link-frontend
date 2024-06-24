import "./Apperance1.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Navbar from "./Navbar.jsx";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import PhoneUI from "./PhoneUI.jsx";
import axios from "axios";
import BioPage2 from "./Biopage2";
import Payment from "./Payment";
import Analytics from "./Analytics";
import img from "../public/defaultImage.jpg";
import * as React from "react";
import Chip from "@mui/material/Chip";
import VisibilityIcon from "@mui/icons-material/Visibility";
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
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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

const Apperance1 = () => {
  const [template, setTemplate] = useState(0);

  const [outline, setOutline] = useState("");
  const [fontColor, setFontColor] = useState("black");
  const [fontfamily, setfontfamily] = useState("");

  const [backgnd, setbackgnd] = useState(0);

  const [Name, setNameValue] = useState("");
  const [listoflinks, setListOfLinks] = useState([]);
  const [username, setUsername] = useState("");
  const [listOfOtherLinks, setListOfOtherLinks] = useState([]);
  const [about, setAbout] = useState("");
  const [productdata, setproductdata] = useState([]);
  const [selectedimage, setSelectedImage] = useState(null);
  const [open5, setOpen5] = React.useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const [selectedBgColor, setSelectedBgColor] = useState("#fff");
  const [gradientColor, setGradientColor] = useState(
    "linear-gradient(to right, #ffb703, #ff0000)"
  );

  const handleClickOpen5 = () => {
    setOpen5(true);
  };

  const handleClose5 = () => {
    setOpen5(false);
  };

  const textstyle = [
    { label: "sans-serif", Number: 1 },
    { label: "Kanit", Number: 2 },
    { label: "Lato", Number: 3 },
    { label: "cursive", Number: 4 },
    { label: "Oswald", Number: 5 },
    { label: "Poppins", Number: 6 },
    { label: "Roboto", Number: 7 },
  ];
  const handleClickSave = () => {
    showAlert();

    const data1 = {
      selectedBgColor: selectedBgColor,
      outline: outline,
      fontfamily: fontfamily,
      fontColor: fontColor,
    };
    console.log(data1);
    const token = localStorage.getItem("token");
    axios
      .post(
        "http://192.168.0.118:5000/user/set-appearance",
        {
          outline: outline,
          fontColor: fontColor,
          fontStyle: fontfamily,
          background: selectedBgColor,
        },
        {
          headers: {
            "content-type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((response) => {
        console.log(response);
        setOutline(response.data.outline);
        setFontColor(response.data.fontColor);
        setfontfamily(response.data.fontStyle);
        setSelectedBgColor(response.data.background);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(gradientColor);
  // useEffect(() => {
  //   const token = localStorage.getItem("token");

  //   if (!token) {
  //     window.location.href = "/";
  //   }
  // }, []);

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
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
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

  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setIsAlertOpen(false);
  };

  const showAlert = () => {
    setIsAlertOpen(true);
  };

  return (
    <>
      <div className="containerappear">
        <div className="nav">
          <Navbar selectedImage={selectedimage} />
        </div>
        <Snackbar
          open={isAlertOpen}
          autoHideDuration={3000} // Adjust the duration as needed
          onClose={handleAlertClose}
        >
          <MuiAlert
            elevation={6}
            variant="filled"
            onClose={handleAlertClose}
            severity="success" // Change severity to "info", "warning", or "error" if needed
          >
            Changes saved successfully!
          </MuiAlert>
        </Snackbar>

        <br />

        <div className="parent" style={{ marginTop: "9vh", paddingTop: "3vh" }}>
          <div className="form">
            <div className="temp-container" style={{ display: "none" }}>
              <h2>
                {" "}
                <b> Templates </b>
              </h2>

              <div className="template">
                <div className="temp">
                  <div href="#">
                    <img
                      src="/Themes/t1.png"
                      alt=""
                      className="imgt"
                      onClick={() => {
                        setTemplate("t1");
                      }}
                    />
                  </div>
                </div>
                <div className="temp">
                  <div href="#">
                    <img
                      src="/Themes/t2.png"
                      alt=""
                      className="imgt"
                      onClick={() => {
                        setTemplate("t2");
                      }}
                    />
                  </div>
                </div>
                <div className="temp">
                  <div href="#">
                    <img
                      src="/Themes/t3.png"
                      alt=""
                      className="imgt"
                      onClick={() => {
                        setTemplate("t3");
                      }}
                    />
                  </div>
                </div>
                <div className="temp">
                  <div href="#">
                    <img
                      src="/Themes/t4.png"
                      alt=""
                      className="imgt"
                      onClick={() => {
                        setTemplate("t4");
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="bg">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: "600",
                  fontSize: "2rem",
                }}
              >
                {" "}
                Background Color{" "}
              </div>
              <div className="bg-options">
                <div
                  className="bgc"
                  style={{
                    backgroundColor: "#ffb703",
                    border: `${
                      selectedBgColor == "#ffb703"
                        ? "2px solid #000300"
                        : "none"
                    }`,
                  }}
                  onClick={() => {
                    setSelectedBgColor("#ffb703");
                    setbackgnd(1);
                  }}
                ></div>
                <div
                  className="bgc"
                  style={{
                    backgroundColor: "#588157",
                    border: `${
                      selectedBgColor == "#588157"
                        ? "2px solid #000300"
                        : "none"
                    }`,
                  }}
                  onClick={() => {
                    setSelectedBgColor("#588157");
                    setbackgnd(2);
                  }}
                ></div>
                <div
                  className="bgc"
                  style={{
                    backgroundColor: "#8d99ae",
                    border: `${
                      selectedBgColor == "#8d99ae"
                        ? "2px solid #000300"
                        : "none"
                    }`,
                  }}
                  onClick={() => {
                    setSelectedBgColor("#8d99ae");

                    setbackgnd(3);
                  }}
                ></div>
                <div
                  className="bgc"
                  style={{
                    backgroundColor: "#669bbc",
                    border: `${
                      selectedBgColor == "#669bbc"
                        ? "2px solid #000300"
                        : "none"
                    }`,
                  }}
                  onClick={() => {
                    setSelectedBgColor("#669bbc");
                    setbackgnd(4);
                  }}
                ></div>
                <div
                  className="bgc"
                  style={{
                    backgroundColor: "#708d81",
                    border: `${
                      selectedBgColor == "#708d81"
                        ? "2px solid #000300"
                        : "none"
                    }`,
                  }}
                  onClick={() => {
                    setSelectedBgColor("#708d81");
                    setbackgnd(5);
                  }}
                ></div>
                <div
                  className="bgc"
                  style={{
                    backgroundColor: "#e07a5f",
                    border: `${
                      selectedBgColor == "#e07a5f"
                        ? "2px solid #000300"
                        : "none"
                    }`,
                  }}
                  onClick={() => {
                    setSelectedBgColor("#e07a5f");
                    setbackgnd(6);
                  }}
                ></div>
                <div
                  className="bgc"
                  style={{
                    backgroundColor: "#57cc99",
                    border: `${
                      selectedBgColor == "#57cc99"
                        ? "2px solid #000300"
                        : "none"
                    }`,
                  }}
                  onClick={() => {
                    setSelectedBgColor("#57cc99");
                    setbackgnd(7);
                  }}
                ></div>
                <div
                  className="bgc"
                  style={{
                    backgroundColor: "#a5a58d",
                    border: `${
                      selectedBgColor == "#a5a58d"
                        ? "2px solid #000300"
                        : "none"
                    }`,
                  }}
                  onClick={() => {
                    setSelectedBgColor("#a5a58d");
                    setbackgnd(8);
                  }}
                ></div>
              </div>
            </div>{" "}
            <br />
            {/* Gradient */}
            <div className="bg">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: "600",
                  fontSize: "2rem",
                }}
              >
                {" "}
                Gradient Color{" "}
              </div>

              <div className="bg-options">
                <div
                  className="bgc"
                  style={{
                    background: "linear-gradient(to right, #ffb703, #ff0000)",
                    border: `${
                      gradientColor ==
                      "linear-gradient(to right, #ffb703, #ff0000)"
                        ? "2px solid #000300"
                        : "none"
                    }`,
                  }}
                  onClick={() => {
                    setGradientColor(
                      "linear-gradient(to right, #ffb703, #ff0000)"
                    );
                    setbackgnd(1);
                  }}
                ></div>
                <div
                  className="bgc"
                  style={{
                    background: "linear-gradient(to right, #22c1c3, #fdbb2d)",
                    border: `${
                      gradientColor ==
                      "linear-gradient(to right, #22c1c3, #fdbb2d)"
                        ? "2px solid #000300"
                        : "none"
                    }`,
                  }}
                  onClick={() => {
                    setGradientColor(
                      "linear-gradient(to right, #22c1c3, #fdbb2d)"
                    );
                    setbackgnd(2);
                  }}
                ></div>
                <div
                  className="bgc"
                  style={{
                    background:
                      "linear-gradient(to right, #3A1C71, #D76D77,#FFAF7B)",
                    border: `${
                      gradientColor ==
                      "linear-gradient(to right, #3A1C71, #D76D77,#FFAF7B)"
                        ? "2px solid #000300"
                        : "none"
                    }`,
                  }}
                  onClick={() => {
                    setGradientColor(
                      "linear-gradient(to right, #3A1C71, #D76D77,#FFAF7B)"
                    );

                    setbackgnd(3);
                  }}
                ></div>
                <div
                  className="bgc"
                  style={{
                    background: "linear-gradient(to right, #283c86, #45a247)",
                    border: `${
                      gradientColor ==
                      "linear-gradient(to right, #283c86, #45a247)"
                        ? "2px solid #000300"
                        : "none"
                    }`,
                  }}
                  onClick={() => {
                    setGradientColor(
                      "linear-gradient(to right, #283c86, #45a247)"
                    );
                    setbackgnd(4);
                  }}
                ></div>
                <div
                  className="bgc"
                  style={{
                    background: "linear-gradient(to right, #EF3B36, #FFFFFF)",
                    border: `${
                      gradientColor ==
                      "linear-gradient(to right, #EF3B36, #FFFFFF)"
                        ? "2px solid #000300"
                        : "none"
                    }`,
                  }}
                  onClick={() => {
                    setGradientColor(
                      "linear-gradient(to right, #EF3B36, #FFFFFF)"
                    );
                    setbackgnd(5);
                  }}
                ></div>
                <div
                  className="bgc"
                  style={{
                    background: "linear-gradient(to right, #c0392b, #8e44ad)",
                    border: `${
                      gradientColor ==
                      "linear-gradient(to right, #c0392b, #8e44ad)"
                        ? "2px solid #000300"
                        : "none"
                    }`,
                  }}
                  onClick={() => {
                    setGradientColor(
                      "linear-gradient(to right, #c0392b, #8e44ad)"
                    );
                    setbackgnd(6);
                  }}
                ></div>
                <div
                  className="bgc"
                  style={{
                    background: "linear-gradient(to right, #34e89e, #0f3443)",
                    border: `${
                      gradientColor ==
                      "linear-gradient(to right, #34e89e, #0f3443)"
                        ? "2px solid #000300"
                        : "none"
                    }`,
                  }}
                  onClick={() => {
                    setGradientColor(
                      "linear-gradient(to right, #34e89e, #0f3443)"
                    );
                    setbackgnd(7);
                  }}
                ></div>
                <div
                  className="bgc"
                  style={{
                    background: "linear-gradient(to right, #F2994A, #F2C94C)",
                    border: `${
                      gradientColor ==
                      "linear-gradient(to right, #F2994A, #F2C94C)"
                        ? "2px solid #000300"
                        : "none"
                    }`,
                  }}
                  onClick={() => {
                    setGradientColor(
                      "linear-gradient(to right, #F2994A, #F2C94C)"
                    );
                    setbackgnd(8);
                  }}
                ></div>
              </div>
            </div>
            <br />
            <div className="shape-container">
              <h2 style={{ marginLeft: "5vw" }}>
                {" "}
                <b>Border </b>
              </h2>
              <div className="shape">
                <div className="head">
                  <p>Outline</p>
                </div>
                <div className="opt">
                  <div
                    className="opt1"
                    onClick={() => {
                      setOutline("g");
                    }}
                  >
                    <span
                      style={{
                        display: `${outline == "g" ? "block" : "none"}`,
                      }}
                    >
                      <CheckBoxIcon />
                    </span>
                  </div>
                  <div
                    className="opt2"
                    onClick={() => {
                      setOutline("h");
                    }}
                  >
                    <span
                      style={{
                        display: `${outline == "h" ? "block" : "none"}`,
                      }}
                    >
                      <CheckBoxIcon />
                    </span>
                  </div>
                  <div
                    className="opt3"
                    onClick={() => {
                      setOutline("i");
                    }}
                  >
                    <span
                      style={{
                        display: `${outline == "i" ? "block" : "none"}`,
                      }}
                    >
                      <CheckBoxIcon />
                    </span>
                  </div>
                </div>

                <br />

                <div className="head">
                  <p>Soft Shadow</p>
                </div>
                <div className="opt">
                  <div
                    className="opt1 softshadow"
                    id="ss"
                    onClick={() => {
                      setOutline("d");
                    }}
                  >
                    <span
                      style={{
                        display: `${outline == "d" ? "block" : "none"}`,
                      }}
                    >
                      <CheckBoxIcon />
                    </span>
                  </div>
                  <div
                    className="opt2 softshadow"
                    id="ss"
                    onClick={() => {
                      setOutline("e");
                    }}
                  >
                    <span
                      style={{
                        display: `${outline == "e" ? "block" : "none"}`,
                      }}
                    >
                      <CheckBoxIcon />
                    </span>
                  </div>
                  <div
                    className="opt3 softshadow"
                    id="ss"
                    onClick={() => {
                      setOutline("f");
                    }}
                  >
                    <span
                      style={{
                        display: `${outline == "f" ? "block" : "none"}`,
                      }}
                    >
                      <CheckBoxIcon />
                    </span>
                  </div>
                </div>

                <br />

                <div className="head">
                  <p>Dark Shadow</p>
                </div>
                <div className="opt">
                  <div
                    className="opt1 darkshadow"
                    onClick={() => {
                      // setBorderRadius("none");
                      setOutline("a");
                    }}
                  >
                    <span
                      style={{
                        display: `${outline == "a" ? "block" : "none"}`,
                      }}
                    >
                      <CheckBoxIcon />
                    </span>
                  </div>
                  <div
                    className="opt2 darkshadow"
                    onClick={() => {
                      setOutline("b");
                    }}
                  >
                    <span
                      style={{
                        display: `${outline == "b" ? "block" : "none"}`,
                      }}
                    >
                      <CheckBoxIcon />
                    </span>
                  </div>
                  <div
                    className="opt3 darkshadow"
                    onClick={() => {
                      setOutline("c");
                    }}
                  >
                    <span
                      style={{
                        display: `${outline == "c" ? "block" : "none"}`,
                      }}
                    >
                      <CheckBoxIcon />
                    </span>
                  </div>
                </div>

                <br />

                <div></div>
              </div>
            </div>
            <br />
            <div className="font-container">
              <h2 style={{ marginLeft: "5vw" }}>
                {" "}
                <b> Fonts </b>
              </h2>

              <div className="font">
                <div className="font-option">
                  <p>Font Style</p>

                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={textstyle}
                    sx={{ width: "30vw" }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Fonts"
                        inputProps={{ ...params.inputProps, readOnly: true }}
                        autoComplete="off"
                        onSelect={(e) => {
                          setfontfamily(e.target.value);
                        }}
                      />
                    )}
                  />
                </div>

                <br />

                <div className="font-option">
                  <p>Font Color</p>
                  <div className="ofont">
                    <div
                      className="color-option-1"
                      onClick={() => {
                        setFontColor("rgb(0, 0, 0)");
                      }}
                    >
                      <span
                        style={{
                          display: `${
                            fontColor == "rgb(0, 0, 0)" ? "block" : "none"
                          }`,
                        }}
                      >
                        <CheckBoxIcon style={{ color: "white" }} />
                      </span>
                    </div>
                    <div
                      className="color-option-2"
                      onClick={() => {
                        setFontColor("rgb(87, 78, 78)");
                      }}
                    >
                      <span
                        style={{
                          display: `${
                            fontColor == "rgb(87, 78, 78)" ? "block" : "none"
                          }`,
                        }}
                      >
                        <CheckBoxIcon style={{ color: "white" }} />
                      </span>
                    </div>
                    <div
                      className="color-option-3"
                      onClick={() => {
                        setFontColor("rgb(207, 200, 200)");
                      }}
                    >
                      <span
                        style={{
                          display: `${
                            fontColor == "rgb(207, 200, 200)" ? "block" : "none"
                          }`,
                        }}
                      >
                        <CheckBoxIcon />
                      </span>
                    </div>
                    <div
                      className="color-option-4"
                      onClick={() => {
                        setFontColor("rgb(255, 255, 255)");
                      }}
                    >
                      <span
                        style={{
                          display: `${
                            fontColor == "rgb(255, 255, 255)" ? "block" : "none"
                          }`,
                        }}
                      >
                        <CheckBoxIcon />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex  justify-center py-3">
              <Button variant="contained" onClick={handleClickSave}>
                Save
              </Button>

              <div className="flex sm:hidden" style={{ marginLeft: "3vh" }}>
                <Chip
                  icon={<VisibilityIcon />}
                  label="Preview"
                  variant="outlined"
                  onClick={handleClickOpen5}
                  style={{ border: "2px solid black", fontWeight: "bolder" }}
                />

                <Dialog
                  fullScreen
                  open={open5}
                  onClose={handleClose5}
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
                        onClick={handleClose5}
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
                  <div style={{ marginRight: "50vw" }}>
                    <PhoneUI
                      name={Name}
                      lstoflinks={listoflinks}
                      lstofotherlinks={listOfOtherLinks}
                      lstofproducts={productdata}
                      username={username}
                      selectedImage={selectedimage}
                      handleImageChange={handleImageChange}
                      about={about}
                      bgColor={selectedBgColor}
                      fontColor={fontColor}
                      fontfamily={fontfamily}
                      outline={outline}
                      gradientColor={gradientColor}
                    />{" "}
                  </div>
                </Dialog>
              </div>
            </div>
          </div>

          <div className="phone">
            <div className="pphone">
              <PhoneUI
                name={Name}
                lstoflinks={listoflinks}
                lstofotherlinks={listOfOtherLinks}
                lstofproducts={productdata}
                username={username}
                selectedImage={selectedimage}
                handleImageChange={handleImageChange}
                about={about}
                bgColor={selectedBgColor}
                fontColor={fontColor}
                fontfamily={fontfamily}
                outline={outline}
                gradientColor={gradientColor}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Apperance1;
