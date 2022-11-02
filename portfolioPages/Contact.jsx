import React from "react";
import telegram from "./telegram.ico";

export default function Contact({ Color, Color1, Toggle }) {
  return (
    <div className="Contact">
      <div
        className="Contactinfo"
        style={{
          backgroundColor: Color1 ? Color1 : "#00bcd4",
          background: Toggle ? "rgba(255, 255, 255, 0.08)" : Color1,
          transition: `0.4s`,
        }}
      >
        <div className="box1">
          <h1 style={{ color: Color ? Color : "#000", transition: "0.4s" }}>
            Have you any Questions?
          </h1>
          <p>I`am at your service</p>
        </div>
        <div className="item">
          <div>
            <ion-icon
              name="phone-portrait"
              style={{ color: Color ? Color : "#000", transition: "0.4s" }}
            ></ion-icon>
            <p>Call Us On</p>
            <p>+374 99 42 48 48</p>
          </div>
          <div>
            <ion-icon
              name="mail-open"
              style={{ color: Color ? Color : "#000", transition: "0.4s" }}
            ></ion-icon>
            <p>Email</p>
            <p>petrossiana@bk.ru</p>
          </div>
          <div>
            <ion-icon
              name="map"
              style={{ color: Color ? Color : "#000", transition: "0.4s" }}
            ></ion-icon>
            <p>Office</p>
            <p>Garegin Njdeh/Chexov Street</p>
          </div>
          <div>
            <img
              src={telegram}
              alt="1"
              style={{
                color: Color ? Color : "#000",
                transition: "0.4s",
              }}
            />
            <a href="https://t.me/petrossian888">Telegram</a>
          </div>
          <div>
            <ion-icon
              name="logo-instagram"
              style={{ color: Color ? Color : "#000", transition: "0.4s" }}
            ></ion-icon>
            <a href="https://instagram.com/aram____888?r=nametag">Instagram</a>
          </div>
          <div>
            <ion-icon
              name="logo-facebook"
              style={{ color: Color ? Color : "#000", transition: "0.4s" }}
            ></ion-icon>
            <a href="https://www.facebook.com/profile.php?id=100012784269659">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
