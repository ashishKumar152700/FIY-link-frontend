import "./App.css";
import img from "../public/socialmedia.jpg";
import imgg from "../public/other2.jpg";
import imggg from "../public/back.jpg";
import * as React from "react";
import Card from "@mui/material/Card";
import CssBaseline from "@mui/material/CssBaseline";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
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
// import {MdDelete} from "react-icons/md";
import lg1 from "../public/main.png";

const Admin = () => {
  const [Name, setNameValue] = useState("");
  const [username, setUsername] = useState("");
  const [Social, setsocial] = useState([]);
  const [color, setColor] = useState("white");
  const [About, setAbout] = useState("");
  const [val, setval] = useState("");
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [links, setLinkss] = useState([]);
  const [image, setImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSocialMedia, setSelectedSocialMedia] = useState("");
  const [selectedLink, setSelectedLink] = useState("");
  const [listOfLinks, setListOfLinks] = useState([]);
  const [listOfOtherLinks, setListOfOtherLinks] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [name1, setName1] = useState("");
  const [about1, setAbout1] = useState("");

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
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/login";
    } else {
    }
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
    setAbout1(About);
    setName1(Name);
  };
  const handleClose = () => {
    setAbout(about1);
    setNameValue(name1);
    setOpen(false);
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

  const handleimageclick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files;
    console.log(file);
    setImage(event.target.files[0]);
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
      })
      .catch((error) => {
        console.log("error...");
      });
  };

  const handlesubmit = () => {
    localStorage.setItem("Name", Name);
    localStorage.setItem("About", About);
    localStorage.setItem("color", color);
    localStorage.setItem("Social", JSON.stringify(Social));
    localStorage.setItem("OtherLinks", JSON.stringify(links));
    const token = localStorage.getItem("token");

    const obj = {
      name: Name,
      about: About,
      listOfLinks: Social,
      listOfOtherLinks: links,
    };

    console.log(obj);

    axios
      .post("http://192.168.0.118:5000/user/save-user-info", obj, {
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        console.log(response.status);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("error...");
      });
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const addLink = () => {
    if (name.trim() === "" || url.trim() === "") {
      return;
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

  const removeLink = (index) => {
    const updatedLinks = [...links];
    updatedLinks.splice(index, 1);
    setLinkss(updatedLinks);
  };

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  const handleSocialMediaChange = (e) => {
    setSelectedSocialMedia(e.target.value);
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
  };
  return (
    <>
      <div className="admin-main">
        <Box sx={{ flexGrow: 1 }} className="navbar-admin">
          <AppBar className="App-bar">
            <Toolbar>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
                style={{ color: "black", fontSize: "5vh" }}
              >
                <img
                  src={lg1}
                  alt=""
                  height={150}
                  width={150}
                  style={{ left: "20vh" }}
                />
              </Typography>

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
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
        <br /> <br />
        <div
          className="admin-parent"
          style={{ height: "100vh", marginLeft: "4vh" }}
        >
          <div className="admin1">
            <br /> <br />
            <br /> <br /> <br />
            <br />
            <Card
              sx={{ display: "flex" }}
              style={{
                width: "50vh",
                border: "5px solid black",
                boxShadow: "6px 6px black",
                marginTop: "6vh",
                marginLeft: "5vh",
              }}
            >
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={img}
                alt="Live from space album cover"
                style={{
                  borderRadius: "50%",
                  height: "20vh",
                  marginTop: "5vh",
                  marginLeft: "2vh",
                }}
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography
                    component="div"
                    variant="h5"
                    style={{ textDecoration: "underline" }}
                  >
                    <b> Social Links </b>
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    <b> Link Your Social Medias </b>
                  </Typography>
                  <br />
                  <input
                    className="search-box"
                    list="data"
                    onChange={handleSocialMediaChange}
                    placeholder="Social Media Name"
                    value={val}
                  />
                  <datalist id="data">
                    {data.map((op) => (
                      <option key={op}>{op}</option>
                    ))}
                  </datalist>
                  <br /> <br /> <br />
                  <TextField
                    fullWidth
                    label=" Social Media Url"
                    id="fullWidth"
                    value={name}
                    onChange={handleNameChange}
                  />
                  <br /> <br />
                  <Button size="large" onClick={addLink}>
                    Add Link
                  </Button>
                </CardContent>
              </Box>
            </Card>
          </div>
          <div className="admin2">
            {/*               
                <Card sx={{ maxWidth: 450 }} style={{marginTop:'16vh',borderRadius:'2vh',boxShadow:' 7px 10px black'}} >
      <CardMedia
        sx={{ height: 300 }}
        image={imgg}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{textDecoration:'underline'}}>
          Other Links
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{textDecoration:'underline'}}>
          <b> Link Your Other Links </b>
        </Typography>
      </CardContent>
      <TextField fullWidth label=" Link-Name" id="fullWidth" value={name}  onChange={handleNameChange} />
          <br /> <br />
      <TextField fullWidth label="Url" id="fullWidth" value={url} onChange={handleUrlChange}  />
      <br /> <br />
      <CardActions>
        <Button size="large" style={{marginLeft:'17vh'}}  onClick={addLink}>Add Link</Button>

      
        
      </CardActions>
      <div className='links-container'>
    {listOfOtherLinks.map((link,index) =>(
      <div key={index} className='links-div' >
        <div className='label-div'><label><b> {link.name} </b></label>
        <br />
        <label>{link.url}</label>
        </div>
        <div className='delete-div' onClick={()=>deleteotherLink(link.name,link.url)} >
         <MdDelete/>
        </div>
      </div>

    ))}
</div>
    </Card> */}
            <br /> <br />
            <br /> <br /> <br />
            <br />
            <Card
              sx={{ display: "flex" }}
              style={{
                width: "50vh",
                border: "5px solid black",
                boxShadow: "6px 6px black",
                marginTop: "6vh",
                marginLeft: "5vh",
              }}
            >
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={imgg}
                alt="Live from space album cover"
                style={{
                  borderRadius: "50%",
                  height: "20vh",
                  marginTop: "5vh",
                  marginLeft: "2vh",
                }}
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography
                    component="div"
                    variant="h5"
                    style={{ textDecoration: "underline" }}
                  >
                    <b> Other Links </b>
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    <b> Link Your Other Links </b>
                  </Typography>
                  <TextField
                    style={{ backgroundColor: "white" }}
                    fullWidth
                    label=" Link-Name"
                    id="fullWidth"
                    value={name}
                    onChange={handleNameChange}
                  />
                  <br /> <br /> <br />
                  <TextField
                    style={{ backgroundColor: "white" }}
                    fullWidth
                    label=" URL"
                    id="fullWidth"
                    value={name}
                    onChange={handleUrlChange}
                  />
                  <br /> <br />
                  <Button size="large" onClick={addLink}>
                    Add Link
                  </Button>
                </CardContent>
              </Box>
            </Card>
          </div>

          <div className="admin3">
            <div
              className="edit"
              style={{
                marginTop: "10vh",
                display: "flex",
                marginBottom: "1vh",
                marginLeft: "14vh",
              }}
            >
              {" "}
              <div>
                <Button
                  variant="outlined"
                  onClick={handleClickOpen}
                  style={{
                    borderRadius: "20px",
                    background: "black",
                    marginTop: "5vh",
                  }}
                >
                  Edit
                </Button>
                <Dialog open={open} onClose={handleClose}>
                  <DialogTitle>Edit</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      To subscribe to this website, please enter your email
                      address here. We will send updates occasionally.
                    </DialogContentText>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      label="Name"
                      type="text"
                      defaultValue={Name}
                      fullWidth
                      variant="standard"
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
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleUpdateInfo}>Submit</Button>
                  </DialogActions>
                </Dialog>
              </div>
            </div>

            <div
              className="phone1"
              style={{
                border: "7px solid black",
                height: "60vh",
                width: "35vh",
                borderRadius: "6vh",
                backgroundColor: "#ccd5ae",
                flexWrap: "wrap",
                overflowWrap: "break-word",
                overflowY: "auto",
              }}
            >
              <span className="admin-logo">
                {" "}
                <b>FIY-Link </b>
              </span>
              <div className="imag-name">
                {/* <input type="file" name="image-upload" id="image-upload"  style={{borderRadius:'50%',backgroundColor:'red',width:'10vh'}} /> */}

                <div onClick={handleimageclick}>
                  {image ? (
                    <img
                      src={URL.createObjectURL(image)}
                      alt="upload image"
                      className="img-display-after"
                      height={100}
                      width={100}
                      style={{ borderRadius: "50%" }}
                    />
                  ) : (
                    <img
                      src=""
                      alt="upload image"
                      className="img-display-before"
                      height={100}
                      width={100}
                      style={{ borderRadius: "50%" }}
                    />
                  )}
                  <input
                    type="file"
                    ref={inputRef}
                    onClick={handleImageChange}
                    style={{ display: "none" }}
                  />
                </div>
                <span className="Name" style={{ display: "flex" }}>
                  {" "}
                  <b> {Name} </b>{" "}
                </span>
              </div>
              <div className="social-container">
                {listOfLinks.map((link) => (
                  <a key={link.index} target="_blank" href={link.link}>
                    {renderSocialMediaIcon(link.name)}
                  </a>
                ))}
              </div>
              <hr />
              <span className="about-container" style={{ fontSize: "2vh" }}>
                <em>{About} </em>
              </span>{" "}
              <hr />
              <div className="card-div">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Admin;
