/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/


import "./style.css";

export const Card = ({ className, overlapGroupClassName }) => {
  return (
    <div className={`card ${className}`}>
      <div className={`overlap-group ${overlapGroupClassName}`}>
        <img
          className="pic"
          alt="Pic"
          src="https://generation-sessions.s3.amazonaws.com/342598c3d7d2a185d6318fb5c89fed72/img/pic-17@2x.png"
        />
        <div className="price">
          <div className="element">999 ₽</div>
          <div className="text-wrapper">699 ₽</div>
        </div>
        <div className="info">
          <p className="lorem-ipsum-dolor">Lorem Ipsum Dolor Sit Amet Consectetur</p>
          <div className="identifier-number">Identifier number</div>
        </div>
      </div>
      
    </div>
  );
};
