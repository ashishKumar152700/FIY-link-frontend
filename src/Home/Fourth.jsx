import React from 'react';
import { FaLink } from "react-icons/fa";
import img3 from "../../public/comming_man_shape.png";
import "./Fourth.css";


function Fourth() {
  return (
    <>
          <div className="home-4">

      <div
          className="home-4-grid-1"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <p style={{ marginBottom: "5%", marginTop: "10%" }}>
            <FaLink
              style={{
                fontSize: "15rem",
                paddingLeft: "10%",
                color: "white",
              }}
            />
          </p>
          <h1
            style={{
              color: "#d2e823",
              lineHeight: "1.4",
              fontSize: "23px",
              fontFamily: "sans-serif",
              marginBottom: "20%",
              paddingLeft: "10%",
              paddingRight: "5%",
            }}
          >
            I don’t know what else to say, this is something that you haven’t
            seen before. Unique design, lightweight, and outstanding support.
            Itekseo always a pleasure to work!
          </h1>
        </div>
  

        <div
          className="home-4-grid-2"
          style={{ marginBottom: "4%", marginTop: "4%" }}
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <img src={img3} alt="" />
        </div>



        </div>


    </>
    )
}

export default Fourth