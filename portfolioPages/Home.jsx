import React from "react";
import { Link } from "react-router-dom";

function Home({ Color, Color1, Toggle, Typed, Language }) {
  return (
    <div className="Home">
      <div
        className="contaniner"
        style={{
          backgroundColor: Color1 ? Color1 : "#00bcd4",
          background: Toggle ? "rgba(255, 255, 255, 0.08)" : Color1,
          transition: `0.4s`,
        }}
      >
        <div className="box1">
          <h1
            style={{
              fontSize: "40px",
              display: "flex",
              color: "#fff",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Hello, my name is
            <p
              style={{
                color: Color ? Color : "#000",
                transition: `0.4s`,
                fontSize: "40px",
                marginLeft: "12px",
              }}
            >
              Aram
            </p>
          </h1>
          <h1
            style={{
              display: "flex",
              color: "#fff",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            I`am
            <Typed
              strings={["Web Developer", "Web Designer", "Frontend Developer"]}
              typeSpeed={100}
              backSpeed={60}
              loop
            >
              <input
                type="text"
                disabled
                style={{
                  background: "none",
                  border: "none",
                  color: Color ? Color : "#000",
                  transition: "0.4s",
                  fontSize: "30px",
                  fontWeight: "700",
                  marginLeft: "5px",
                }}
              />
            </Typed>
          </h1>
          <div className="info">
            <p>I`am a Web Developer with extensive experience for over 1</p>
            <p>year, My expertise is to create and Website Design</p>
            <p>Graphic Design and many more...</p>
          </div>
          <div className="aboutmore">
            <Link
              to="/About"
              style={{
                backgroundColor: Color ? Color : "#000",
                transition: "0.4s",
              }}
            >
              More About Me
            </Link>
          </div>
        </div>
        <div className="box2">
          <div
            className="div1"
            style={{
              border: `8px solid ${Color ? Color : "#000"} `,
              transition: `0.4s`,
            }}
          >
            <img src="" alt="1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
