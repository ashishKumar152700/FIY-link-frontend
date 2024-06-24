import React from "react";
import "./caresoul.css"; // You should have a corresponding CSS file for styling
import { useState, useEffect } from "react";

console.clear();

const slides = [
  {
    image: "/icons/twitter.png",
  },
  {
    image: "/icons/linkedin.png",
  },
  {
    image: "/icons/whatsapp.png",
  },
  {
    image: "/icons/instagram.png",
  },
  {
    image: "/icons/youtube.png",
  },
];

function useTilt(active) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined,
    };

    let el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };

    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return ref;
}

const initialState = {
  slideIndex: 0,
};

const slidesReducer = (state, event) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length,
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1,
    };
  }
};

function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <div
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1,
      }}
    >
      <div
        className="slideBackground"
        style={{
          backgroundImage: `url('${slide.image}')`,
        }}
      />
      <div
        className="slideContent"
        style={{
          backgroundImage: `url('${slide.image}')`,
        }}
      >
        <div className="slideContentInner"></div>
      </div>
    </div>
  );
}

function Caresoulslider() {
  useEffect(() => {
    // Automatically change the slide every 3 seconds (adjust the interval as needed)
    const interval = setInterval(() => {
      dispatch({ type: "NEXT" });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const [state, dispatch] = React.useReducer(slidesReducer, initialState);
  const [slideIndex, setSlideIndex] = useState(0);

  // Function to go to the next slide
  const goToNextSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      className="slides"
      style={{ boxSizing: "border-box", position: "relative" }}
    >
      {/* <button onClick={() => dispatch({ type: 'PREV' })} style={{color:'black'}}>‹</button> */}

      {[...slides, ...slides, ...slides].map((slide, i) => {
        let offset = slides.length + (state.slideIndex - i);
        return <Slide slide={slide} offset={offset} key={i} />;
      })}
      {/* <button onClick={() => dispatch({ type: 'NEXT' })} style={{color:'black'}}> ›</button> */}
    </div>
  );
}

export default Caresoulslider;
