import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { GoVideo } from "react-icons/go";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import img2 from "../public/socialmedia.jpg";
import NotInterestedIcon from "@mui/icons-material/NotInterested";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

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
import "./Dp.css";
import img from "../public/defaultImage.jpg";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Dp = () => {
  const { fname } = useParams();
  const [name, setname] = useState("");
  const [username, setusername] = useState("");
  const [listoflinks, setlistOflinks] = useState([]);
  const [listofotherlinks, setlistOfotherlinks] = useState([]);
  const [Image, setImage] = useState("");
  const [bio, setbio] = useState("");

  const [outline, setOutline] = useState("");
  const [fontColor, setFontColor] = useState("black");
  const [fontfamily, setfontfamily] = useState("");
  const [selectedBgColor, setSelectedBgColor] = useState("#fff");

  const [productdata, setproductdata] = useState([]);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios
      .get(
        "http://192.168.0.118:5000/user/auth/get-user-details?username=" + fname
      )
      .then((response) => {
        console.log(response);

        setname(response.data.name);
        setusername(response.data.username);
        setlistOflinks(response.data.listOfLinks);
        setlistOfotherlinks(response.data.listOfOtherLinks);
        setproductdata(response.data.listOfProducts);

        setOutline(response.data.outline);
        setFontColor(response.data.fontColor);
        setfontfamily(response.data.fontStyle);
        setSelectedBgColor(response.data.background);

        setbio(response.data.bio);
        if (response.data.image) {
          setImage(response.data.image);
        } else {
          setImage(img);
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);

  const handleupdate = (link) => {
    const obj = {
      username: username,
      linkResponseDto: link,
    };
    axios
      .put("http://192.168.0.118:5000/user/auth/update-visited", obj)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleupdateproduct = (link) => {
    const obj = {
      username: username,
      productResponseDto: link,
    };
    axios
      .put("http://192.168.0.118:5000/user/auth/update-visited", obj)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleupdateotherlink = (link) => {
    const obj = {
      username: username,
      otherLinkResponseDto: link,
    };

    axios
      .put("http://192.168.0.118:5000/user/auth/update-visited", obj)
      .then((response) => {
        console.log(response);
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

  return (
    <>
      <div className="backgrounddp">
        <div
          className="background"
          // style={{ height: "100%", backgroundColor: selectedBgColor }}
          style={{
            height: "100%",
            background: "rgb(34,193,195)",
            background:
              "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
          }}
        ></div>
      </div>

      <div
        className="main-dp2"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "2vh",
          paddingBottom: "2vh",
          height: "100%",
        }}
      >
        <div
          className="main-dp"
          style={{
            backgroundColor: "green",

            height: "auto",
            width: "fit-content",
            paddingRight: "2vw",
            minWidth: "50%",
            borderRadius: "2%",
            background: "rgba(227, 227, 227, 0.48)",
            minHeight: "95vh",

            // boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(11.4px)",
            WebkitBackdropFilter: "blur(11.4px)",
            // border: "1px solid rgba(255, 255, 255, 0.25)",
          }}
        >
          <div className="basic-info-dp">
            <div
              className="image-dp"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <img className="dp" src={Image} alt="dp" />
            </div>

            <div className="nameandicons">
              <div
                className="username-dp"
                maxLength="15"
                style={{
                  color: fontColor,
                  fontWeight: "bolder",
                  fontSize: "150%",
                  fontFamily: fontfamily,
                }}
              >
                {" "}
                @{username}
              </div>

              <div className="social-container-dp">
                {listoflinks.map((link) => (
                  <a
                    className="social-icon-dp"
                    key={link.index}
                    rel="noreferrer"
                    target="_blank"
                    href={link.link}
                    onClick={() => handleupdate(link)}
                    style={{
                      margin: "0",
                      padding: "0",
                      fontSize: "3vh",
                      color: fontColor,
                    }}
                  >
                    {renderSocialMediaIcon(link.name)}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div
            className="bio-lastpage"
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "auto",
              wordBreak: "break-word",
              textAlign: "center",
              marginBottom: "1vh",
              color: fontColor,
              fontFamily: fontfamily,
            }}
          >
            {bio}
          </div>

          <div className="card-div-dp">
            {listofotherlinks.map((link, index) => (
              <div key={index}>
                <div className="card-bar-dp">
                  <a
                    id={outline}
                    onClick={() => handleupdateotherlink(link)}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-card-dp"
                    style={{
                      backgroundColor: selectedBgColor,

                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "3vh",
                      color: fontColor,
                      flexWrap: "wrap",
                    }}
                  >
                    <span style={{ fontFamily: fontfamily }}>{link.name} </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
{/* 
          <div className="search-box-dp">
            <InputBase
              sx={{ flex: 1 }}
              placeholder="Search"
              startAdornment={
                <SearchIcon style={{ color: "black", margin: "0 0 0 10px" }} />
              }
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                border: "1px solid black",
                height: "6vh",
                borderRadius: "20px",
                backgroundColor: "white",
                width: "100%",
              }}
            />{" "}
          </div> */}

          <div className="product-card">
            {productdata
              .filter((product) =>
                product.productName
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase())
              )
              .map((link, index) => (
                <div
                  key={index}
                  className="card"
                  style={{ width: "auto", maxWidth: "14rem" }}
                >
                  <a
                    href={link.productUrl}
                    style={{ margin: "0", padding: "0" }}
                    onClick={() => handleupdateproduct(link)}
                  >
                    <div className="product-image">
                      <img
                        src={link.productImage ? link.productImage : img2}
                        className="card-img-top"
                        alt="cant loaded"
                      />
                    </div>
                  </a>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      background: "rgb(0, 0, 0)",
                      background: "rgba(0, 0, 0, 0.1)",
                      backgroundColor: "transparent",
                    }}
                  >
                    <h5 className="card-title">{link.productName}</h5>

                    <div style={{ margin: "0 0 0 0", display: "inline" }}>
                      <Button onClick={handleClickOpen}>
                        {link.productVideo != null ? (
                          <GoVideo />
                        ) : (
                          <NotInterestedIcon />
                        )}
                      </Button>
                      <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                      >
                        <DialogContent>
                          <DialogContentText id="alert-dialog-description">
                            <iframe
                              id="iframe"
                              src={link.productVideo}
                              allowFullScreen
                            ></iframe>
                          </DialogContentText>
                        </DialogContent>
                      </Dialog>
                    </div>

                    {/* <iframe src={link.productVideo} style={{margin:'0 1vw 0 0',display:'inline'}} ><GoVideo/></iframe> */}
                  </div>

                  {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
              ))}
          </div>
          {/* <div style={{bottom:'0',position:'absolute',padding:'10px 10px 10px 10px',justifyContent:'center',display:'flex',width:'100%'}}>
            <h1 style={{fontWeight:'820',fontSize:'100%',textDecoration:'underline'}}>FIY-LINK</h1>
          </div> */}
        </div>
      </div>
    </>
  );
};
export default Dp;
