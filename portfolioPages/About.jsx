import React from "react";
import Photo from "../DownloadPdfFile/mycv.pdf";
import ProgressBar from "./ProgressBar";

export default function About({ Color, Color1, Toggle }) {
  return (
    <div className="About">
      <div
        className="Aboutinfo"
        style={{
          backgroundColor: Color1 ? Color1 : "#00bcd4",
          background: Toggle ? "rgba(255, 255, 255, 0.08)" : Color1,
          transition: `0.4s`,
        }}
      >
        <div className="Aboutme">
          <div className="box1">
            <h1
              style={{
                color: Color ? Color : "#000",
                transition: "0.4s",
              }}
            >
              About Me
            </h1>
          </div>
        </div>
        <div className="information">
          <div className="box1">
            <h3>
              I`am Aram Petrosyan and
              <span
                style={{
                  color: Color ? Color : "#000",
                  transition: "0.4s",
                  marginLeft: "8px",
                }}
              >
                Web Developer
              </span>
            </h3>
          </div>
        </div>
        <div className="information2">
          <div className="box1">
            <div className="myinfo">
              <div
                style={{
                  borderBottom: `2px solid ${Color ? Color : "#000"}`,
                  transition: "0.4s",
                }}
              >
                <p
                  style={{
                    color: Color ? Color : "#000",
                    transition: "0.4s",
                    marginLeft: "-1px",
                  }}
                >
                  Birthday:
                </p>
                <p>3 December 2005</p>
              </div>
              <div
                style={{
                  borderBottom: `2px solid ${Color ? Color : "#000"}`,
                  transition: "0.4s",
                }}
              >
                <p
                  style={{
                    color: Color ? Color : "#000",
                    transition: "0.4s",
                    marginLeft: "-1px",
                  }}
                >
                  Age:
                </p>
                <p>17</p>
              </div>
              <div
                style={{
                  borderBottom: `2px solid ${Color ? Color : "#000"}`,
                  transition: "0.4s",
                }}
              >
                <p
                  style={{
                    color: Color ? Color : "#000",
                    transition: "0.4s",
                    marginLeft: "-1px",
                  }}
                >
                  Website:
                </p>
                <p>www.petrossians.site</p>
              </div>
              <div
                style={{
                  borderBottom: `2px solid ${Color ? Color : "#000"}`,
                  transition: "0.4s",
                }}
              >
                <p
                  style={{
                    color: Color ? Color : "#000",
                    transition: "0.4s",
                    marginLeft: "-1px",
                  }}
                >
                  Email:
                </p>
                <p>petrossiana@bk.ru</p>
              </div>
              <div
                style={{
                  borderBottom: `2px solid ${Color ? Color : "#000"}`,
                  transition: "0.4s",
                }}
              >
                <p
                  style={{
                    color: Color ? Color : "#000",
                    transition: "0.4s",
                    marginLeft: "-1px",
                  }}
                >
                  City:
                </p>
                <p>Yerevan</p>
              </div>
              <div
                style={{
                  borderBottom: `2px solid ${Color ? Color : "#000"}`,
                  transition: "0.4s",
                }}
              >
                <p
                  style={{
                    color: Color ? Color : "#000",
                    transition: "0.4s",
                    marginLeft: "-1px",
                  }}
                >
                  Phone:
                </p>
                <p>+374 99 42 48 48</p>
              </div>
            </div>
          </div>
        </div>
        <div className="information3">
          <div className="item1">
            <a
              style={{
                backgroundColor: Color ? Color : "#000",
                transition: "0.4s",
              }}
              href={Photo}
              download={Photo}
            >
              Download Cv
            </a>
          </div>
          <div className="item2">
            <ProgressBar done="88" Color={Color} name="HTML & CSS" />
            <ProgressBar done="74" Color={Color} name="JavaScript" />
            <ProgressBar done="60" Color={Color} name="React JS" />
          </div>
        </div>
      </div>
    </div>
  );
}
