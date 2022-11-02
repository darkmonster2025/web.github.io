import React, { useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./portfolioCss/Home.css";
import Home from "./portfolioPages/Home";
import About from "./portfolioPages/About";
import aos from "aos";
import Typed from "react-typed";
import Error from "./Error/Error";
import { memo } from "react";
import Contact from "./portfolioPages/Contact";

const names = [
  {
    icon: "home",
    name: "Home",
  },
  {
    icon: "person",
    name: "About",
  },
  {
    icon: "chatbubble",
    name: "Contact",
  },
];

const colorTheme = [
  {
    color: "#393f4d",
  },
  {
    color: "#fc4445",
  },
  {
    color: "#FF5A09",
  },
  {
    color: "#d8ab4e",
  },
  {
    color: "#0db4b9",
  },
  {
    color: "#5cdb95",
  },
];

const colorBackground = [
  {
    color: "#494d5f",
    color1: "#454855",
  },
  {
    color: "#2d545e",
    color1: "#2A4349",
  },
  {
    color: "#feb300",
    color1: "#DEA419",
  },
  {
    color: "#8076a3",
    color1: "#6E6689",
  },
  {
    color: "#DCC7AA",
    color1: "#BCAD99",
  },
  {
    color: "#555555",
    color1: "#3E3E3E",
  },
];

export default memo(function Header() {
  const [active, setActive] = React.useState(false);
  const [active1, setActive1] = React.useState(false);
  const [active2, setActive2] = React.useState(false);
  const [Toggle, setToggle] = React.useState(false);
  const [Theme, setTheme] = React.useState(false);
  const [Color, setColor] = React.useState(false);
  const [Color1, setColor1] = React.useState(false);
  const [Background, setBackground] = React.useState(false);
  const [Language, setLanguage] = React.useState(false);
  const [Show, setShow] = React.useState(false);

  useEffect(() => {
    aos.init();
  }, []);

  return (
    <div
      className="background"
      style={{
        backgroundColor: Toggle ? "#121212" : Background,
        background: Background ? Background : "",
      }}
    >
      <BrowserRouter>
        <div className="headBox">
          <div
            className="header"
            style={{
              backgroundColor: Color1 ? Color1 : "#00bcd4",
              background: Toggle ? "rgba(255, 255, 255, 0.08)" : Color1,
              transition: "0.4s",
            }}
          >
            {names.map((item, i) => {
              return (
                <Link
                  to={`/${item.name}`}
                  key={i}
                  style={{
                    color:
                      (active === i && `${Color}`) || Show === i
                        ? Color
                        : "#FFF",
                  }}
                  onMouseEnter={(e) => setShow(e.target.style.color && i)}
                  onMouseLeave={(e) =>
                    setShow(e.target.style.color && i && false)
                  }
                  className={active === i ? "active" : ""}
                  onClick={() => setActive(i)}
                  title={`${item.name}`}
                >
                  <ion-icon name={`${item.icon}`}></ion-icon>
                  {item.name}
                </Link>
              );
            })}
          </div>
          <div
            className="themeColor"
            style={{ marginTop: Theme ? "140px" : "0px" }}
          >
            {Theme ? (
              <div className="colorDiv">
                <div className="Color" data-aos="fade-down">
                  <p
                    style={{
                      color: Toggle
                        ? "#fff"
                        : "#000" || Background
                        ? "#fff"
                        : "#000",
                    }}
                  >
                    Themes Colors
                  </p>
                  <div
                    className="colorBox"
                    style={{
                      backgroundColor: Color1 ? Color1 : "#00bcd4",
                      background: Toggle ? "rgba(255, 255, 255, 0.08)" : Color1,
                      transition: "0.4s",
                    }}
                  >
                    {colorTheme.map((item, i) => {
                      return (
                        <div
                          key={i}
                          className={active1 === i ? "active1" : ""}
                          onClick={(event) => {
                            setColor(
                              event.target.style.backgroundColor || true
                            );
                            setActive1(i);
                          }}
                          style={{
                            backgroundColor: `${item.color}`,
                            cursor: "pointer",
                          }}
                        ></div>
                      );
                    })}
                  </div>
                </div>
                <div className="Color" data-aos="fade-down">
                  <p
                    style={{
                      color: Toggle
                        ? "#fff"
                        : "#000" || Background
                        ? "#fff"
                        : "#000",
                    }}
                  >
                    Box Colors
                  </p>
                  <div
                    className="colorBox"
                    style={{
                      backgroundColor: Color1 ? Color1 : "#00bcd4",
                      background: Toggle ? "rgba(255, 255, 255, 0.08)" : Color1,
                      transition: "0.4s",
                    }}
                  >
                    {colorBackground.map((item, i) => {
                      return (
                        <div
                          key={i}
                          className={active2 === i ? "active2" : ""}
                          onClick={(event) => {
                            setColor1(
                              event.target.style.backgroundColor || true
                            );
                            setBackground(event.target.style.color || true);
                            setActive2(i);
                          }}
                          style={{
                            backgroundColor: `${item.color}`,
                            color: `${item.color1}`,
                            cursor: "pointer",
                          }}
                        ></div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="toggles" data-aos="fade-down">
              <button
                onClick={() => setTheme(!Theme)}
                className="colorTheme"
                style={{
                  backgroundColor: Color1 ? Color1 : "#00bcd4",
                  background: Toggle ? "rgba(255, 255, 255, 0.08)" : Color1,
                  color: Color ? Color : "#000",
                  transition: "0.4s",
                  cursor: "pointer",
                }}
              >
                <ion-icon name="settings-sharp"></ion-icon>
              </button>
              <button
                onClick={() => {
                  setToggle(!Toggle);
                }}
                className={Toggle ? "dark" : "light"}
                style={{
                  backgroundColor: Color1 ? Color1 : "#00bcd4",
                  background: Toggle ? "rgba(255, 255, 255, 0.08)" : Color1,
                  color: Color ? Color : "#000",
                  transition: "0.4s",
                  cursor: "pointer",
                }}
              >
                {Toggle ? (
                  <ion-icon name="moon-sharp"></ion-icon>
                ) : (
                  <ion-icon name="sunny-sharp"></ion-icon>
                )}
              </button>

              <div onClick={() => setLanguage(!Language)}>
                {Language ? (
                  <a
                    href="?lng=en"
                    className="language"
                    style={{
                      backgroundColor: Color1 ? Color1 : "#00bcd4",
                      background: Toggle ? "rgba(255, 255, 255, 0.08)" : Color1,
                      color: Color ? Color : "#000",
                      transition: "0.4s",
                    }}
                  >
                    <ion-icon name="earth"></ion-icon>
                  </a>
                ) : (
                  <a
                    href="?lng=ru"
                    className="language"
                    style={{
                      backgroundColor: Color1 ? Color1 : "#00bcd4",
                      background: Toggle ? "rgba(255, 255, 255, 0.08)" : Color1,
                      color: Color ? Color : "#000",
                      transition: "0.4s",
                    }}
                  >
                    <ion-icon name="earth"></ion-icon>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                Color={Color}
                Color1={Color1}
                Toggle={Toggle}
                Typed={Typed}
                language={Language}
              />
            }
          />
          <Route
            path="/Home"
            element={
              <Home
                Color={Color}
                Color1={Color1}
                Toggle={Toggle}
                Typed={Typed}
                language={Language}
              />
            }
          />
          <Route
            path="/About"
            element={<About Color={Color} Color1={Color1} Toggle={Toggle} />}
          />
          <Route
            path="/Contact"
            element={<Contact Color={Color} Color1={Color1} Toggle={Toggle} />}
          />
          <Route path="/*" element={<Error Color={Color} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
});
