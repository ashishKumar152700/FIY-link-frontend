import { useEffect, useState } from "react";
import axios from "axios";
import "../src/Ana.css";
import { SiGoogleanalytics } from "react-icons/si";
import * as React from "react";
import Navbar2 from "./navbar2";
import { Bar, Doughnut, Line, Pie, PolarArea } from "react-chartjs-2";
import "chart.js/auto";
import Button from "@mui/material/Button";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Alert from "@mui/material/Alert";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Position from "rsuite/esm/Overlay/Position";
import Navbar from "./Navbar";
import { list } from "postcss";

ChartJS.register(ArcElement, Tooltip, Legend);

const Analytics = () => {
  const [toggleState, setToggleState] = useState(1);
  const [Analytics, setAnalytics] = useState({});
  const [listOfLinks, setListOfLinks] = useState([]);
  const [listOfOtherLinks, setListOfOtherLinks] = useState([]);
  const [listOfProducts, setproductlist] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [analyticsproduct, setanalyticproduct] = useState(null);
  const [analyticList, setAnalyticList] = useState(null);
  const [analyticother, setanalyticother] = useState(null);
  const [Error, seterror] = useState(null);

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
  ];

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  const getListOfLinkName = () => {
    const nameArray = [];

    for (const link of listOfLinks) {
      nameArray.push(link.name);
    }

    return nameArray;
  };

  // useEffect(()=>{
  //   const x = getLinksDetails();
  //   if(x!==null){
  //     setMinVisits(x);
  //   }

  // })

  const getLinksDetails = async (list) => {
    if (list == null || list.length === 0) return;

    const Array = [];
    let max = list[0];
    let min = list[0];
    let total = 0;
    for (const link of list) {
      if (link.visited >= max.visited) {
        max = link;
      }
      if (link.visited < min.visited) {
        min = link;
      }
      total += link.visited;
    }

    Array.push(max);
    Array.push(min);
    Array.push(total);
    console.log("radhe");
    // setMaxVisits(Array);
    console.log(Array);
    setAnalyticList(Array);
    return Array;
  };

  const getotherDetails = async (list) => {
    if (list == null || list.length === 0) return;

    const Array = [];
    let max = list[0];
    let min = list[0];
    let total = 0;
    for (const link of list) {
      if (link.visited >= max.visited) {
        max = link;
      }
      if (link.visited < min.visited) {
        min = link;
      }
      total += link.visited;
    }

    Array.push(max);
    Array.push(min);
    Array.push(total);
    console.log("radhe2");
    // setMaxVisits(Array);
    console.log(Array);
    setanalyticother(Array);
    return Array;
  };

  const getproductDetails = async (list) => {
    if (list == null || list.length === 0) return;

    const Array = [];
    let max = list[0];
    let min = list[0];
    let total = 0;
    for (const link of list) {
      if (link.visited >= max.visited) {
        max = link;
      }
      if (link.visited < min.visited) {
        min = link;
      }
      total += link.visited;
    }

    Array.push(max);
    Array.push(min);
    Array.push(total);
    // setMaxVisits(Array);
    console.log(Array);
    setanalyticproduct(Array);
    return Array;
  };

  const getVisitedListOfLink = () => {
    const visitedArray = [];

    for (const link of listOfLinks) {
      visitedArray.push(link.visited);
    }
    return visitedArray;
  };

  const getRandomColor = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r},${g},${b})`;
  };

  const colorArray = () => {
    const cArray = [];

    for (const i in listOfLinks) {
      cArray.push(getRandomColor());
    }

    return cArray;
  };

  const data = {
    labels: getListOfLinkName(),
    datasets: [
      {
        data: getVisitedListOfLink(),
        backgroundColor: colorArray(),
      },
    ],
  };

  const getListOfLinkOtherName = () => {
    const nameArray1 = [];

    for (const link of listOfOtherLinks) {
      nameArray1.push(link.name);
    }

    return nameArray1;
  };

  const getVisitedListOfOtherLink = () => {
    const visitedArray1 = [];

    for (const link of listOfOtherLinks) {
      visitedArray1.push(link.visited);
    }

    return visitedArray1;
  };

  const data1 = {
    labels: getListOfLinkOtherName(),
    datasets: [
      {
        data: getVisitedListOfOtherLink(),
        backgroundColor: colorArray(),
      },
    ],
  };

  const getListOfProductName = () => {
    const nameArray2 = [];

    for (const link of listOfProducts) {
      nameArray2.push(link.productName);
    }

    return nameArray2;
  };

  const getVisitedListOfProductLink = () => {
    const visitedArray2 = [];

    for (const link of listOfProducts) {
      visitedArray2.push(link.visited);
    }

    return visitedArray2;
  };

  const data2 = {
    labels: getListOfProductName(),
    datasets: [
      {
        data: getVisitedListOfProductLink(),
        backgroundColor: colorArray(),
      },
    ],
  };

  const options = {};

  const toggleTab = (index) => {
    setToggleState(index);
  };
  useEffect(() => {
    save();
  }, []);

  // let username=Anayticsdata.username;
  // let listOfLinks=Anayticsdata.listOfLinks;
  // let listOfOtherLinks=Anayticsdata.listOfOtherLinks
  // let productdata=Anayticsdata.listOfProducts;

  // const storeData = async(data) => {
  //   setAnalytics(data);

  // };

  const save = async () => {
    const token = localStorage.getItem("token");

    axios
      .get("http://192.168.0.118:5000/user/get-visits", {
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer " + token,
        },
      })
      .then(async (response) => {
        console.log(response);
        let x = await response.data.listOfLinks;
        // setAnalytics(response.data);

        setListOfLinks(x);
        let y = await response.data.listOfOtherLinks;
        setListOfOtherLinks(y);
        let z = await response.data.listOfProducts;
        setproductlist(z);
        getproductDetails(z);
        console.log(z, "product");
        getLinksDetails(x);
        getotherDetails(y);
      })
      .catch((error) => {
        seterror(error.response.data.errorMessage);
      });
  };

  return (
    <>
      <div className="navbar-analytics">
        <Navbar />

        <Alert
          variant="filled"
          severity="error"
          style={{ display: `${Error != null ? "flex" : "none"}` }}
        >
          {Error}
        </Alert>
      </div>

      <div className="container1">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            <p style={{ fontWeight: "620", fontSize: "1.2rem" }}>
              Social Analytics{" "}
            </p>
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            <p style={{ fontWeight: "620", fontSize: "1.2rem" }}>
              {" "}
              Other Analytics{" "}
            </p>
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            <p style={{ fontWeight: "620", fontSize: "1.2rem" }}>
              {" "}
              Product Analytics{" "}
            </p>
          </button>
        </div>

        <div className="content-tabs1">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
            style={{ padding: "auto", position: "relative", width: "auto" }}
          >
            <div className="analytic-cards">
              <div>
                {" "}
                <Card
                  sx={{ minWidth: 275 }}
                  style={{ backgroundColor: "#669bbc", color: "white" }}
                >
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      <b>
                        {" "}
                        {analyticList === null
                          ? "no data "
                          : analyticList[0].name}
                      </b>
                    </Typography>

                    <Typography variant="h5" component="div">
                      Most Clicked Link
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {analyticList === null
                        ? "no data "
                        : analyticList[0].visited}
                    </Typography>
                  </CardContent>
                </Card>
              </div>

              <div>
                {" "}
                <Card
                  sx={{ minWidth: 275 }}
                  style={{ backgroundColor: "#8ecae6", color: "white" }}
                >
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      <b>
                        {" "}
                        {analyticList === null
                          ? "no data "
                          : analyticList[1].name}
                      </b>
                    </Typography>
                    <Typography variant="h5" component="div">
                      Least Clicked Link
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {analyticList === null
                        ? "no data "
                        : analyticList[1].visited}
                    </Typography>
                  </CardContent>
                </Card>
              </div>

              <div>
                {" "}
                <Card
                  sx={{ minWidth: 275 }}
                  style={{ backgroundColor: "#219ebc", color: "white" }}
                >
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      <b> Total Visits On your Account </b>
                    </Typography>
                    <Typography variant="h5" component="div">
                      Total Link
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {analyticList === null ? "no data " : analyticList[2]}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="table-chart" style={{ marginTop: "2vh" }}>
              <div className="tabel" style={{ margin: "0", padding: "0" }}>
                <TableContainer
                  component={Paper}
                  style={{ border: "2px solid gray" }}
                >
                  <Table sx={{ minWidth: 300 }} aria-label="caption table">
                    {/* <caption>A basic table example with a caption</caption> */}
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          {" "}
                          <b> Name </b>
                        </TableCell>
                        <TableCell>
                          <b> Links </b>
                        </TableCell>
                        <TableCell>
                          {" "}
                          <b>Clicks </b>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {listOfLinks.map((link, index) => (
                        <TableRow key={index}>
                          <TableCell
                            className="table-name"
                            component="th"
                            scope="row"
                            style={{ width: "300px" }}
                          >
                            {link.name}
                          </TableCell>
                          <TableCell
                            className="table-name"
                            style={{
                              width: "400px",
                              overflow: "hidden",
                              display: "block",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {link.link}
                          </TableCell>
                          <TableCell
                            className="table-name"
                            style={{ width: "200px" }}
                          >
                            {link.visited}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>

              <div className="pie-chart-social">
                <Pie
                  data={data}
                  style={{ maxHeight: "40vh" }}
                  options={options}
                />
              </div>
            </div>

            {/*           
          <div className="links-container"
          
          >
                {listOfLinks.map((link, index) => (
                  <div key={index} className="links-div"
                  style={{marginBottom:'3vh'}}>
                    <div className="label-div">
                      <label
                        style={{
                          fontWeight: "600",
                          marginTop: "1vh",
                          fontFamily: "Roboto",
                          color: "#353535",
                          alignItems:'baseline'
                         
                        }}
                      >
                        {link.name}
                     
                     
                      <label >
                        <SiGoogleanalytics/>
                        
                        {link.visited}
                        </label>
                         </label>
                    </div>
                   
                  </div>
                ))}
              </div> */}
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <div className="analytic-cards">
              <div>
                {" "}
                <Card
                  sx={{ minWidth: 275 }}
                  style={{ backgroundColor: "#669bbc", color: "white" }}
                >
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {analyticother === null
                        ? "no data "
                        : analyticother[0].name}
                    </Typography>
                    <Typography variant="h5" component="div">
                      Most Viewd Link
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {analyticother === null
                        ? "no data "
                        : analyticother[0].visited}
                    </Typography>
                  </CardContent>
                </Card>
              </div>

              <div>
                {" "}
                <Card
                  sx={{ minWidth: 275 }}
                  style={{ backgroundColor: "#8ecae6", color: "white" }}
                >
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {analyticother === null
                        ? "no data "
                        : analyticother[1].name}
                    </Typography>
                    <Typography variant="h5" component="div">
                      Most Clicked Link
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      adjective
                    </Typography>
                  </CardContent>
                </Card>
              </div>

              <div>
                {" "}
                <Card
                  sx={{ minWidth: 275 }}
                  style={{ backgroundColor: "#219ebc", color: "white" }}
                >
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      <b> Total Visits On your Account </b>
                    </Typography>
                    <Typography variant="h5" component="div">
                      Total Link
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {analyticother === null ? "no data " : analyticother[2]}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="table-chart" style={{ marginTop: "2vh" }}>
              <div className="tabel" style={{ margin: "0", padding: "0" }}>
                <TableContainer
                  component={Paper}
                  style={{ border: "2px solid gray" }}
                >
                  <Table sx={{ minWidth: 300 }} aria-label="caption table">
                    {/* <caption>A basic table example with a caption</caption> */}
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          {" "}
                          <b> Name </b>
                        </TableCell>
                        <TableCell>
                          <b> Links </b>
                        </TableCell>
                        <TableCell>
                          {" "}
                          <b>Clicks </b>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {listOfOtherLinks.map((link, index) => (
                        <TableRow key={index}>
                          <TableCell
                            className="table-name"
                            component="th"
                            scope="row"
                            style={{ width: "300px" }}
                          >
                            {link.name}
                          </TableCell>
                          <TableCell
                            className="table-name"
                            style={{
                              width: "400px",
                              overflow: "hidden",
                              display: "block",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {link.url}
                          </TableCell>
                          <TableCell
                            className="table-name"
                            style={{ width: "200px" }}
                          >
                            {link.visited}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>

              <div className="pie-chart-social" style={{ marginLeft: "10vw" }}>
                <Pie
                  data={data1}
                  style={{ maxHeight: "400vh" }}
                  options={options}
                />
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            <div className="analytic-cards">
              <div>
                {" "}
                <Card
                  sx={{ minWidth: 275 }}
                  style={{ backgroundColor: "#669bbc", color: "white" }}
                >
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {analyticsproduct === null
                        ? "no data "
                        : analyticsproduct[0].productName}
                    </Typography>
                    <Typography variant="h5" component="div">
                      Most Viewd Link
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {analyticsproduct === null
                        ? "no data "
                        : analyticsproduct[0].visited}
                    </Typography>
                  </CardContent>
                </Card>
              </div>

              <div>
                {" "}
                <Card
                  sx={{ minWidth: 275 }}
                  style={{ backgroundColor: "#8ecae6", color: "white" }}
                >
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {analyticsproduct === null
                        ? "no data "
                        : analyticsproduct[1].productName}
                    </Typography>
                    <Typography variant="h5" component="div">
                      Least Clicked Link
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {analyticother === null
                        ? "no data "
                        : analyticother[1].visited}
                    </Typography>
                  </CardContent>
                </Card>
              </div>

              <div>
                {" "}
                <Card
                  sx={{ minWidth: 275 }}
                  style={{ backgroundColor: "#219ebc", color: "white" }}
                >
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      <b> Total Visits On your Account </b>
                    </Typography>
                    <Typography variant="h5" component="div">
                      Total Link
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {analyticsproduct === null
                        ? "no data "
                        : analyticsproduct[2]}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="table-chart" style={{ marginTop: "2vh" }}>
              <div className="tabel" style={{ margin: "0", padding: "0" }}>
                <TableContainer
                  component={Paper}
                  style={{ border: "2px solid gray" }}
                >
                  <Table sx={{ minWidth: 300 }} aria-label="caption table">
                    {/* <caption>A basic table example with a caption</caption> */}
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          {" "}
                          <b> Name </b>
                        </TableCell>
                        <TableCell>
                          <b> Links </b>
                        </TableCell>
                        <TableCell>
                          {" "}
                          <b>Clicks </b>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {listOfProducts.map((link, index) => (
                        <TableRow key={index}>
                          <TableCell
                            className="table-name"
                            component="th"
                            scope="row"
                            style={{ width: "300px" }}
                          >
                            {link.productName}
                          </TableCell>
                          <TableCell
                            className="table-name"
                            style={{
                              width: "400px",
                              overflow: "hidden",
                              display: "block",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {link.productUrl}
                          </TableCell>
                          <TableCell
                            className="table-name"
                            style={{ width: "200px" }}
                          >
                            {link.visited}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>

              <div className="pie-chart-social" style={{ marginLeft: "10vw" }}>
                <Pie
                  data={data2}
                  style={{ maxHeight: "40vh" }}
                  options={options}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Analytics;
