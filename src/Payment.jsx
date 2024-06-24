import Navbar from "./Navbar";
import axios from "axios";
import "./Payment.css";
import useRazorpay from "react-razorpay";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
// import Pricing2 from "./Pricing2";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

const Payment = () => {
  const [Razorpay] = useRazorpay();
  const navigate = useNavigate();

  // useEffect(() => {
  //   const token = localStorage.getItem("token");

  //   if (!token) {
  //     window.location.href = "/";
  //   }
  // }, []);

  const savingpayment = (x, y, status) => {
    const token = localStorage.getItem("token");

    axios
      .post(
        "http://192.168.0.118:5000/payment/update-order",
        {
          razorpayOrderId: y,
          razorpayPaymentId: x,
          paymentStatus: status,
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
        alert(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const paymentrequest = (event, plan, amount) => {
    const token = localStorage.getItem("token");

    axios
      .post(
        "http://192.168.0.118:5000/payment/create-order",
        { paymentPlan: plan, paymentAmount: amount },
        {
          headers: {
            "content-type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((response) => {
        console.log(response);

        const options = {
          key: "rzp_test_sWKbQJQipWCqCf", // Enter the Key ID generated from the Dashboard
          amount: response.data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
          currency: "INR",
          name: "FIY-LINK",
          description: "Test Transaction",
          image: "https://example.com/your_logo",
          order_id: response.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
          handler: function (response) {
            // alert(response.razorpay_payment_id);
            // alert(response.razorpay_order_id);
            // alert(response.razorpay_signature);
            const x = response.razorpay_payment_id;
            const y = response.razorpay_order_id;

            savingpayment(x, y, "Paid");
          },
          prefill: {
            name: "",
            email: "",
            contact: "",
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#3399cc",
          },
        };

        const rzp1 = new Razorpay(options);

        rzp1.on("payment.failed", function (response) {
          alert(response.error.code);
          alert(response.error.description);
          alert(response.error.source);
          alert(response.error.step);
          alert(response.error.reason);
          alert(response.error.metadata.order_id);
          alert(response.error.metadata.payment_id);

          const x = response.error.metadata.payment_id;
          const y = response.error.metadata.order_id;

          savingpayment(x, y, "Faild");
        });

        rzp1.open();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handlefree = () => {
    navigate("/admin");
  };

  return (
    <>
      <div>
        <Navbar />{" "}
      </div>
      <div className="main-price-div">
        {" "}
        <div className="wrapper">
          <div className="table basic">
            <div className="price-section">
              <div className="price-area">
                <div className="inner-area">
                  <span className="text">Rs</span>
                  <span className="price">0</span>
                </div>
              </div>
            </div>
            <div className="package-name"></div>
            <ul className="features">
              <li>
                <span className="list-name">One Selected </span>
                <span className="icon check">
                  <DoneIcon />
                </span>
              </li>
              <li>
                <span className="list-name">No Youtube Embedding</span>
                <span className="icon cross">
                  <CloseIcon />
                </span>
              </li>
              <li>
                <span className="list-name">No Search Option</span>
                <span className="icon cross">
                  <CloseIcon />
                </span>
              </li>
              <li>
                <span className="list-name">Analytics</span>
                <span className="icon cross">
                  <CloseIcon />
                </span>
              </li>
            </ul>
            <div className="btn">
              <button onClick={handlefree}>Purchase</button>
            </div>
          </div>
          <div className="table premium">
            <div className="price-section">
              <div className="ribbon">
                <span>Recommend</span>
              </div>

              <div className="price-area">
                <div className="inner-area">
                  <span className="text">Rs</span>
                  <span className="price">199</span>
                </div>
              </div>
            </div>
            <div className="package-name"></div>
            <ul className="features">
              <li>
                <span className="list-name">Five Existing </span>
                <span className="icon check">
                  <DoneIcon />
                </span>
              </li>
              <li>
                <span className="list-name">Youtube Embedding</span>
                <span className="icon check">
                  <DoneIcon />
                </span>
              </li>
              <li>
                <span className="list-name">Search Option</span>
                <span className="icon cross">
                  <CloseIcon />
                </span>
              </li>
              <li>
                <span className="list-name">Analytics</span>
                <span className="icon cross">
                  <CloseIcon />
                </span>
              </li>
            </ul>
            <div className="btn">
              <button onClick={(event) => paymentrequest(event, "SILVER", 199)}>
                {" "}
                Purchase
              </button>
            </div>
          </div>
          <div className="table ultimate">
            <div className="price-section">
              <div className="price-area">
                <div className="inner-area">
                  <span className="text">Rs</span>
                  <span className="price">499</span>
                </div>
              </div>
            </div>
            <div className="package-name"></div>
            <ul className="features">
              <li>
                <span className="list-name">All Existing </span>
                <span className="icon check">
                  <DoneIcon />
                </span>
              </li>
              <li>
                <span className="list-name">Youtube Embedding</span>
                <span className="icon check">
                  <DoneIcon />
                </span>
              </li>
              <li>
                <span className="list-name">Search Option</span>
                <span className="icon check">
                  <DoneIcon />
                </span>
              </li>
              <li>
                <span className="list-name">Analytics</span>
                <span className="icon check">
                  <DoneIcon />
                </span>
              </li>
            </ul>
            <div className="btn">
              <button onClick={(event) => paymentrequest(event, "GOLD", 499)}>
                Purchase
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Payment;
