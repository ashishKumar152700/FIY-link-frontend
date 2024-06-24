import "../src/Components/PhoneUi/style.css";
import "../src/Components/background.css";
import { useState, useEffect } from "react";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import axios from "axios";
import Button from "@mui/material/Button";
import BasicModal from "./Modal.jsx";
import img2 from "../public/socialmedia.jpg";
import "./Apperance1.css";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";

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

const PhoneUI = ({
  name,
  lstoflinks,
  lstofotherlinks,
  lstofproducts,
  selectedImage,
  handleImageChange,
  about,
  bgColor,
  fontColor,
  fontfamily,
  outline,
}) => {
  const [About, setAbout] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // useEffect(() => {
  //   if (username === "") {
  //     callGetUserDetails();
  //   }
  // }, []);

  // const callGetUserDetails = () => {
  //   const token = localStorage.getItem("token");

  //   axios
  //     .get(" "http://192.168.0.118:5000/user/get-user-info", {
  //       headers: {
  //         "content-type": "application/json",
  //         Authorization: "Bearer " + token,
  //       },
  //     })
  //     .then((response) => {

  //       if (response.data.image) {
  //         setSelectedImage(
  //             response.data.image
  //         );
  //       }
  //     })
  //     .catch((error) => {
  //       console.log("error...");
  //     });
  // };

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
  console.log(fontfamily + "abhishek");

  return (
    <div className="box">
      <div className="overlap-2">
        <div
          className="preview"
          style={{ backgroundColor: bgColor, color: fontColor }}
        >
          <div className="content" style={{ backgroundColor: bgColor }}>
            <div className="group">
              {selectedImage && (
                <img
                  src={selectedImage}
                  alt="Selected"
                  onChange={handleImageChange}
                  className=" rounded-[50%] h-[5.5rem] w-[5.5rem] "
                />
              )}

              <div className="title">
                <div className="h-1" style={{ color: fontColor }}>
                  <p style={{ fontFamily: fontfamily }}> {name} </p>
                </div>

                <div className="social-container">
                  {lstoflinks.map((link, index) => (
                    <a
                      rel="noreferrer"
                      key={link.link}
                      target="_blank"
                      href={link.link}
                      className="social-icon-container"
                      style={{ fontSize: "2vh", color: fontColor, margin: "0" }}
                    >
                      {renderSocialMediaIcon(link.name)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div
              className="about"
              style={{
                wordWrap: "break-word",
                width: "250px",
                color: fontColor,
              }}
            >
              <p style={{ fontFamily: fontfamily }}> {about}</p>
            </div>

            <div className="links-wrapper" style={{ marginTop: "4vh" }}>
              <div className="links">
                <div
                  className="card-div"
                  style={{
                    flexWrap: "wrap",
                    overflowWrap: "break-word",
                    overflowY: "auto",
                  }}
                >
                  {lstofotherlinks.map((link, index) => (
                    <div key={index}>
                      <div className="card-bar" id={outline}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ fontFamily: fontfamily }}
                        >
                          {link.name}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="text-wrapper-4">{About}</div>
          </div>

          {/* <div
            style={{
              marginTop: "7rem",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
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
              }}
            />
          </div> */}

          <div
            className="product-section"
            style={{
              overflowWrap: "break-word",
              overflowY: "auto",
              height: "50vh",
            }}
          >
            {lstofproducts
              .filter((product) =>
                product.productName
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase())
              )
              .map((product, index) => (
                <div key={index}>
                  <Card
                    sx={{ display: "flex", flexDirection: "column" }}
                    style={{ width: "8rem" }}
                  >
                    <CardMedia
                      component="img"
                      style={{
                        height: "10vh",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                      image={product.productImage ? product.productImage : img2}
                      alt="Live from space album cover"
                    />

                    <span className="phoneui-productname">
                      {product.productName}

                      <BasicModal product={product} />
                    </span>
                  </Card>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default PhoneUI;
